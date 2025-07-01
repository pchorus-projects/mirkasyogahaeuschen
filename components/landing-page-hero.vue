<script setup lang="ts"></script>

<template>
  <section class="hero">
    <NuxtImg
      class="hero__image"
      src="images/landing-page-hero.jpg"
      alt="Mirka liegt auf Baum in Sonne am See."
      width="1600"
    />
    <div class="hero__content">
      <MainNavigation />
      <NuxtLink to="/#willkommen">
        <h1 class="hero__welcome">A <strong>warm</strong> welcome to Mirkas <strong>Yogahäuschen</strong></h1>
      </NuxtLink>
      <p class="hero__gap" />
      <NuxtLink to="/#willkommen">
        <NuxtImg
          class="hero__logo"
          src="logos/mirkas-yogahaeuschen.svg"
          alt="Mirkas Yogahäuschen Logo: Haus, in der Mitte ein gezeichnetes Herz, aus Kamin treten Herzchen aus."
          :immediate="true"
        />
      </NuxtLink>

      <p class="hero__saying">
        One cannot reflect in streaming water.<br />
        Only those who know internal peace can give it others.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

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
    padding: variables.$space-m;
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0) 70%,
      rgba(0, 0, 0, 0.7) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    color: variables.$font-color-white;
  }

  &__welcome {
    font-size: variables.$font-size-s;
    margin-top: variables.$space-xs;
    text-transform: uppercase;
    text-align: center;
    color: variables.$font-color-white;
  }

  &__gap {
    flex: 1;
  }

  &__logo {
    width: 180px;
  }

  &__saying {
    font-family: variables.$font-family-header-default;
    font-size: variables.$font-size-xl;
    text-align: center;
    margin-top: variables.$space-xl;
    margin-bottom: variables.$space-xxxl;
  }
}

@media (max-width: variables.$max-width-desktop) {
  .hero {
    &__saying {
      margin-top: variables.$space-m;
      margin-bottom: variables.$space-m;
    }
  }
}

@media (max-width: variables.$max-width-tablet) {
  .hero {
    &__saying {
      font-size: variables.$font-size-l;
      margin-top: variables.$space-s;
      margin-bottom: variables.$space-xxs;
    }
  }
}

@media (max-width: variables.$max-width-mobile-landscape) {
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
      margin-top: variables.$space-m;
      margin-bottom: variables.$space-m;
    }
  }
}

@media (max-width: variables.$max-width-mobile) {
  .hero {
    &__saying {
      margin-top: variables.$space-xs;
      margin-bottom: variables.$space-xs;
    }
  }
}
</style>
