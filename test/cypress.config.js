const mode = process.env.cypress_mode;

module.exports = {
  baseUrl: `http://localhost:8080`,
  fixturesFolder: `test/fixtures`,
  integrationFolder: mode === `integration` ? `src` : `test/features`,
  screenshotsFolder: `test/screenshots`,
  supportFile: `test/support/index.js`,
  testFiles: mode === `integration` ? `**/*.integration.*` : `**/*.*`,
  videosFolder: `test/videos`,
};
