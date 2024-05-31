import { FlatCompat } from '@eslint/eslintrc';

// Use FlatCompat to support ESLint v8+ config in ESLint v7
const compat = new FlatCompat({
  baseDirectory: __dirname, // if applicable
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