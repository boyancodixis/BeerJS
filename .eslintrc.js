module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'newline-before-return': 'warn',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'import/no-cycle': 'warn',
    'import/prefer-default-export': 'off',
  },
};