const path = require('path');

const companySuffix = process.env.VUE_APP_WHITELABEL_SUFFIX;

const interchangeables = {
  variables: {
    A: './src/assets/css/variablesA.css',
    B: './src/assets/css/variablesB.css',
  },
  header: {
    A: './src/components/HeaderA.vue',
    B: './src/components/HeaderB.vue',
  },
  about: {
    A: './src/views/AboutA.vue',
    B: './src/views/AboutB.vue',
  },
};

const whitelabelAliases = {};

Object.keys(interchangeables).forEach((key) => {
  whitelabelAliases[key] = path.resolve(__dirname, `${interchangeables[key][companySuffix]}`);
});

module.exports = whitelabelAliases;
