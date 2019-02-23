const glob = require(`glob`);

const componentNameFromSpec = spec => spec.split(`/`).reverse()[0].replace(/\..*?\.js/, ``);

const integrationTestMode = process.argv.includes(`--integration-test`);
let pages;

if (integrationTestMode) {
  const integrationSpecs = glob.sync(`./src/**/*.integration.js`);
  pages = integrationSpecs.reduce((prev, spec) => {
    const name = componentNameFromSpec(spec);
    // eslint-disable-next-line no-param-reassign
    prev[name] = { entry: spec };

    return prev;
  }, {});
}

module.exports = {
  pages,
  lintOnSave: false,
};
