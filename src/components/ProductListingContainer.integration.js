import { mount, run, setup } from '../../test/utils';
import router from '../router';

setup(() => {
  const ProductListingContainer = () => import(`./ProductListingContainer.vue`);
  mount(ProductListingContainer, { router });
});

export default run(({ url = `ProductListingContainer` }) => {
  describe(`Product listing`, () => {
    const container = () => cy.get(`[data-qa="product listing"]`);
    const grid = () => container().find(`[data-qa="product grid"]`);

    it(`should filter products by category when a filter is clicked.`, () => {
      cy.visit(url);

      container()
        .find(`[data-qa="filter link"]`)
        .eq(2)
        .click();
      grid().contains(`Plant`);

      container()
        .find(`[data-qa="filter link"]`)
        .eq(1)
        .click();
      grid().contains(`Nice Watch`);
      grid().contains(`Headphones`);
      grid().contains(`Camera`);
    });

    it(`should open the next page when the next page link is clicked.`, () => {
      cy.visit(url);

      container()
        .find(`a[data-qa="next page link"]`)
        .click();
      grid().contains(`Shoes`);
      grid().contains(`Camera`);
      grid().contains(`Plant`);
    });
  });
});
