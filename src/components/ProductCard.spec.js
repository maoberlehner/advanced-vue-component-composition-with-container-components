import { shallowMount } from '@vue/test-utils';

import ProductCard from './ProductCard.vue';

describe(`ProductCard`, () => {
  test(`It should mount.`, () => {
    const wrapper = shallowMount(ProductCard, {
      propsData: {
        img: `foo.jpg`,
        name: `Foo`,
        price: `100`,
      },
    });

    expect(wrapper.is(`uicard-stub`)).toBe(true);
  });
});
