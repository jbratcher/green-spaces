module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'no-return-assign': 'off',
    'no-console': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'object-shorthand': 'off',
  }
}
