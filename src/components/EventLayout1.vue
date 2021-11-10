<template>
  <a class="event" :href="link" target="_blank" rel="noopener">
    <g-image class="event__image" :src="backgroundImageUrl" :alt="backgroundImageAltText"></g-image>
    <p v-if="title1" class="event__titles">
      <span class="event__title1">{{ title1 }}</span>
      <span class="event__title2">{{ title2 }}</span>
    </p>
  </a>
</template>

<script>
export default {
  props: {
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    backgroundImageUrl: {
      type: String,
      required: true,
    },
    backgroundImageAltText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.event {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.5) 100%
  );

  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__titles {
    margin-top: $space-m;
    display: flex;
    flex-direction: column;
  }

  &__title1 {
    font-family: Montserrat, Arial, sans-serif;
    font-weight: 300;
    font-size: $font-size-xxl;
    text-transform: uppercase;
    color: $font-color-white;
  }

  &__title2 {
    font-family: 'Sensations and Qualities', Arial, sans-serif;
    font-size: 48px;
    color: $font-color-white;
    text-align: right;
  }
}

@media (max-width: $max-width-mobile) {
  .event {
    &__title1 {
      font-size: $font-size-l;
    }

    &__title2 {
      font-size: $font-size-xxl;
    }
  }
}
</style>
