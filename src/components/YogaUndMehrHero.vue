<template>
  <section class="hero">
    <g-image class="hero__image" src="@/assets/images/yoga-und-mehr-hero.jpg" alt="Meditation"></g-image>
    <div class="hero__content">
      <Navigation></Navigation>
      <p class="hero__welcome u-margin-bottom-xl">
        A <strong>warm</strong> welcome to Mirkas <strong>Yogahäuschen</strong>
      </p>
      <g-image
        class="hero__logo"
        src="@/assets/logos/mirkas-yogahaeuschen.svg"
        alt="Logo Mirkas Yogahäuschen"
        :immediate="true"
      ></g-image>
      <p class="hero__gap"></p>
      <h1 class="hero__heading u-heading u-heading--white">Yoga & mehr</h1>
    </div>
  </section>
</template>

<script>
import Navigation from './Navigation';

export default {
  components: { Navigation },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.hero {
  position: relative;
  margin-bottom: 0;
  padding: 0;
  max-height: 768px;

  &__image {
    display: block; // remove gap at the image's bottom
    width: 100%;
    max-height: 768px;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: $space-m;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.7) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $font-color-white;
  }

  &__welcome {
    font-size: $font-size-s;
    margin-top: $space-xs;
    text-transform: uppercase;
    text-align: center;
  }

  &__gap {
    flex: 1;
  }

  &__logo {
    width: 180px;
  }

  &__heading {
    font-family: $font-family-header-default;
    font-size: $font-size-xxl;
    text-align: center;
    margin-top: $space-xl;
    margin-bottom: $space-xxxl;
  }
}

@media (max-width: $max-width-desktop) {
  .hero {
    &__heading {
      margin-top: $space-m;
      margin-bottom: $space-m;
    }
  }
}

@media (max-width: $max-width-tablet) {
  .hero {
    &__heading {
      margin-top: $space-s;
      margin-bottom: $space-xxs;
    }
  }
}

@media (max-width: $max-width-mobile-landscape) {
  .hero {
    &__image {
      min-height: 600px;
    }
    &__content {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0) 45%,
        rgba(0, 0, 0, 0) 55%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
    &__heading {
      margin-top: $space-m;
      margin-bottom: $space-m;
    }
  }
}

@media (max-width: $max-width-mobile) {
  .hero {
    &__heading {
      margin-top: $space-xs;
      margin-bottom: $space-xs;
    }
  }
}
</style>
