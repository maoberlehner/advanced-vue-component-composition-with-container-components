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

img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  vertical-align: middle;
}
</style>
