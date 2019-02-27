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
  const ArticleListingContainer = () => import(`./ArticleListingContainer.vue`);
  mount(ArticleListingContainer, { router });
});

export default run(({ url = `/ArticleListingContainer` }) => {
  describe(`Article listing`, () => {
    const component = `[data-qa="article listing"]`;
    const findInComponent = selector => find(`${component} ${selector}`);
    const componentContainsText = text => containsText(text, component);

    test(`It should filter articles by category when a filter is clicked.`, async () => {
      await open(url);

      const hobbyFilter = await findInComponent(`:nth-child(3) > [data-qa="filter link"]`);
      await hobbyFilter.click();

      expect(await componentContainsText(`Labore et dolore`)).toBe(true);
      expect(await componentContainsText(`Lorem ipsum`)).toBe(true);

      const textFilter = await findInComponent(`:nth-child(2) > [data-qa="filter link"]`);
      await textFilter.click();

      expect(await componentContainsText(`At vero eos`)).toBe(true);
      expect(await componentContainsText(`Dolor sit amet`)).toBe(true);
      expect(await componentContainsText(`Sit amet dolor`)).toBe(true);
    });

    test(`It should open the next page when the next page link is clicked.`, async () => {
      await open(url);

      const nextPageLInk = await findInComponent(`a[data-qa="next page link"]`);
      await nextPageLInk.click();

      expect(await componentContainsText(`Labore et dolore`)).toBe(true);
      expect(await componentContainsText(`Dolor sit amet`)).toBe(true);
      expect(await componentContainsText(`Sit amet dolor`)).toBe(true);
    });
  });
});
