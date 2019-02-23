import { mount, run, setup } from '../../test/utils';

setup(() => {
  const ProductTeaserContainer = () => import(`./ProductTeaserContainer.vue`);
  mount(ProductTeaserContainer);
});

export default run(({ url = `ProductTeaserContainer` }) => {
  describe(`Product teaser`, () => {
    it(`should render three products.`, () => {
      cy.visit(url);
      cy.get(`[data-qa="product teaser"]`)
        .find(`[data-qa="product"]`)
        .should(`have.length`, 3);
    });
  });
});
