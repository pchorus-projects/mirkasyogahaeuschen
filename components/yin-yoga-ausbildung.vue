<script setup lang="ts"></script>

<template>
  <section class="content">
    <div class="content__image">
      <NuxtImg src="images/yin-yoga-ausbildung.jpg" width="768" />
    </div>
    <div class="content__text">
      <h2 class="u-heading u-heading--no-padding-top">Yin Yoga Ausbildung Herbst 2026</h2>
      <p class="u-margin-bottom-m">
        Du liebst Yin Yoga und möchtest tiefer in diese wertvolle Praxis eintauchen? Vielleicht spürst du sogar den
        Wunsch, andere Menschen auf ihrem Weg ins Yin zu begleiten?
      </p>
      <p class="u-margin-bottom-xl">
        Dann ist jetzt deine Chance: Für die Ausbildung sind noch wenige Plätze verfügbar – bewirb dich jetzt und werde
        Teil einer besonderen Reise zu mehr Achtsamkeit, Ruhe und innerer Tiefe.
      </p>
      <a class="u-button" href="mailto:mirka@mirkasyogahaeuschen.de?subject=Yin Yoga Ausbildung"
        >Mail an Mirka & Isabell</a
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

@media (max-width: 1200px) {
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
