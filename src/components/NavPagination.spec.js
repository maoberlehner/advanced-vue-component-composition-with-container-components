import { RouterLinkStub, shallowMount } from '@vue/test-utils';

import NavPagination from './NavPagination.vue';

describe(`NavPagination`, () => {
  const disabledClass = `is-disabled`;

  test(`It should mount.`, () => {
    expect(shallowMount(NavPagination).is(`div`)).toBe(true);
  });

  describe(`First page link`, () => {
    const firstPageLinkSelector = `[data-qa="first page link"]`;

    test(`It should be disabled on page 1.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          routeQuery: { page: 1 },
        },
      });
      const firstPageLink = wrapper.find(firstPageLinkSelector);

      expect(firstPageLink.is(`span`)).toBe(true);
      expect(firstPageLink.classes().includes(disabledClass)).toBe(true);
    });

    test(`It should link back to page 1 without a page query param.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          routeQuery: {
            foo: `foo`,
            page: 2,
          },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const firstPageLink = wrapper.find(firstPageLinkSelector);

      expect(firstPageLink.is(RouterLinkStub)).toBe(true);
      expect(firstPageLink.props(`to`)).toEqual({ query: { foo: `foo` } });
    });

    test(`It should emit a "turn-to-page" event when it is clicked.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          routeQuery: { page: 2 },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const firstPageLink = wrapper.find(firstPageLinkSelector);
      firstPageLink.trigger(`click`);

      expect(wrapper.emitted()[`turn-to-page`][0][0]).toBe(1);
    });
  });

  describe(`Previous page link`, () => {
    const previousPageLinkSelector = `[data-qa="previous page link"]`;

    test(`It should be disabled on page 1.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          routeQuery: { page: 1 },
        },
      });
      const previousPageLink = wrapper.find(previousPageLinkSelector);

      expect(previousPageLink.is(`span`)).toBe(true);
      expect(previousPageLink.classes().includes(disabledClass)).toBe(true);
    });

    test(`It should link back to page 2.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          routeQuery: {
            foo: `foo`,
            page: 3,
          },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const previousPageLink = wrapper.find(previousPageLinkSelector);

      expect(previousPageLink.is(RouterLinkStub)).toBe(true);
      expect(previousPageLink.props(`to`)).toEqual({ query: { foo: `foo`, page: 2 } });
    });

    test(`It should emit a "turn-to-page" event when it is clicked.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          routeQuery: { page: 3 },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const previousPageLink = wrapper.find(previousPageLinkSelector);
      previousPageLink.trigger(`click`);

      expect(wrapper.emitted()[`turn-to-page`][0][0]).toBe(2);
    });
  });

  describe(`Next page link`, () => {
    const nextPageLinkSelector = `[data-qa="next page link"]`;

    test(`It should be disabled on the last page.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          pageCount: 2,
          routeQuery: { page: 2 },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const nextPageLink = wrapper.find(nextPageLinkSelector);

      expect(nextPageLink.is(`span`)).toBe(true);
      expect(nextPageLink.classes().includes(disabledClass)).toBe(true);
    });

    test(`It should link to the next page.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          pageCount: 2,
          routeQuery: {
            foo: `foo`,
            page: 1,
          },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const nextPageLink = wrapper.find(nextPageLinkSelector);

      expect(nextPageLink.is(RouterLinkStub)).toBe(true);
      expect(nextPageLink.props(`to`)).toEqual({ query: { foo: `foo`, page: 2 } });
    });

    test(`It should emit a "turn-to-page" event when it is clicked.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          pageCount: 2,
          routeQuery: { page: 1 },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const nextPageLink = wrapper.find(nextPageLinkSelector);
      nextPageLink.trigger(`click`);

      expect(wrapper.emitted()[`turn-to-page`][0][0]).toBe(2);
    });
  });

  describe(`Last page link`, () => {
    const lastPageLinkSelector = `[data-qa="last page link"]`;

    test(`It should be disabled on the last page.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          pageCount: 2,
          routeQuery: { page: 2 },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const lastPageLink = wrapper.find(lastPageLinkSelector);

      expect(lastPageLink.is(`span`)).toBe(true);
      expect(lastPageLink.classes().includes(disabledClass)).toBe(true);
    });

    test(`It should link to the last page.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          pageCount: 3,
          routeQuery: {
            foo: `foo`,
            page: 1,
          },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const lastPageLink = wrapper.find(lastPageLinkSelector);

      expect(lastPageLink.is(RouterLinkStub)).toBe(true);
      expect(lastPageLink.props(`to`)).toEqual({ query: { foo: `foo`, page: 3 } });
    });

    test(`It should emit a "turn-to-page" event when it is clicked.`, () => {
      const wrapper = shallowMount(NavPagination, {
        propsData: {
          pageCount: 2,
          routeQuery: { page: 1 },
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      const lastPageLink = wrapper.find(lastPageLinkSelector);
      lastPageLink.trigger(`click`);

      expect(wrapper.emitted()[`turn-to-page`][0][0]).toBe(2);
    });
  });
});
