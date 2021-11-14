<template>
  <section class="hero">
    <g-image class="hero__image" src="@/assets/images/landing-page-hero.jpg" alt="Mirka liegt auf einem Baum"></g-image>
    <div class="hero__content">
      <Navigation></Navigation>
      <p class="hero__welcome">A <strong>warm</strong> welcome to Mirkas <strong>Yogahäuschen</strong></p>
      <p class="hero__gap"></p>
      <g-image
        class="hero__logo"
        src="@/assets/logos/mirkas-yogahaeuschen.svg"
        alt="Mirka liegt auf einem Baum"
        :immediate="true"
      ></g-image>

      <p class="hero__saying">
        One cannot reflect in streaming water.<br />
        Only those who know internal peace can give it others.
      </p>
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

  &__image {
    display: block; // remove gap at the image's bottom
    width: 100%;
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
      rgba(0, 0, 0, 0) 30%,
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

  &__saying {
    font-family: $font-family-header-default;
    font-size: $font-size-xl;
    text-align: center;
    margin-top: $space-xl;
    margin-bottom: $space-xxxl;
  }
}

@media (max-width: $max-width-desktop) {
  .hero {
    &__saying {
      margin-top: $space-m;
      margin-bottom: $space-m;
    }
  }
}

@media (max-width: $max-width-tablet) {
  .hero {
    &__saying {
      font-size: $font-size-l;
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
    &__saying {
      margin-top: $space-m;
      margin-bottom: $space-m;
    }
  }
}

@media (max-width: $max-width-mobile) {
  .hero {
    &__saying {
      margin-top: $space-xs;
      margin-bottom: $space-xs;
    }
  }
}
</style>
