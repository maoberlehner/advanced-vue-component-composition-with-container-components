<template>
  <nav :class="$style.wrap">
    <router-link to="/">
      Home
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
