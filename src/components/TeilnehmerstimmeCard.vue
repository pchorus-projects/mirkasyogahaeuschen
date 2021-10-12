<template>
  <div class="card">
    <g-image
      class="card__icon u-margin-bottom-xl"
      :src="require(`!!assets-loader?width=440!@assets/images/teilnehmerstimmen/icon-${iconColor}.png`)"
    ></g-image>
    <p class="u-font-s u-font-l--paragraph">{{ text }}</p>
    <p class="card__name u-font-l u-font-m--paragraph">{{ name }}</p>
    <p class="card__job u-font-m">{{ job }}</p>
  </div>
</template>

<script>
export default {
  props: {
    iconColor: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.card {
  background-color: $background-color-default;
  padding: $space-l;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__icon {
    width: 100px;
  }

  &__name {
    font-family: $font-family-header-default;
  }

  &__job {
    text-transform: uppercase;
  }
}
</style>
