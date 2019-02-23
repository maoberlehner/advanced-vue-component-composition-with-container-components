<template>
  <div :class="$style.wrap">
    <ul :class="$style.list">
      <li
        v-for="filter in filters"
        :key="filter.id"
        :class="$style.listItem"
      >
        <RouterLink
          :to="filter.id !== `all` ? { query: { filter: filter.id } } : {}"
          data-qa="filter link"
        >
          {{ filter.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: `NavFilter`,
  props: {
    filters: {
      default: () => [],
      type: Array,
    },
  },
};
</script>

<style lang="scss" module>
.wrap {
  padding: 1em;
  background-color: #efefef;
}

.list {
  display: flex;
}

.listItem {
  &:not(:first-child) {
    margin-left: 0.75em;
  }
}
</style>
