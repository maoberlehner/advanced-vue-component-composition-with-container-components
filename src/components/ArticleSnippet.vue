<template>
  <UiMedia>
    <UiMediaFigure>
      <img
        :src="img"
        alt=""
      >
    </UiMediaFigure>
    <UiMediaBody>
      <h3 :class="$style.name">
        {{ name }}
      </h3>
      <p :class="$style.text">
        {{ text }}
      </p>
    </UiMediaBody>
  </UiMedia>
</template>

<script>
import {
  UiMedia,
  UiMediaBody,
  UiMediaFigure,
} from './ui/UiMedia.vue';

export default {
  name: `ArticleSnippet`,
  components: {
    UiMedia,
    UiMediaBody,
    UiMediaFigure,
  },
  props: {
    img: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" module>
.name {
  font-size: 1.5em;
}

.text {
  margin-top: 1em;
}
</style>
