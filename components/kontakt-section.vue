<script setup lang="ts">
import { mailtoMirkaHref } from '~/constants';
</script>

<template>
  <section class="kontakt-section">
    <h2 hidden>Kontakt</h2>
    <NuxtImg class="kontakt-section__image" src="images/kontakt.jpg" alt="Mirka meditiert im Wald." />

    <NuxtImg
      class="kontakt-section__logo"
      src="logos/mirkas-yogahaeuschen.svg"
      alt="Mirkas Yogahäuschen Logo: Haus, in der Mitte ein gezeichnetes Herz, aus Kamin treten Herzchen aus."
      :immediate="true"
    />

    <p class="kontakt-section__saying">
      Yoga is like an instrument that you play<br />
      and sink deeper and deeper into your own melody,<br />
      into your deepest being.
    </p>

    <p class="kontakt-section__kontakt">
      <a class="kontakt-section__link" :href="mailtoMirkaHref">mirka@mirkasyogahaeuschen.de</a>
      | Monschauer Straße&nbsp;12,&nbsp;52076&nbsp;Aachen
    </p>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.kontakt-section {
  position: relative;
  color: variables.$font-color-white;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: linear-gradient(
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );

  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    z-index: -1;
  }

  &__logo {
    padding-top: 240px;
    width: 240px;
  }

  &__saying {
    font-family: variables.$font-family-header-default;
    font-size: variables.$font-size-xl;
    text-align: center;
    margin-top: variables.$space-m;
    margin-bottom: variables.$space-xl;
    padding: 0 variables.$space-m;
  }

  &__kontakt {
    font-size: variables.$font-size-m;
    margin-bottom: variables.$space-xl;
    padding: 0 variables.$space-m;
    text-align: center;
    text-transform: uppercase;
  }

  &__link {
    color: variables.$font-color-white;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: variables.$max-width-tablet) {
  .kontakt-section {
    &__saying {
      font-size: variables.$font-size-l;
    }

    &__kontakt {
      font-size: variables.$font-size-s;
    }
  }
}
</style>
