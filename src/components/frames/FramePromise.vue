<script>
export default {
  props: {
    promise: {
      default: null,
      type: Promise,
    },
  },
  data() {
    return {
      error: null,
      pending: false,
      resolved: null,
      value: null,
    };
  },
  watch: {
    promise: {
      immediate: true,
      async handler() {
        if (!this.promise) return;

        try {
          this.status({ pending: true });
          const value = await this.promise;
          this.status({ resolved: true, value });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
          this.status({
            error,
            resolved: false,
            value: null,
          });
        }
      },
    },
  },
  methods: {
    status({
      error = null,
      pending = false,
      resolved = null,
      value = this.value,
    }) {
      this.error = error;
      this.pending = pending;
      this.resolved = resolved;
      this.value = value;
    },
  },
  render() {
    return this.$scopedSlots.default({
      status: {
        error: this.error,
        pending: this.pending,
        resolved: this.resolved,
      },
      value: this.value,
    });
  },
};
</script>
