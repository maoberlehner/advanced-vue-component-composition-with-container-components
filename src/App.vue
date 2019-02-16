<template>
  <LayoutDefault>
    <RouterView/>
  </LayoutDefault>
</template>

<script>
import LayoutDefault from './layouts/LayoutDefault.vue';

export default {
  name: `App`,
  components: {
    LayoutDefault,
  },
};
</script>

<style lang="scss">
@import '~reset-css/sass/reset';

html {
  text-size-adjust: 100%;
}

body {
  line-height: 1.3;
  color: #222;
  font-family: sans-serif;
}
</style>
