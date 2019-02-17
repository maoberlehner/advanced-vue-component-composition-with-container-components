import { shallowMount } from '@vue/test-utils';

import ProductGrid from './ProductGrid.vue';

describe(`ProductGrid`, () => {
  test(`It should mount.`, () => {
    expect(shallowMount(ProductGrid).is(`uigrid-stub`)).toBe(true);
  });

  test(`It should render a list of product cards.`, () => {
    const products = [
      {
        img: `foo.jpg`,
        name: `Foo`,
        price: `100`,
      },
      {
        img: `bar.jpg`,
        name: `Bar`,
        price: `200`,
      },
    ];
    const wrapper = shallowMount(ProductGrid, {
      propsData: {
        products,
      },
    });

    expect(wrapper.findAll(`productcard-stub`).length).toBe(products.length);
  });
});
