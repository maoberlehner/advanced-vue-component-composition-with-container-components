<template>
  <div :class="$style.wrap">
    <div :class="$style.intro">
      <h1 :class="$style.headline">
        Advanced Vue.js Component Composition With Container Components
      </h1>
      <p>
        Demo application to show how to separate Vue.js components into
        Container components and Presentational Components.
      </p>
    </div>

    <div :class="$style.teaser">
      <h2 :class="$style.headline">
        Products
      </h2>
      <ProductTeaserContainer/>
    </div>

    <div :class="$style.teaser">
      <h2 :class="$style.headline">
        Articles
      </h2>
      <ArticleTeaserContainer/>
    </div>
  </div>
</template>

<script>
import ArticleTeaserContainer from '../components/ArticleTeaserContainer.vue';
import ProductTeaserContainer from '../components/ProductTeaserContainer.vue';

export default {
  name: `PageHome`,
  components: {
    ArticleTeaserContainer,
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

.teaser {
  margin-top: 3em;
}
</style>
