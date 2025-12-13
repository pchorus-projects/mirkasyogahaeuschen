<script setup lang="ts"></script>

<template>
  <section class="content">
    <div class="content__image">
      <NuxtImg src="images/gutscheine-weihnachten.jpg" width="768" />
    </div>
    <div class="content__text">
      <h2 class="u-heading u-heading--no-padding-top">
        Suchst du noch&nbsp;ein wunderschönes Weihnachts&shy;geschenk?
      </h2>
      <p class="u-margin-bottom-xl">Verschenke doch eine wertvolle, nachhaltige Zeit bei uns im Yogahäuschen.</p>
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
  align-items: center;

  &__image {
    flex: 1 1;
    align-self: stretch;

    img {
      height: 100%;
      width: 100%;
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
  }
}
</style>
