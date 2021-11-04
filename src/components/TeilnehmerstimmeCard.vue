<template>
  <div class="card">
    <g-image
      class="card__icon u-margin-bottom-xl"
      :src="require(`!!assets-loader?width=440!@assets/images/teilnehmerstimmen/icon-${iconColor}.png`)"
    ></g-image>
    <div class="card__text" v-html="text"></div>
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

<style lang="scss">
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

  &__text {
    font-size: $font-size-s;
    line-height: $line-height-s;
    flex: 1;

    p {
      margin-bottom: $line-height-l;
    }
  }

  &__name {
    font-family: $font-family-header-default;
  }

  &__job {
    text-transform: uppercase;
  }
}
</style>
