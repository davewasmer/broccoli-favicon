const merge = require('broccoli-merge-trees');
const mv = require('broccoli-stew').mv;
const babelTranspiler = require('broccoli-babel-transpiler');
const ESLint = require('broccoli-lint-eslint');

const babelOptions = {
  "presets": ["@babel/preset-env"]
};

module.exports = merge([
  mv(babelTranspiler(ESLint.create('tests'), babelOptions), 'tests'),
  babelTranspiler(ESLint.create('src'), babelOptions)
]);