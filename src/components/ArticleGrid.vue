<template>
  <UiGrid data-qa="article grid">
    <UiGridItem
      v-for="article in articles"
      :key="article.name"
      :width="[`12/12`]"
      data-qa="article"
    >
      <ArticleSnippet
        :img="article.img"
        :name="article.name"
        :text="article.text"
      />
    </UiGridItem>
  </UiGrid>
</template>

<script>
import {
  UiGrid,
  UiGridItem,
} from './ui/UiGrid.vue';
import ArticleSnippet from './ArticleSnippet.vue';

export default {
  name: `ArticleGrid`,
  components: {
    ArticleSnippet,
    UiGrid,
    UiGridItem,
  },
  props: {
    articles: {
      default: () => [],
      type: Array,
    },
  },
};
</script>
