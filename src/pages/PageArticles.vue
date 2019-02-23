<template>
  <div :class="$style.wrap">
    <div :class="$style.intro">
      <h1 :class="$style.headline">
        Articles
      </h1>
    </div>

    <div :class="$style.listing">
      <ArticleListingContainer/>
    </div>

    <div :class="$style.teaser">
      <ProductTeaserContainer/>
    </div>
  </div>
</template>

<script>
import ArticleListingContainer from '../components/ArticleListingContainer.vue';
import ProductTeaserContainer from '../components/ProductTeaserContainer.vue';

export default {
  name: `PageProducts`,
  components: {
    ArticleListingContainer,
    ProductTeaserContainer,
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

.listing,
.teaser {
  margin-top: 3em;
}
</style>
