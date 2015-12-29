var fs = require('fs');
var path = require('path');
var rsvp = require('rsvp');
var Promise = rsvp.Promise;
var quickTemp = require('quick-temp');
var CachingWriter = require('broccoli-caching-writer');
var merge = require('lodash-node/modern/object/merge');
var values = require('lodash-node/modern/object/values');
var favicons = require('favicons');
var chalk = require('chalk');
var hashFile = require('hash-file');
var symlinkOrCopy = require('symlink-or-copy');
var rimraf = rsvp.denodeify(require('rimraf'));
var mkdirp =  require('mkdirp');

// These are options for this plugin
var defaultOptions = {
  destDir: '.',
  defaultIcon: 'favicon'
};

// Config passed directly to the favicons module
var defaultConfig = {
  files: {
    // src: null,                Determined at runtime
    // dest: null,               Determined at runtime
    html: null,               // Disable - we just want the runtime output
    iconsPath: null,          // Path for overriding default icons path. `string`
    androidManifest: null,    // Path for an existing android_chrome_manifest.json. `string`
    browserConfig: null,      // Path for an existing browserconfig.xml. `string`
    firefoxManifest: null,    // Path for an existing manifest.webapp. `string`
    yandexManifest: null      // Path for an existing yandex-browser-manifest.json. `string`
  },
  icons: {
    android: true,            // Create Android homescreen icon. `boolean`
    appleIcon: true,          // Create Apple touch icons. `boolean`
    appleStartup: true,       // Create Apple startup images. `boolean`
    coast: true,              // Create Opera Coast icon. `boolean`
    favicons: true,           // Create regular favicons. `boolean`
    firefox: true,            // Create Firefox OS icons. `boolean`
    opengraph: true,          // Create Facebook OpenGraph. `boolean`
    windows: true,            // Create Windows 8 tiles. `boolean`
    yandex: true              // Create Yandex browser icon. `boolean`
  },
  settings: {
    appName: null,            // Your application's name. `string`
    appDescription: null,     // Your application's description. `string`
    developer: null,          // Your (or your developer's) name. `string`
    developerURL: null,       // Your (or your developer's) URL. `string`
    version: 0.1,             // Your application's version number. `number`
    background: null,         // Background colour for flattened icons. `string`
    index: null,              // Path for the initial page on the site. `string`
    url: null,                // URL for your website. `string`
    silhouette: false,        // Turn the logo into a white silhouette for Windows 8. `boolean`
    logging: false            // Print logs to console? `boolean`
  },
  favicon_generation: null,     // Complete JSON overwrite for the favicon_generation object. `object`
};

// Favicon types supported by the favicons module
var iconTypes = [
  'android',
  'appleIcon',
  'appleStartup',
  'coast',
  'firefox',
  'opengraph',
  'windows',
  'yandex'
];

module.exports = Favicons;
Favicons.prototype = Object.create(CachingWriter.prototype);
Favicons.prototype.constructor = Favicons;

function Favicons (inputTree, options) {
  if (!(this instanceof Favicons)) {
    return new Favicons(inputTree, options);
  }
  if (!inputTree) {
    throw new Error('broccoli-favicons must be passed an inputTree, instead it received `undefined`');
  }
  options = options || {};

  this.inputTree = inputTree;
  this.options = merge(defaultOptions, options);
  this.config = merge(defaultConfig, this.options.config);

  if (this.options.persistentCacheDir) {
    this.cachedTreeDir = path.join(this.options.persistentCacheDir, 'cached-tree');
    this.cacheFile = path.join(this.options.persistentCacheDir, '.favicon-cache-key');
    this.cacheFileMeta = path.join(this.options.persistentCacheDir, '.favicon-meta.json');
  }

  options.include = values(this.config.files.src) || [ 'favicon.png' ];
  CachingWriter.apply(this, arguments);
}

Favicons.prototype.getCacheDir = function () {
  return quickTemp.makeOrReuse(this, 'tmpCacheDir');
};

Favicons.prototype.updateCache = function (srcDirs, destDir) {
  var self = this;
  var options = this.options;
  // Single tree inputs only
  var srcDir = srcDirs[0];
  // Copy config to avoid mutating the original
  var config = merge({}, this.config);

  config.files.src = self.buildSources(config.files.src, srcDir);

  if (!self.verifySources(config.files.src)) {
    return rsvp.reject(new Error('Missing favicon source files!'));
  }

  if (options.persistentCacheDir) {
    var cacheKey = this.cacheKeyForConfig(config);
    return rsvp.resolve(this.hitsPersistentCache(cacheKey))
      .then(function(freshCache) {
        if (!freshCache) {
          return self.updatePersistentCache(cacheKey, config);
        }
      }).then(function() {

        if (fs.existsSync(self.cacheFileMeta)) {
          var meta = JSON.parse(fs.readFileSync(self.cacheFileMeta));
          if (self.options.callback) {
            self.options.callback(meta);
          }
        }

        rimraf.sync(destDir);
        return symlinkOrCopy.sync(self.cachedTreeDir, destDir);
      });
  } else {
    return this.buildFavicons(config, destDir);
  }
};

// Returns whether or not the supplied cache key is the same as the one on disk
Favicons.prototype.hitsPersistentCache = function(cacheKey) {
  if (fs.existsSync(this.cacheFile)) {
    var oldCacheKey = fs.readFileSync(this.cacheFile, 'utf-8');
    if (oldCacheKey === cacheKey) {
      return true;
    }
  }
  return false;
};

// Update the persistent cache dir and the cache key
Favicons.prototype.updatePersistentCache = function(cacheKey, config) {
  var self = this;
  return rimraf(this.cachedTreeDir)
  .then(function() {
    mkdirp.sync(self.cachedTreeDir);
    return self.buildFavicons(config, self.cachedTreeDir);
  }).then(function(meta) {
    fs.writeFileSync(self.cacheFileMeta, JSON.stringify(meta));
    fs.writeFileSync(self.cacheFile, cacheKey);
  });
};

// Take a config source files object, and if it has sources, return an object
// with the file names relative to the srcDir. If no sources, detect the
// sources automatically from what files are present.
Favicons.prototype.buildSources = function(sources, srcDir) {
  if (!sources) {
    return this.detectSources(srcDir);
  } else {
    eachFile(sources, function(file, type) {
      sources[type] = path.join(srcDir, file);
    });
    return sources;
  }
};

// Given a source dir, try to find source files that match the icon type names
// (i.e. "android.png" for "android" type). If no such file exists, fall back
// to using the defaultIcon from the options.
Favicons.prototype.detectSources = function(srcDir) {
  var sources = {};
  var defaultIconSource = path.join(srcDir, this.options.defaultIcon + '.png');
  iconTypes.forEach(function(type) {
    var typeSource = path.join(srcDir, type + '.png');
    if (fs.existsSync(typeSource)) {
      sources[type] = typeSource;
    } else {
      sources[type] = defaultIconSource;
    }
  });
  sources.favicons = defaultIconSource;
  return sources;
};

// Run the favicons module to build the favicons. Returns a promise representing
// when the favicons. Invokes the htmlCallback with the generated html.
Favicons.prototype.buildFavicons = function(config, destDir) {
  var self = this;
  return new Promise(function(resolve) {
    config.files.dest = destDir;
    favicons(config, function(meta) {
      if (self.options.callback) {
        self.options.callback(meta);
      }
      resolve(meta);
    });
  });
};

// Make sure that the source files specified actually exist, and throw if they
// don't.
Favicons.prototype.verifySources = function(sources) {
  var hasAllSources = true;
  Object.keys(sources).forEach(function(sourceType) {
    var sourcePath = sources[sourceType];
    if (!fs.existsSync(sourcePath)) {
      console.error(chalk.red("Source file for " + sourceType + " favicon (" + sourcePath + ") does not exist!"));
      hasAllSources = false;
    }
  });
  return hasAllSources;
};

Favicons.prototype.cacheKeyForConfig = function(config) {
  var cacheKey = '';
  eachFile(config.files.src, function(file) {
    cacheKey += hashFile.sync(file);
  });
  return cacheKey;
};

Favicons.prototype.cleanup = function () {
  quickTemp.remove(this, 'tmpCacheDir');
  CachingWriter.prototype.cleanup.call(this);
};

function eachFile(srcs, fn) {
  for (var type in srcs) {
    fn(srcs[type], type);
  }
}
