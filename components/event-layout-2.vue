<script setup lang="ts">
defineProps<{
  title1: string;
  title2?: string;
  link: string;
  backgroundImageUrl: string;
  backgroundImageAltText: string;
}>();
</script>

<template>
  <a class="event" :href="link" target="_blank" rel="noopener">
    <NuxtImg class="event__image" :src="backgroundImageUrl" :alt="backgroundImageAltText" />
    <div v-if="title1" class="event__titles">
      <p class="event__title1">{{ title1 }}</p>
      <p class="event__title2">{{ title2 }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

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
    padding: variables.$space-s;
  }

  &__title1 {
    font-family: Montserrat, Arial, sans-serif;
    font-weight: 300;
    font-size: variables.$font-size-xxl;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 8px;
    color: variables.$font-color-white;
  }

  &__title2 {
    font-family: 'Sensations and Qualities', Arial, sans-serif;
    font-size: 48px;
    text-align: center;
    color: variables.$font-color-white;
  }
}

@media (max-width: variables.$max-width-mobile) {
  .event {
    &__title1 {
      font-size: variables.$font-size-l;
    }

    &__title2 {
      font-size: variables.$font-size-xxl;
    }
  }
}
</style>
