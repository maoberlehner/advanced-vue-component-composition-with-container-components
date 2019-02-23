const customConfig = require(`../cypress.config`);

module.exports = (on, config) => Object.assign({}, config, customConfig);
