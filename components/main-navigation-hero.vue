<script setup lang="ts"></script>

<template>
  <div class="main-navigation">
    <MainNavigation />
  </div>
  <div class="main-navigation-mobile">
    <MainNavigationMobile />
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.main-navigation {
  display: block;
}

.main-navigation-mobile {
  width: 100%;
  display: none;
}

@media (max-width: variables.$max-width-mobile) {
  .main-navigation {
    display: none;
  }

  .main-navigation-mobile {
    display: block;
  }
}
</style>
