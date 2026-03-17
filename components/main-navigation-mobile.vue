<script lang="ts" setup>
import { coursePlanUrl, navItems } from '~/constants';

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>

<template>
  <div class="menu">
    <div class="menu__hamburger" :class="{ 'menu__hamburger--open': isMenuOpen }" @click="toggleMenu">
      <span class="menu__hamburger-line"></span>
      <span class="menu__hamburger-line"></span>
      <span class="menu__hamburger-line"></span>
    </div>
    <a class="u-button u-button--primary-beige u-button--small" :href="coursePlanUrl" target="_blank" rel="noopener">
      Kursplan
    </a>
  </div>

  <nav class="nav" :class="{ 'is-open': isMenuOpen }">
    <NuxtLink
      v-for="navItem in navItems"
      :key="navItem.to"
      class="nav__item"
      :to="navItem.to"
      external
      @click="toggleMenu"
    >
      {{ navItem.name }}
    </NuxtLink>
    <a class="nav__item" :href="coursePlanUrl" target="_blank" rel="noopener"> Kursplan </a>
  </nav>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.menu {
  align-self: stretch;

  display: flex;
  align-items: center;
  margin-bottom: variables.$space-s;
  justify-content: space-between;

  &:has(.menu__hamburger--open) {
    justify-content: flex-end;
  }

  &__hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 2rem;
    height: 1.4rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    position: relative;

    &--open {
      position: fixed;
      left: variables.$space-m;
      top: variables.$space-m;
      height: 2rem;

      .menu__hamburger-line {
        background-color: variables.$font-color-default;
        position: absolute;
        top: 50%;
        margin-top: -0.1rem;

        &:first-child {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          transform: rotate(-45deg);
        }
      }
    }

    &-line {
      width: 2rem;
      height: 0.2rem;
      background: variables.$font-color-white;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
      position: relative;
      transform-origin: center;
    }
  }
}

.nav {
  display: flex;
  position: fixed;
  gap: variables.$space-m;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: variables.$background-color-alternate-light;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: variables.$space-l;
  z-index: 9;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.is-open {
    transform: translateX(0);
  }

  &__item {
    color: variables.$font-color-default;
    text-transform: uppercase;
    font-size: variables.$font-size-m;
  }
}
</style>
