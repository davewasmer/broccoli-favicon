'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var broccoli = require('broccoli');
var favicons = require('../index');

var builder;

describe('broccoli-favicons', function() {
  afterEach(function() {
    if (builder) {
      builder.cleanup();
    }
  });

  it('creates favicons', function() {
    this.timeout(40000);
    var sourcePath = path.join('test', 'fixtures', 'simple');
    var tree = favicons(sourcePath);

    builder = new broccoli.Builder(tree);
    return builder.build().then(function(results) {
      var destDir = results.directory;
      assert(fs.statSync(path.join(destDir, 'favicon-16x16.png')).isFile());
      assert(fs.statSync(path.join(destDir, 'favicon.ico')).isFile());
    });
  });
});
