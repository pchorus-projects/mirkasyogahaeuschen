<script setup lang="ts">
const imageAltTexts = {
  1: 'Mirka umarmt Baum am See.',
  2: 'Yogamatte im Wald.',
  3: 'Mirka und Frau genießen Sonnenschein.',
  4: 'Mirka sitzt am Strand und blickt aufs Meer.',
  5: 'Mirka beim Yoga im Yogahäuschen.',
  6: 'Mirka dreht sich froh in der Aachener Innenstadt an einer Laterne.',
  7: 'Mirka lächelt verträumt.',
  8: 'Mala-Kette auf Blatt im Wald.',
  9: 'Mirka mit bunten Blumen im Wald.',
};
</script>

<template>
  <section class="container">
    <h2 class="u-heading u-heading--white">Yoga is always with me</h2>

    <div class="gallery">
      <NuxtImg
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
        :key="item"
        :class="`gallery__image gallery__image--${item}`"
        :src="`images/gallery/${item}.jpg`"
        :alt="imageAltTexts[item]"
        width="440"
      />

      <p class="gallery__text gallery__text--1">
        <span class="u-margin-right-xl">Follow your</span><br /><span>bliss.</span>
      </p>
      <p class="gallery__text gallery__text--2">Your soul is whispering -<br />listen quietly for your answers...</p>
      <p class="gallery__text gallery__text--3">Find peace,<br /><span class="u-margin-left-m">sister.</span></p>
      <p class="gallery__text gallery__text--4">Inhale love,<br /><span class="u-margin-left-m">exhale love.</span></p>
      <p class="gallery__text gallery__text--5">Your soul is whispering -<br />listen quietly for your answers...</p>
      <p class="gallery__text gallery__text--6">Yoga is a key.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

$link-image-width: 220px;
$link-image-height: 144px;

.container {
  background-color: variables.$background-color-dark;
  padding-bottom: variables.$space-xl;
}

.gallery {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, $link-image-width);
  grid-template-rows: $link-image-height 2 * $link-image-height $link-image-height;
  justify-content: center;
  column-gap: variables.$space-xxs;
  row-gap: variables.$space-xxs;
  margin-top: variables.$space-xl;
  margin-bottom: variables.$space-xl;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: 2;

    &--3 {
      object-position: 0 30%;
    }
  }

  &__text {
    font-family: variables.$font-family-header-default;
    color: variables.$font-color-white;
    position: absolute;
    transform: rotate(-20deg);
    z-index: 1;

    &--1 {
      text-align: right;
      font-size: variables.$font-size-xl;
      top: -9%;
      left: calc(50% - (2 * #{$link-image-width}) + #{variables.$space-xl});
    }
    &--2 {
      font-size: variables.$font-size-l;
      top: 40%;
      left: calc(50% - (2 * #{$link-image-width}) - 72px);
    }
    &--3 {
      font-size: variables.$font-size-xl;
      top: 93%;
      left: calc(50% - (2 * #{$link-image-width}) - #{variables.$space-l});
    }
    &--4 {
      font-size: variables.$font-size-l;
      top: -5%;
      left: calc(50% + (1.4 * #{$link-image-width}));
    }
    &--5 {
      font-size: variables.$font-size-l;
      top: 55%;
      left: calc(50% + #{$link-image-width});
    }
    &--6 {
      font-size: variables.$font-size-xl;
      top: 95%;
      left: calc(50% + (1 * #{$link-image-width}));
    }
  }
}

@media (max-width: variables.$max-width-tablet) {
  .gallery {
    &__text {
      display: none;
    }
  }
}

@media (max-width: variables.$max-width-mobile) {
  .gallery {
    padding: variables.$space-xxxl 0;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, $link-image-height);

    &__image {
      &--9 {
        display: none;
      }
    }

    &__text {
      display: none;

      &--1 {
        display: block;
        top: variables.$space-xxl;
        left: auto;
        right: variables.$space-s;
      }

      &--3 {
        display: block;
        top: 0;
        left: variables.$space-l;
        right: auto;
        bottom: auto;
      }

      &--4 {
        display: block;
        top: auto;
        left: auto;
        right: variables.$space-s;
        bottom: variables.$space-xxs;
      }

      &--6 {
        display: block;
        top: auto;
        left: variables.$space-xxs;
        right: auto;
        bottom: variables.$space-xxl;
      }
    }
  }
}
</style>
