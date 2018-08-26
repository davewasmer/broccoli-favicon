const babel = require('broccoli-babel-transpiler');
const merge = require('broccoli-merge-trees');
const lint = require('broccoli-lint-eslint');
const mv = require('broccoli-stew').mv;

module.exports = merge([
  mv(babel(lint('tests')), 'tests'),
  babel(lint('src')),
]);