const baseConfig = require('@monorepo-template/eslint/react');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  extends: ['plugin:storybook/recommended']
};
