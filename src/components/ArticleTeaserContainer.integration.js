import {
  findAll,
  mount,
  open,
  run,
  setup,
} from '../../test/utils';

setup(() => {
  const ArticleTeaserContainer = () => import(`./ArticleTeaserContainer.vue`);
  mount(ArticleTeaserContainer);
});

export default run(({ url = `/ArticleTeaserContainer` }) => {
  describe(`Article teaser`, () => {
    const component = `[data-qa="article teaser"]`;
    const findAllInComponent = selector => findAll(`${component} ${selector}`);

    test(`It should render three articles.`, async () => {
      await open(url);

      const articles = await findAllInComponent(`[data-qa="article"]`);

      expect(articles.length).toBe(3);
    });
  });
});
