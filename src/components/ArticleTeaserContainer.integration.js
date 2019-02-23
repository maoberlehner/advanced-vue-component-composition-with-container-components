import { mount, run, setup } from '../../test/utils';

setup(() => {
  const ArticleTeaserContainer = () => import(`./ArticleTeaserContainer.vue`);
  mount(ArticleTeaserContainer);
});

export default run(({ url = `ArticleTeaserContainer` }) => {
  describe(`Article teaser`, () => {
    it(`should render three articles.`, () => {
      cy.visit(url);
      cy.get(`[data-qa="article teaser"]`)
        .find(`[data-qa="article"]`)
        .should(`have.length`, 3);
    });
  });
});
