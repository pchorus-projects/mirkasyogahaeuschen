<template>
  <nav class="nav" :class="{ 'is-footer': isFooter }">
    <g-link
      v-for="navItem in navItems"
      class="nav__item"
      :class="{ 'nav__item--footer': isFooter }"
      active-class="nav__item--active"
      :to="navItem.to"
      :key="navItem.to"
    >
      {{ navItem.name }}
    </g-link>
    <a class="u-button u-button--primary-white u-button--small" :href="coursePlanUrl" target="_blank" rel="noopener"
      >Kursplan</a
    >
  </nav>
</template>

<script>
import { coursePlanUrl } from '../constants';

export default {
  props: {
    isFooter: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      coursePlanUrl,
      navItems: [
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: transparent;

  &--footer {
    background-color: $background-color-default;
  }

  &__item {
    font-size: $font-size-default;
    text-transform: uppercase;
    color: $font-color-white;
    white-space: nowrap;

    &:not(last-child) {
      margin-right: $space-s;
    }

    &--footer {
      color: $font-color-default;
    }
  }
}

@media (max-width: $max-width-mobile) {
  .nav {
    align-self: flex-end;
    margin-bottom: $space-s;

    &__item {
      display: none;
    }

    &.is-footer {
      margin-bottom: 0;

      .nav__item {
        display: block;
        margin-bottom: $space-xs;
      }
    }
  }
}
</style>
