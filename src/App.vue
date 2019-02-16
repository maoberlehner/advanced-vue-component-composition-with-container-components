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
