const puppeteerModes = [`acceptance`, `integration`];
const { TEST_MODE } = process.env;
const PUPPETEER_MODE = puppeteerModes.includes(TEST_MODE);

if (PUPPETEER_MODE) jest.setTimeout(60000);
