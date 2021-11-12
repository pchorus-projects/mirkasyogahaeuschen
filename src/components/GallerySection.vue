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
  margin-top: $space-xl;
  margin-bottom: $space-xl;

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
    font-family: $font-family-header-default;
    color: $font-color-white;
    position: absolute;
    transform: rotate(-20deg);
    z-index: 1;

    &--1 {
      text-align: right;
      font-size: $font-size-xl;
      top: -9%;
      left: calc(50% - (2 * #{$link-image-width}) + #{$space-xl});
    }
    &--2 {
      font-size: $font-size-l;
      top: 45%;
      left: calc(50% - (2 * #{$link-image-width}) - 72px);
    }
    &--3 {
      font-size: $font-size-l;
      top: 95%;
      left: calc(50% - (2 * #{$link-image-width}) + #{$space-xxs});
    }
    &--4 {
      font-size: $font-size-l;
      top: -5%;
      left: calc(50% + (1.4 * #{$link-image-width}));
    }
    &--5 {
      font-size: $font-size-l;
      top: 45%;
      left: calc(50% + #{$link-image-width});
    }
    &--6 {
      font-size: $font-size-xl;
      top: 95%;
      left: calc(50% + (1 * #{$link-image-width}));
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
        top: $space-xxl;
        left: auto;
        right: $space-s;
      }

      &--3 {
        display: block;
        top: 0;
        left: $space-l;
        right: auto;
        bottom: auto;
      }

      &--4 {
        display: block;
        top: auto;
        left: auto;
        right: $space-s;
        bottom: $space-xxs;
      }

      &--6 {
        display: block;
        top: auto;
        left: $space-xxs;
        right: auto;
        bottom: $space-xxl;
      }
    }
  }
}
</style>
