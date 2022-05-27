module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',

    'prettier/prettier': [
      'error',
      {
        formatOnSave: true,
        singleQuote: true,
        endOfLine: 'auto',
        printWidth: 120,
        semi: false,
      },
    ],

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],

        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    'react/display-name': 'off',
  },
}
