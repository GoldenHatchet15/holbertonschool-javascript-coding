import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: __dirname, // This should be the root of your project
});

export default [
  {
    languageOptions: {
      ecmaVersion: 2018,
      globals: {
        es6: true,
        node: true,
      },
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
  ...compat.extends('eslint:recommended'),
];
