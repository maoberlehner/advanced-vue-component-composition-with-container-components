<script>
import FramePromise from './FramePromise.vue';

export default {
  props: {
    endpoint: {
      required: true,
      type: Function,
    },
    immediate: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      response: undefined,
    };
  },
  created() {
    if (this.immediate) this.query();
  },
  methods: {
    query(...params) {
      this.response = this.endpoint(...params);
    },
  },
  render(h) {
    return h(FramePromise, {
      props: {
        promise: this.response,
      },
      scopedSlots: {
        default: props => this.$scopedSlots.default({
          data: props.value && props.value.data,
          meta: props.value && props.value.meta,
          methods: {
            query: this.query,
          },
          status: {
            error: props.status.error,
            loading: props.status.pending,
            success: props.status.resolved,
          },
        }),
      },
    });
  },
};
</script>
