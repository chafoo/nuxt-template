module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-prototype-builtins': 'off',
    'ban-single-arg-parens': 'off',
    'vue/require-default-prop': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-return-assign': 'off',
    'no-console': 'off',
    'vue/html-self-closing': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-v-html': 'off',
    'vue/v-bind-style': 'off'
  }
}
