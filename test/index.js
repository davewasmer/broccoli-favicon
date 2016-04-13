'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var broccoli = require('broccoli');
var Favicons = require('../index');

var builder;

describe('broccoli-favicons', function() {
  afterEach(function() {
    if (builder) {
      builder.cleanup();
    }
  });

  it('creates favicons', function() {
    this.timeout(60000);
    var sourcePath = path.join('test', 'fixtures');
    var tree = new Favicons(sourcePath);

    builder = new broccoli.Builder(tree);
    return builder.build().then(function(results) {
      var destDir = builder.outputPath;
      assert(fs.statSync(path.join(destDir, 'favicon-16x16.png')).isFile());
    });
  });

});
