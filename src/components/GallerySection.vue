<template>
  <section class="container">
    <h2 class="u-heading u-heading--white">Yoga is always with me</h2>

    <div class="gallery">
      <g-image
        v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
        :key="item"
        :class="`gallery__image gallery__image--${item}`"
        :src="require(`!!assets-loader?width=440!@assets/images/gallery/${item}.jpg`)"
      />

      <p class="gallery__text gallery__text--1">Shine, darling, shine...</p>
      <p class="gallery__text gallery__text--2">Back to your<br /><span class="u-margin-left-xl">heartbeat.</span></p>
      <p class="gallery__text gallery__text--3">Your soul is whispering -<br />listen quietly for your answers...</p>
      <p class="gallery__text gallery__text--4">Find peace, sister.</p>
      <p class="gallery__text gallery__text--5">Inhale love,<br /><span class="u-margin-left-m">exhale love.</span></p>
      <p class="gallery__text gallery__text--6">Follow your bliss.</p>
      <p class="gallery__text gallery__text--7">Yoga is a key.</p>
      <p class="gallery__text gallery__text--8">Your soul is whispering -<br />listen quietly for your answers...</p>
      <p class="gallery__text gallery__text--9">Release, baby!</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

$link-image-width: 220px;
$link-image-height: 144px;

.container {
  background-color: $background-color-dark;
  padding-bottom: $space-xl;
}

.gallery {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, $link-image-width);
  grid-template-rows: $link-image-height 2 * $link-image-height $link-image-height;
  justify-content: center;
  column-gap: $space-xxs;
  row-gap: $space-xxs;

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: 2;
  }

  &__text {
    font-family: $font-family-header-default;
    color: $font-color-white;
    position: absolute;
    transform: rotate(-20deg);
    z-index: 1;

    &--1 {
      top: 0;
      left: calc(50% - (2 * #{$link-image-width}));
    }
    &--2 {
      font-size: $font-size-l;
      top: 25%;
      left: calc(50% - (2 * #{$link-image-width}) - #{$space-xl});
    }
    &--3 {
      top: 50%;
      left: calc(50% - (2 * #{$link-image-width}) - #{$space-xxl});
    }
    &--4 {
      top: 75%;
      left: calc(50% - (2 * #{$link-image-width}) - #{$space-s});
    }
    &--5 {
      font-size: $font-size-l;
      top: -5%;
      left: calc(50% + (1.4 * #{$link-image-width}));
    }
    &--6 {
      top: 20%;
      left: calc(50% + (1.5 * #{$link-image-width}));
    }
    &--7 {
      font-size: $font-size-l;
      top: 40%;
      left: calc(50% + (1.5 * #{$link-image-width}));
    }
    &--8 {
      top: 60%;
      left: calc(50% + (1.5 * #{$link-image-width}));
    }
    &--9 {
      top: 80%;
      left: calc(50% + (1.7 * #{$link-image-width}));
    }
  }
}

@media (max-width: $max-width-tablet) {
  .gallery {
    &__text {
      display: none;
    }
  }
}

@media (max-width: $max-width-mobile) {
  .gallery {
    padding: $space-xxxl 0;
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
        top: $space-xxs;
        left: $space-m;
      }

      &--2 {
        display: block;
        top: $space-xxl;
        left: $space-xxl;
      }

      &--4 {
        display: block;
        top: $space-xxs;
        left: auto;
        right: $space-s;
      }

      &--7 {
        display: block;
        top: auto;
        bottom: $space-s;
        left: auto;
        right: $space-m;
      }

      &--8 {
        display: block;
        top: auto;
        bottom: $space-xl;
        left: $space-m;
      }
    }
  }
}
</style>
