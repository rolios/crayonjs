module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/require-default-prop': 'off',
    'template-curly-spacing': ['error', 'never'],
    'no-restricted-globals': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['warn', {
      code: 140,
    }],
    semi: ['error', 'always'],
    'no-param-reassign': 'off',
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],
    'no-underscore-dangle': 'off',
    'vue/no-deprecated-dollar-listeners-api': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      ts: 'never',
    }],
    'vue/no-deprecated-v-on-native-modifier': 'off',
  },
};
