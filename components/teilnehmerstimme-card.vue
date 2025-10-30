<script setup lang="ts">
defineProps<{ iconColor: string; text: string; name: string; job: string }>();
</script>

<template>
  <div class="card">
    <NuxtImg
      class="card__icon u-margin-bottom-xl"
      :src="`images/teilnehmerstimmen/icon-${iconColor}.png`"
      alt="Gezeichnetes Yogahäuschen-Herz"
      width="100"
    />
    <div class="card__text" v-html="text" />
    <p class="card__name u-font-l">{{ name }}</p>
    <p class="card__job u-font-xs">{{ job }}</p>
  </div>
</template>

<style lang="scss">
@use '../assets/variables';

.card {
  background-color: variables.$background-color-default;
  padding: variables.$space-l;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__icon {
    width: 100px;
  }

  &__text {
    font-size: variables.$font-size-s;
    flex: 1;
    margin-bottom: variables.$font-size-s * variables.$line-height-default;
    p {
      margin-bottom: variables.$font-size-s * variables.$line-height-default;
    }
  }

  &__name {
    font-family: variables.$font-family-header-default;
  }

  &__job {
    text-transform: uppercase;
  }
}
</style>
