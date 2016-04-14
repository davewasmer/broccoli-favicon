# broccoli-favicon

[![Build Status](https://travis-ci.org/davewasmer/broccoli-favicon.svg?branch=master)](https://travis-ci.org/davewasmer/broccoli-favicon)
[![Dependency Status](https://david-dm.org/davewasmer/broccoli-favicon.svg)](https://david-dm.org/davewasmer/broccoli-favicon.svg)

Takes a single `favicon.png` and outputs various sizes and file formats for favicons for different platforms and devices. Uses [`favicons`](https://github.com/haydenbleasel/favicons), see that projects documentation for details on the full range of support favicon generation.

## Usage

Default configuration values are show below:

```js
  var outputNode = new Favicons(nodeThatContainsSourceImage, {
    htmlCallback: function(arrayOfHtmlStrings) {
      // this method is called once the generator finishes;
      // the first parameter is an array of strings containing
      // the appropriate HTML to use the generated icons
    },
    imagePath: 'favicon.png', // The path to the source image in nodeThatContainsSourceImage
    // The config object is passed directly to the underlying `favicons` module
    // See https://github.com/haydenbleasel/favicons for details
    config: {
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
    }
  });
```
