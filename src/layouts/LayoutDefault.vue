<template>
  <div :class="$style.wrap">
    <TheNavigation/>
    <main :class="$style.main">
      <slot/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter.vue';
import TheNavigation from '../components/TheNavigation.vue';

export default {
  name: `LayoutDefault`,
  components: {
    TheFooter,
    TheNavigation,
  },
};
</script>

<style lang="scss" module>
.wrap {
  max-width: 52em;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1em;
  padding-left: 1em;
}

.main {
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>

