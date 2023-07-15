module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'prettier'],
  rules: {
    'no-restricted-imports': [
      2,
      {
        paths: [
          {
            importNames: ['Text'],
            message: 'Use`Typography`from`@components`instead.',
            name: 'react-native',
          },
        ],
      },
    ],
    'sort-imports': 'off',
    'simple-import-sort/exports': 2,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^\\u0000'],
          ['^react'],
          ['^'],
          ['^@?\\w'],
          [
            '^@src?\\w',
            '^@components?\\w',
            '^@navigation?\\w',
            '^@screens?\\w',
            '^@themes?\\w',
            '^@utils?\\w',
          ],
          ['^\\.'],
        ],
      },
    ],
    'import/newline-after-import': [2, { count: 1 }],
    'import/no-duplicates': [2, { 'prefer-inline': true }],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }],
    'newline-before-return': 2,
    'react-native/no-color-literals': 1,
    'react-native/no-inline-styles': 1,
    'react-native/no-raw-text': [
      2,
      { skip: ['Layout.Header', 'Typography', 'Typography.Typography'] },
    ],
    'react-native/no-single-element-style-arrays': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'max-len': [
      'error',
      { code: 80, tabWidth: 2, ignorePattern: '^import .*|export' },
    ],
    'no-fallthrough': 'error',
    curly: [2, 'multi'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      plugins: ['@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json',
      },
      parser: '@typescript-eslint/parser',
      settings: {
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/resolver': { typescript: { alwaysTryTypes: true } },
      },
      rules: {
        'import/no-unresolved': 2,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never',
          },
        ],
      },
    },
  ],
};
