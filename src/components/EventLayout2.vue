<template>
  <a class="event" :href="link" target="_blank" rel="noopener">
    <g-image class="event__image" :src="backgroundImageUrl" :alt="backgroundImageAltText"></g-image>
    <div v-if="title1" class="event__titles">
      <p class="event__title1">{{ title1 }}</p>
      <p class="event__title2">{{ title2 }}</p>
    </div>
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
  justify-content: flex-end;

  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__titles {
    background-color: rgba(0, 0, 0, 0.5);
    align-self: stretch;
    padding: $space-s;
  }

  &__title1 {
    font-family: Montserrat, Arial, sans-serif;
    font-weight: 300;
    font-size: $font-size-xxl;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 8px;
    color: $font-color-white;
  }

  &__title2 {
    font-family: 'Sensations and Qualities', Arial, sans-serif;
    font-size: 48px;
    text-align: center;
    color: $font-color-white;
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
