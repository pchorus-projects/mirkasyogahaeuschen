// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  files: ['**/*.vue'],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/no-v-html': 'off',
  },
});
