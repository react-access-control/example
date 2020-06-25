const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin)
  );
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@react-access-control/authentication': resolve('../authentication'),
    react: path.resolve('./node_modules/react'),
    // etc...
  });
  return config;
};
