<script setup lang="ts"></script>

<template>
  <section class="content">
    <div class="content__image">
      <NuxtImg src="images/gutscheine.jpg" width="768" />
    </div>
    <div class="content__text">
      <h2 class="u-heading u-heading--no-padding-top">Suchst du nach einem wertvollen Geschenk?</h2>
      <p class="u-margin-bottom-xl">
        Ermögliche eine besondere, tragende und nachhaltige Zeit bei uns im Yogahäuschen...
      </p>
      <a class="u-button" href="https://www.eversports.de/widget/w/iZsalE?list=voucher" target="_blank" rel="noopener"
        >Zu den Gutscheinen</a
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

  &__image {
    align-self: stretch;

    img {
      height: 100%;
      width: 50vw;
      object-fit: cover;
    }
  }

  &__text {
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
