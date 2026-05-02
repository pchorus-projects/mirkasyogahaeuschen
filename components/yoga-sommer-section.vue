<script setup lang="ts"></script>

<template>
  <section class="content">
    <div class="content__image">
      <NuxtImg src="images/yoga-sommer.png" width="768" />
    </div>
    <div class="content__text">
      <h2 class="u-heading u-heading--no-padding-top">Dein Yoga-Sommer für 99€</h2>
      <p class="u-margin-bottom-xl">
        Komme im Sommer so oft, du möchtest.<br />Sichere dir bis 7.5.26 deine Sommer-Freiheit für nur 99€!
      </p>
      <a
        class="u-button"
        href="https://www.eversports.de/o/mirkas-yogahauschen/520b9e12-7957-4426-9694-584a18c79f3e"
        target="_blank"
        rel="noopener"
        >Mein Yoga-Sommer</a
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.content {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 0;

  &__image {
    align-self: stretch;

    img {
      height: 100%;
      width: 50vw;
      object-fit: cover;
    }
  }

  &__text {
    width: 50vw;
    text-align: center;
    padding: variables.$space-l variables.$space-xl;
  }
}

@media (max-width: variables.$max-width-mobile-landscape) {
  .content {
    flex-direction: column;

    &__image {
      img {
        width: 100%;
      }
    }
  }
}
</style>
