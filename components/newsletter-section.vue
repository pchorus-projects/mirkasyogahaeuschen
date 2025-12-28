<script setup lang="ts"></script>

<template>
  <section class="content">
    <div class="content__image">
      <NuxtImg src="images/newsletter.jpg" width="768" />
    </div>
    <div class="content__text">
      <h2 class="u-heading u-heading--no-padding-top">Join us with love.</h2>
      <p class="u-margin-bottom-xl">
        Bleib mit uns verbunden, erhalte Neuigkeiten, Inspiration und exklusive Einblicke aus dem Yogahäuschen direkt in
        dein Mail-Postfach.
      </p>
      <a class="u-button" href="https://patient-apple-38673.myflodesk.com/z1wjotvl2t">Zur Newsletter-Anmeldung</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.content {
  display: flex;
  align-items: center;

  &__image {
    flex: 1 1;
    align-self: stretch;

    img {
      height: 100%;
      width: 50vw;
      object-fit: cover;
    }
  }

  &__text {
    flex: 1 1;
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
