import { shallowMount } from '@vue/test-utils';

import ArticleGrid from './ArticleGrid.vue';

describe(`ArticleGrid`, () => {
  test(`It should mount.`, () => {
    expect(shallowMount(ArticleGrid).is(`uigrid-stub`)).toBe(true);
  });

  test(`It should render a list of article snippets.`, () => {
    const articles = [
      {
        img: `foo.jpg`,
        name: `Foo`,
        text: `Lorem Ipsum`,
      },
      {
        img: `bar.jpg`,
        name: `Bar`,
        text: `Lorem Ipsum`,
      },
    ];
    const wrapper = shallowMount(ArticleGrid, {
      propsData: {
        articles,
      },
    });

    expect(wrapper.findAll(`articlesnippet-stub`).length).toBe(articles.length);
  });
});
