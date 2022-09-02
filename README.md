# broccoli-favicon

[![Build Status](https://travis-ci.org/davewasmer/broccoli-favicon.svg?branch=master)](https://travis-ci.org/davewasmer/broccoli-favicon)
[![Dependency Status](https://david-dm.org/davewasmer/broccoli-favicon.svg)](https://david-dm.org/davewasmer/broccoli-favicon.svg)

Takes a single `favicon.png` and outputs various sizes and file formats for favicons for different platforms and devices. Uses [`favicons`](https://github.com/haydenbleasel/favicons), see that projects documentation for details on the full range of support favicon generation.

## Usage

Default configuration values are show below:

```js
import Favicon from "broccoli-favicon";

const outputNode = new Favicon(nodeWithFaviconImage, {
  // The path to the source image in 'nodeWithFaviconImage'
  iconPath: "favicon.png",

  // the sub path where the icon files will be written to. Defaults to writing to the root path.
  outputPath: "favicons",

  // this option enables/disables writing a "favicon.ico" copy at the root path
  // this is useful if you use the `outputPath` option but still want to keep
  // a favicon.ico copy at the root. Read more about why this is important: https://stackoverflow.com/a/21359390
  placeIcoAtRoot: false,

  onSuccess(htmlArray, rawObject) {
    // this method is called once the generator finishes;
    // the first parameter is an array of strings containing
    // the appropriate HTML to use the generated icons
    // and the second argument is a raw object containing serialized html objects
  },

  // The favicons config object is passed directly to the underlying `Favicons` module
  // See https://github.com/haydenbleasel/favicons for details and defaults
  faviconsConfig: {},
});
```
