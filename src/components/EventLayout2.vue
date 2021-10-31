<template>
  <div class="event">
    <g-image class="event__image" :src="backgroundImageUrl" alt="Mirka liegt auf einem Baum"></g-image>
    <a class="event__link" :href="link" target="_blank" rel="noopener">To the event</a>
    <div class="event__titles">
      <p class="event__title1">{{ title1 }}</p>
      <p class="event__title2">{{ title2 }}</p>
    </div>
  </div>
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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

  &__link {
    color: rgb(5, 10, 10);
    background: $font-color-white;
    font-size: $font-size-m;
    text-transform: uppercase;
    padding: $space-s $space-xxl;
    margin-top: $space-m;
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
