import { RouterLinkStub, shallowMount } from '@vue/test-utils';

import NavFilter from './NavFilter.vue';

describe(`NavFilter`, () => {
  test(`It should mount.`, () => {
    expect(shallowMount(NavFilter).is(`div`)).toBe(true);
  });

  test(`It should render a list of filters as router links.`, () => {
    const filters = [
      {
        id: `foo`,
        name: `Foo`,
      },
      {
        id: `bar`,
        name: `Bar`,
      },
    ];
    const wrapper = shallowMount(NavFilter, {
      propsData: {
        filters,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.findAll(RouterLinkStub).length).toBe(filters.length);
  });

  test(`It should pass the filter id as a query param to the router link.`, () => {
    const filters = [
      {
        id: `foo`,
        name: `Foo`,
      },
    ];
    const wrapper = shallowMount(NavFilter, {
      propsData: {
        filters,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.find(RouterLinkStub).props(`to`)).toEqual({
      query: { filter: `foo` },
    });
  });

  test(`It should pass an empty object to the router link if the filter id is "all".`, () => {
    const filters = [
      {
        id: `all`,
        name: `All`,
      },
    ];
    const wrapper = shallowMount(NavFilter, {
      propsData: {
        filters,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper.find(RouterLinkStub).props(`to`)).toEqual({});
  });
});
