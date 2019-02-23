<template>
  <FrameApi
    v-slot="{ data: articles, meta, methods: { query: fetchList } }"
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
      <ListingLayout data-qa="article listing">
        <NavFilter
          slot="filter"
          :filters="filters"
        />
        <ArticleGrid
          slot="grid"
          :articles="articles"
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
import { get } from '../services/article';

import ArticleGrid from './ArticleGrid.vue';
import FrameApi from './frames/FrameApi.vue';
import FrameHooks from './frames/FrameHooks.vue';
import NavFilter from './NavFilter.vue';
import NavPagination from './NavPagination.vue';
import ListingLayout from './ListingLayout.vue';

export default {
  name: `ArticleListingContainer`,
  components: {
    ArticleGrid,
    FrameApi,
    FrameHooks,
    ListingLayout,
    NavFilter,
    NavPagination,
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
        id: `tech`,
        name: `Tech`,
      },
      {
        id: `hobby`,
        name: `Hobby`,
      },
      {
        id: `nature`,
        name: `nature`,
      },
    ];
  },
};
</script>
