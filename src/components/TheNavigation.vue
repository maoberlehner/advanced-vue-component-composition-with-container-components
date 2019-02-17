<template>
  <nav :class="$style.wrap">
    <router-link :to="{ name: `home` }">
      Home
    </router-link> |
    <router-link :to="{ name: `products` }">
      Products
    </router-link> |
    <router-link :to="{ name: `articles` }">
      Articles
    </router-link>
  </nav>
</template>

<style lang="scss" module>
.wrap {
  padding-top: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #c0c0c0;
}
</style>
