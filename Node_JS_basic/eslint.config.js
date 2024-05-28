// eslint.config.js
export default [
    {
      ignores: ["node_modules/**"],
    },
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      plugins: {
        jest: {
          files: ['*.test.js', '*.spec.js'],
          settings: {
            jest: {
              version: 'detect',
            },
          },
        },
      },
      linterOptions: {
        env: {
          browser: false,
          es6: true,
          jest: true,
        },
        extends: [
          'airbnb-base',
          'plugin:jest/all',
        ],
      },
      rules: {
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
    },
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ];
  