<script setup lang="ts">
import { coursePlanUrl } from '~/constants';

const navItems = [
  {
    name: 'Mirka & Das Yogahäuschen',
    to: '/#mirka-und-das-yogahaeuschen',
  },
  {
    name: 'Yoga & Mehr',
    to: '/#yoga-und-mehr',
  },
  {
    name: 'Events',
    to: '/#events',
  },
  {
    name: 'Kontakt',
    to: '/#kontakt',
  },
];

withDefaults(defineProps<{ isFooter?: boolean }>(), { isFooter: false });
</script>

<template>
  <nav class="nav" :class="{ 'is-footer': isFooter }">
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
    <a class="u-button u-button--primary-gray-blue u-button--small" :href="coursePlanUrl" target="_blank" rel="noopener"
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

  &--footer {
    background-color: variables.$background-color-default;
  }

  &__item {
    font-size: variables.$font-size-default;
    text-transform: uppercase;
    color: variables.$font-color-white;
    white-space: nowrap;

    &:not(last-child) {
      margin-right: variables.$space-s;
    }

    &--footer {
      color: variables.$font-color-default;
    }
  }
}

@media (max-width: variables.$max-width-mobile) {
  .nav {
    align-self: flex-end;
    margin-bottom: variables.$space-s;

    &__item {
      display: none;
    }

    &.is-footer {
      margin-bottom: 0;

      .nav__item {
        display: block;
        margin-bottom: variables.$space-xs;
      }
    }
  }
}
</style>
