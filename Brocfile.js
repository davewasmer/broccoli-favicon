const merge = require('broccoli-merge-trees');
const mv = require('broccoli-stew').mv;
const babelTranspiler = require("broccoli-babel-transpiler");

const babelOptions = {
  presets: ["@babel/preset-env"],
};

module.exports = merge([
  mv(babelTranspiler("tests", babelOptions), "tests"),
  babelTranspiler("src", babelOptions),
]);