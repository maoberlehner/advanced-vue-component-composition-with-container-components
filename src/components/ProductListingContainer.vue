<template>
  <FrameApi
    v-slot="{ data: products, meta, methods: { query: fetchList } }"
    :endpoint="endpoint"
  >
    <FrameHooks
      @created="fetchList({
        filter: { category: $route.query.filter },
        page: $route.query.page,
      })"
      @route-query-change="fetchList({
        filter: { category: $event.filter },
        page: $event.page,
      })"
    >
      <ListingLayout data-qa="product listing">
        <NavFilter
          slot="filter"
          :filters="filters"
        />
        <ProductGrid
          slot="grid"
          :products="products"
        />
        <NavPagination
          slot="pagination"
          :route-query="$route.query"
          :page-count="meta ? meta.pageCount : 0"
        />
      </ListingLayout>
    </FrameHooks>
  </FrameApi>
</template>

<script>
import { get } from '../services/product';

import FrameApi from './frames/FrameApi.vue';
import FrameHooks from './frames/FrameHooks.vue';
import NavFilter from './NavFilter.vue';
import NavPagination from './NavPagination.vue';
import ProductGrid from './ProductGrid.vue';
import ListingLayout from './ListingLayout.vue';

export default {
  name: `ProductListingContainer`,
  components: {
    FrameApi,
    FrameHooks,
    ListingLayout,
    NavFilter,
    NavPagination,
    ProductGrid,
  },
  created() {
    this.endpoint = options => get({
      ...options,
      limit: 3,
    });
    this.filters = [
      {
        id: `all`,
        name: `All`,
      },
      {
        id: `electronics`,
        name: `Electronics`,
      },
      {
        id: `plant`,
        name: `Plant`,
      },
      {
        id: `furniture`,
        name: `Furniture`,
      },
    ];
  },
};
</script>
