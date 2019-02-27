import {
  findAll,
  mount,
  open,
  run,
  setup,
} from '../../test/utils';

setup(() => {
  const ProductTeaserContainer = () => import(`./ProductTeaserContainer.vue`);
  mount(ProductTeaserContainer);
});

export default run(({ url = `/ProductTeaserContainer` }) => {
  describe(`Product teaser`, () => {
    const component = `[data-qa="product teaser"]`;
    const findAllInComponent = selector => findAll(`${component} ${selector}`);

    test(`It should render three products.`, async () => {
      await open(url);

      const products = await findAllInComponent(`[data-qa="product"]`);

      expect(products.length).toBe(3);
    });
  });
});
