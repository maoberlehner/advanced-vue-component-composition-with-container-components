<script>
export default {
  watch: {
    $route: {
      handler(current, prev) {
        const currentQueryString = JSON.stringify(current.query);
        const prevQueryString = JSON.stringify(prev.query);
        const queryChanged = currentQueryString !== prevQueryString;

        if (queryChanged) {
          this.$emit(`route-query-change`, current.query);
        }
      },
    },
  },
  created() {
    this.$emit(`created`);
  },
  render() {
    return this.$slots.default[0];
  },
};
</script>
