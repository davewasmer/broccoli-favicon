var path = require('path');
var assert = require('assert');
var fs = require('fs');
var merge = require('lodash/merge');
var Promise = require('bluebird');
var Plugin = require('broccoli-caching-writer');
var favicons = require('favicons/es5');

var defaultConfig = {
  appName: null,                  // Your application's name. `string`
  appDescription: null,           // Your application's description. `string`
  developerName: null,            // Your (or your developer's) name. `string`
  developerURL: null,             // Your (or your developer's) URL. `string`
  background: '#fff',             // Background colour for flattened icons. `string`
  path: '/',                      // Path for overriding default icons path. `string`
  url: '/',                       // Absolute URL for OpenGraph image. `string`
  display: 'standalone',          // Android display: "browser" or "standalone". `string`
  orientation: 'portrait',        // Android orientation: "portrait" or "landscape". `string`
  version: '1.0',                 // Your application's version number. `number`
  logging: false,                 // Print logs to console? `boolean`
  online: false,                  // Use RealFaviconGenerator to create favicons? `boolean`
  icons: {
    android: true,              // Create Android homescreen icon. `boolean`
    appleIcon: true,            // Create Apple touch icons. `boolean`
    appleStartup: true,         // Create Apple startup images. `boolean`
    coast: true,                // Create Opera Coast icon. `boolean`
    favicons: true,             // Create regular favicons. `boolean`
    firefox: true,              // Create Firefox OS icons. `boolean`
    opengraph: true,            // Create Facebook OpenGraph image. `boolean`
    twitter: true,              // Create Twitter Summary Card image. `boolean`
    windows: true,              // Create Windows 8 tile icons. `boolean`
    yandex: true                // Create Yandex browser icon. `boolean`
  }
};

function Favicons(inputPaths, options) {
  options = options || {};
  if (!Array.isArray(inputPaths)) {
    inputPaths = [ inputPaths ];
  }
  this.config = options.faviconsConfig || {};
  this.inputPaths = inputPaths;
  this.imagePath = options.imagePath || 'favicon.png';
  this.htmlCallback = options.htmlCallback || function() {};
  Plugin.call(this, inputPaths, {
    inputFiles: [this.imagePath], // the only input we care about, all output is derived from this input
    annotation: options.annotation
  });
}
Favicons.prototype = Object.create(Plugin.prototype);
Favicons.prototype.constructor = Plugin;

Favicons.prototype.build = function build() {
  var self = this;
  assert(this.inputPaths.length === 1, 'You must supply a single input node only.');
  return new Promise(function(resolve, reject) {
    var config = merge(defaultConfig, self.config);
    var filepath = path.join(self.inputPaths[0], self.imagePath);
    favicons(filepath, config, function(error, response) {
      if (error) {
        reject(new Error(error.name + ': ' + error.message));
      }
      self.htmlCallback(response.html);
      response.images.forEach(function writeImageFile(image) {
        fs.writeFileSync(path.join(self.outputPath, image.name), image.contents);
      });
      resolve();
    });
  });
}

module.exports = Favicons;

