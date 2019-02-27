import Vue from 'vue';

const SERVE_MODE = !global.describe;
const TEST_MODE = !SERVE_MODE && process.env.TEST_MODE;

export const setup = SERVE_MODE ? cb => cb() : () => {};

export const mount = (asyncComponent, options = {}) => {
  new Vue(Object.assign({
    render: h => h(asyncComponent),
  }, options)).$mount(`#app`);
};

export const run = (cb) => {
  if (SERVE_MODE) return null;

  if (TEST_MODE === `integration`) {
    return cb({});
  }

  return cb;
};

export const find = async (selector) => {
  await page.waitForSelector(selector);
  return page.$(selector);
};

export const findAll = async (selector) => {
  await page.waitForSelector(selector);
  return page.$$(selector);
};

export const containsText = async (text, wrapperSelector) => {
  const textSelector = `//text()[contains(.,'${text}')]`;
  const wrapper = wrapperSelector ? await find(wrapperSelector) : page;

  await page.waitForXPath(textSelector);
  const matches = await wrapper.$x(textSelector);

  return matches.length > 0;
};

export const open = url => page.goto(`http://localhost:8080${url}`);
