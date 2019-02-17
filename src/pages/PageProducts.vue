<template>
  <div :class="$style.wrap">
    <div :class="$style.intro">
      <h1 :class="$style.headline">
        Products
      </h1>
    </div>

    <div :class="$style.listing">
      <ProductListingContainer/>
    </div>
  </div>
</template>

<script>
import ProductListingContainer from '../components/ProductListingContainer.vue';

export default {
  name: `PageProducts`,
  components: {
    ProductListingContainer,
  },
};
</script>

<style lang="scss" module>
.intro {
  max-width: 32em;
  margin-right: auto;
  margin-left: auto;
  font-size: 1.25em;
  text-align: center;
}

.headline {
  margin-bottom: 0.5em;
  font-size: 1.75em;
  line-height: 1.2;
}

.listing {
  margin-top: 3em;
}
</style>
