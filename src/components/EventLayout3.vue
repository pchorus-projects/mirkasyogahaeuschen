<template>
  <a class="event" :href="link" target="_blank" rel="noopener">
    <g-image class="event__image" :src="backgroundImageUrl" alt="Mirka liegt auf einem Baum"></g-image>
    <div class="event__titles-container">
      <p class="event__titles">
        <span class="event__title1">{{ title1 }}</span>
        <span class="event__title2">{{ title2 }}</span>
      </p>
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
  align-items: center;

  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__titles-container {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__titles {
    padding: $space-s;
    display: flex;
    flex-direction: column;
  }

  &__title1 {
    font-family: 'Cabin Sketch', Arial, sans-serif;
    font-weight: 300;
    font-size: $font-size-xxl;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 8px;
    color: $font-color-white;
  }

  &__title2 {
    font-family: Windsong, Arial, sans-serif;
    font-size: $font-size-xl;
    text-align: right;
    color: $font-color-white;
  }
}

@media (max-width: $max-width-mobile) {
  .event {
    &__title1 {
      font-size: $font-size-l;
    }

    &__title2 {
      font-size: $font-size-m;
    }
  }
}
</style>
