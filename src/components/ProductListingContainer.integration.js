import {
  containsText,
  find,
  mount,
  open,
  run,
  setup,
} from '../../test/utils';
import router from '../router';

setup(() => {
  const ProductListingContainer = () => import(`./ProductListingContainer.vue`);
  mount(ProductListingContainer, { router });
});

export default run(({ url = `/ProductListingContainer` }) => {
  describe(`Product listing`, () => {
    const component = `[data-qa="product listing"]`;
    const findInComponent = selector => find(`${component} ${selector}`);
    const componentContainsText = text => containsText(text, component);

    test(`It should filter products by category when a filter is clicked.`, async () => {
      await open(url);

      const plantFilter = await findInComponent(`:nth-child(3) > [data-qa="filter link"]`);
      await plantFilter.click();

      expect(await componentContainsText(`Plant`)).toBe(true);

      const electronicsFilter = await findInComponent(`:nth-child(2) > [data-qa="filter link"]`);
      await electronicsFilter.click();

      expect(await componentContainsText(`Nice Watch`)).toBe(true);
      expect(await componentContainsText(`Headphones`)).toBe(true);
      expect(await componentContainsText(`Camera`)).toBe(true);
    });

    test(`It should open the next page when the next page link is clicked.`, async () => {
      await open(url);

      const nextPageLInk = await findInComponent(`a[data-qa="next page link"]`);
      await nextPageLInk.click();

      expect(await componentContainsText(`Shoes`)).toBe(true);
      expect(await componentContainsText(`Camera`)).toBe(true);
      expect(await componentContainsText(`Plant`)).toBe(true);
    });
  });
});
