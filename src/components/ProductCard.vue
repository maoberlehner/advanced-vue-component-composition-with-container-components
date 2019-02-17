<template>
  <UiCard>
    <img
      :src="img"
      alt=""
      :class="$style.img"
    >
    <UiCardBody>
      <h3 :class="$style.name">
        {{ name }}
      </h3>
      <div :class="$style.price">
        € {{ price }}
      </div>
    </UiCardBody>
  </UiCard>
</template>

<script>
import {
  UiCard,
  UiCardBody,
} from './ui/UiCard.vue';

export default {
  name: `ProductCard`,
  components: {
    UiCard,
    UiCardBody,
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
    price: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" module>
.img {
  width: 100%;
}

.name {
  font-size: 1.5em;
}

.price {
  margin-top: 0.5em;
  font-size: 1.25em;
}
</style>
