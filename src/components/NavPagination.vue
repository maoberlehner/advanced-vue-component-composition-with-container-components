<template>
  <div :class="$style.wrap">
    <Component
      :is="currentPage > 1 ? `router-link` : `span`"
      :to="{ query: routeQueryWithoutPage }"
      :class="[
        $style.control,
        { [$style[`is-disabled`]]: currentPage === 1 }
      ]"
      aria-label="turn to page 1"
      data-qa="first page link"
      @click.native="$emit(`turn-to-page`, 1)"
    >
      &Lang;
    </Component>
    <Component
      :is="currentPage > 1 ? `router-link` : `span`"
      :to="{ query: { ...routeQueryWithoutPage, page: previousPage } }"
      :class="[
        $style.control,
        { [$style[`is-disabled`]]: currentPage === 1 }
      ]"
      :aria-label="`turn to page ${previousPage}`"
      data-qa="previous page link"
      @click.native="$emit(`turn-to-page`, previousPage)"
    >
      &lang;
    </Component>
    <div :class="$style.status">
      {{ currentPage }}
      of
      {{ pageCount }}
    </div>
    <Component
      :is="currentPage < pageCount ? `router-link` : `span`"
      :to="{ query: { ...routeQueryWithoutPage, page: nextPage } }"
      :class="[
        $style.control,
        { [$style[`is-disabled`]]: currentPage === pageCount }
      ]"
      :aria-label="`turn to page ${nextPage}`"
      data-qa="next page link"
      @click.native="$emit(`turn-to-page`, nextPage)"
    >
      &rang;
    </Component>
    <Component
      :is="currentPage < pageCount ? `router-link` : `span`"
      :to="{ query: { ...routeQueryWithoutPage, page: pageCount } }"
      :class="[
        $style.control,
        { [$style[`is-disabled`]]: currentPage === pageCount }
      ]"
      :aria-label="`turn to page ${pageCount}`"
      data-qa="last page link"
      @click.native="$emit(`turn-to-page`, pageCount)"
    >
      &Rang;
    </Component>
  </div>
</template>

<script>
export default {
  name: `NavPagination`,
  props: {
    pageCount: {
      default: 1,
      type: Number,
    },
    routeQuery: {
      default: () => ({}),
      type: Object,
    },
  },
  computed: {
    currentPage() {
      const page = this.routeQuery.page || 1;
      return parseInt(page, 10);
    },
    routeQueryWithoutPage() {
      const query = { ...this.routeQuery };
      delete query.page;
      return query;
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      return previousPage > 1 ? previousPage : undefined;
    },
    nextPage() {
      return this.currentPage + 1;
    },
  },
};
</script>

<style lang="scss" module>
.wrap {
  display: flex;
  justify-content: center;
}

.control {
  padding-right: 0.5em;
  padding-left: 0.5em;
  outline: none;
  cursor: pointer;

  &.is-disabled {
    color: #999;
    cursor: not-allowed;
  }
}

.status {
  margin-right: 1em;
  margin-left: 1em;
}
</style>
