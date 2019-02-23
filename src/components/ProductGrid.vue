<template>
  <UiGrid data-qa="product grid">
    <UiGridItem
      v-for="product in products"
      :key="product.name"
      :width="[`12/12`, `4/12@m`]"
      data-qa="product"
    >
      <ProductCard
        :img="product.img"
        :name="product.name"
        :price="product.price"
      />
    </UiGridItem>
  </UiGrid>
</template>

<script>
import {
  UiGrid,
  UiGridItem,
} from './ui/UiGrid.vue';
import ProductCard from './ProductCard.vue';

export default {
  name: `ProductGrid`,
  components: {
    ProductCard,
    UiGrid,
    UiGridItem,
  },
  props: {
    products: {
      default: () => [],
      type: Array,
    },
  },
};
</script>
