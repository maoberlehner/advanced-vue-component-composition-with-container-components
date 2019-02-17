import { shallowMount } from '@vue/test-utils';

import ArticleSnippet from './ArticleSnippet.vue';

describe(`ArticleSnippet`, () => {
  test(`It should mount.`, () => {
    const wrapper = shallowMount(ArticleSnippet, {
      propsData: {
        img: `foo.jpg`,
        name: `Foo`,
        text: `Lorem Ipsum`,
      },
    });

    expect(wrapper.is(`uimedia-stub`)).toBe(true);
  });
});
