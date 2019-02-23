import { mount, run, setup } from '../../test/utils';
import router from '../router';

setup(() => {
  const ArticleListingContainer = () => import(`./ArticleListingContainer.vue`);
  mount(ArticleListingContainer, { router });
});

export default run(({ url = `ArticleListingContainer` }) => {
  describe(`Article listing`, () => {
    const container = () => cy.get(`[data-qa="article listing"]`);
    const grid = () => container().find(`[data-qa="article grid"]`);

    it(`should filter articles by category when a filter is clicked.`, () => {
      cy.visit(url);

      container()
        .find(`[data-qa="filter link"]`)
        .eq(2)
        .click();
      grid().contains(`Labore et dolore`);
      grid().contains(`Lorem ipsum`);

      container()
        .find(`[data-qa="filter link"]`)
        .eq(1)
        .click();
      grid().contains(`At vero eos`);
      grid().contains(`Dolor sit amet`);
      grid().contains(`Sit amet dolor`);
    });

    it(`should open the next page when the next page link is clicked.`, () => {
      cy.visit(url);

      container()
        .find(`a[data-qa="next page link"]`)
        .click();
      grid().contains(`Labore et dolore`);
      grid().contains(`Dolor sit amet`);
      grid().contains(`Sit amet dolor`);
    });
  });
});
