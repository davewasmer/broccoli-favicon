const babel = require('broccoli-babel-transpiler');
const merge = require('broccoli-merge-trees');
const lint = require('broccoli-lint-eslint');
const mv = require('broccoli-stew').mv;

const babelOptions = {
  "presets": [
    ["env", {
      "targets": {
        "node": 4
      }
    }]
  ]
}

module.exports = merge([
  mv(babel(lint('tests'), babelOptions), 'tests'),
  babel(lint('src'), babelOptions),
]);