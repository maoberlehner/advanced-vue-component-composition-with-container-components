import Vue from 'vue';

const SERVE_MODE = !global.describe;
const TEST_MODE = !SERVE_MODE && Cypress.env(`mode`);

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
