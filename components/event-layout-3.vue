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
    <div class="event__titles-container">
      <p v-if="title1" class="event__titles">
        <span class="event__title1">{{ title1 }}</span>
        <span class="event__title2">{{ title2 }}</span>
      </p>
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
    padding: variables.$space-s;
    display: flex;
    flex-direction: column;
  }

  &__title1 {
    font-family: 'Cabin Sketch', Arial, sans-serif;
    font-weight: 300;
    font-size: variables.$font-size-xxl;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 8px;
    color: variables.$font-color-white;
  }

  &__title2 {
    font-family: Windsong, Arial, sans-serif;
    font-size: variables.$font-size-xl;
    text-align: right;
    color: variables.$font-color-white;
  }
}

@media (max-width: variables.$max-width-mobile) {
  .event {
    &__title1 {
      font-size: variables.$font-size-l;
    }

    &__title2 {
      font-size: variables.$font-size-m;
    }
  }
}
</style>
