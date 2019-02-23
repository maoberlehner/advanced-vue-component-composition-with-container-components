<template>
  <FrameApi
    v-slot="{ data: products }"
    :endpoint="endpoint"
    immediate
  >
    <ProductGrid
      :products="products"
      data-qa="product teaser"
    />
  </FrameApi>
</template>

<script>
import { get } from '../services/product';

import FrameApi from './frames/FrameApi.vue';
import ProductGrid from './ProductGrid.vue';

export default {
  name: `ProductTeaserContainer`,
  components: {
    FrameApi,
    ProductGrid,
  },
  created() {
    this.endpoint = options => get({
      ...options,
      limit: 3,
    });
  },
};
</script>
