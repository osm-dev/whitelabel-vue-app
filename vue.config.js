const whitelabelAliases = require('./whitelabel.config');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        ...whitelabelAliases,
      },
    },
  },
};
