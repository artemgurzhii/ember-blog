module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  globals: {
    'Ember': true
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'comma-dangle': 0,

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // require camel case names
    camelcase: ['warn', { properties: 'never' }],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',

    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // specify whether double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true }],

    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],

    'ember/named-functions-in-promises': 'off'
  }
};
