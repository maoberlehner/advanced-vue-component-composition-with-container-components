<template>
  <FrameApi
    v-slot="{ data: articles }"
    :endpoint="endpoint"
    immediate
  >
    <ArticleGrid
      :articles="articles"
      data-qa="article teaser"
    />
  </FrameApi>
</template>

<script>
import { get } from '../services/article';

import ArticleGrid from './ArticleGrid.vue';
import FrameApi from './frames/FrameApi.vue';

export default {
  name: `ArticleTeaserContainer`,
  components: {
    ArticleGrid,
    FrameApi,
  },
  created() {
    this.endpoint = options => get({
      ...options,
      limit: 3,
    });
  },
};
</script>
