<script setup lang="ts">
import { coursePlanUrl, navItems } from '~/constants';

withDefaults(defineProps<{ isFooter?: boolean }>(), { isFooter: false });
</script>

<template>
  <nav class="nav" :class="{ 'nav--footer': isFooter }">
    <NuxtLink
      v-for="navItem in navItems"
      :key="navItem.to"
      class="nav__item"
      :class="{ 'nav__item--footer': isFooter }"
      active-class="nav__item--active"
      :to="navItem.to"
      external
    >
      {{ navItem.name }}
    </NuxtLink>
    <a class="u-button u-button--primary-beige u-button--small" :href="coursePlanUrl" target="_blank" rel="noopener"
      >Kursplan</a
    >
  </nav>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: transparent;
  gap: variables.$space-s;
  margin-bottom: 0;

  &--footer {
    background-color: variables.$background-color-default;
  }

  &__item {
    font-size: variables.$font-size-default;
    text-transform: uppercase;
    color: variables.$font-color-white;
    white-space: nowrap;

    &--footer {
      color: variables.$font-color-default;
    }
  }
}
</style>
