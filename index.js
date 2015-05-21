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
  if (!(this instanceof Favicons)) return new Favicons(inputTree, options);
  if (!inputTree) {
    throw new Error('broccoli-favicons must be passed an inputTree, instead it received `undefined`');
  }
  options = options || {};

  this.inputTree = inputTree;
  this.options = merge(defaultOptions, options);
  this.config = merge(defaultConfig, this.options.config);

  options.include = values(this.config.files.src) || [ 'favicon.png' ];

  CachingWriter.apply(this, arguments);
}

Favicons.prototype.getCacheDir = function () {
  return quickTemp.makeOrReuse(this, 'tmpCacheDir');
};

Favicons.prototype.updateCache = function (srcDirs, destDir) {
  var self = this;
  var srcDir = srcDirs[0];
  var options = this.options;
  var config = merge({}, this.config);

  if (!config.files.src) {
    config.files.src = self.detectSources(srcDir, options.defaultIcon);
  } else {
    for(var key in config.files.src) {
      config.files.src[key] = path.join(srcDir, config.files.src[key]);
    }
  }
  config.files.dest = path.join(destDir, options.destDir);

  if (!self.verifySources(config.files.src)) {
    return rsvp.reject(new Error('Missing favicon source files!'));
  }

  return new Promise(function(resolve, reject) {
    favicons(config, function(meta) {
      if (options.htmlCallback) {
        options.htmlCallback(meta);
      }
      resolve();
    });
  });
};

Favicons.prototype.detectSources = function(srcDir, defaultIcon) {
  var sources = {};
  var defaultIconSource = path.join(srcDir, defaultIcon + '.png');
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

Favicons.prototype.cleanup = function () {
  quickTemp.remove(this, 'tmpCacheDir');
  CachingWriter.prototype.cleanup.call(this);
};
