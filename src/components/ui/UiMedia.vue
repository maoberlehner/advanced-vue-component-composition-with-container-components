<script>
import classnames from 'classnames';

export const UiMedia = {
  props: {
    gap: {
      default: `m`,
      type: String,
    },
    tag: {
      default: `div`,
      type: String,
    },
  },
  render() {
    const Tag = this.tag;
    return (
      <Tag class={classnames(
        `UiMedia`,
        `UiMedia--gap-${this.gap}`,
      )}>
        {this.$slots.default}
      </Tag>
    );
  },
};

export const UiMediaFigure = {
  props: {
    align: {
      default: `start`,
      type: String,
    },
    tag: {
      default: `div`,
      type: String,
    },
  },
  render() {
    const Tag = this.tag;
    return (
      <Tag
        class={classnames(
          `UiMedia__figure`,
          `UiMedia__figure--align-${this.align}`,
        )}
      >
        {this.$slots.default}
      </Tag>
    );
  },
};

export const UiMediaBody = {
  props: {
    align: {
      default: `start`,
      type: String,
    },
    tag: {
      default: `div`,
      type: String,
    },
  },
  render() {
    const Tag = this.tag;
    return (
      <Tag
        class={classnames(
          `UiMedia__body`,
          `UiMedia__body--align-${this.align}`,
        )}
      >
        {this.$slots.default}
      </Tag>
    );
  },
};

export default UiMedia;
</script>

<style lang="scss">
$gap-m: 1em;
$gap-l: 2em;

.UiMedia {
  display: flex;
}

.UiMedia__figure {
  flex-shrink: 0;

  &--align-center {
    align-self: center;
  }

  &--align-end {
    align-self: flex-end;
  }

  &:first-child {
    .UiMedia--gap-m > & {
      margin-right: $gap-m;
    }

    .UiMedia--gap-l > & {
      margin-right: $gap-l;
    }
  }

  &:last-child {
    .UiMedia--gap-m > & {
      margin-left: $gap-m;
    }

    .UiMedia--gap-l > & {
      margin-left: $gap-l;
    }
  }
}

.UiMedia__body {
  &--align-center {
    align-self: center;
  }

  &--align-end {
    align-self: flex-end;
  }
}
</style>
