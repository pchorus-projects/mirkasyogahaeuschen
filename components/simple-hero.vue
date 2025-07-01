<script setup lang="ts">
withDefaults(defineProps<{ title: string; imagePath: string; imageAltText: string; dark?: boolean }>(), {
  dark: false,
});
</script>

<template>
  <section class="hero">
    <NuxtImg class="hero__image" :src="imagePath" :alt="imageAltText" width="1600" />
    <div class="hero__content" :class="{ 'hero__content--dark': dark }">
      <MainNavigation />
      <NuxtLink to="/#willkommen">
        <p class="hero__welcome u-margin-bottom-m">
          A <strong>warm</strong> welcome to Mirkas <strong>Yogahäuschen</strong>
        </p>
      </NuxtLink>
      <NuxtLink to="/#willkommen">
        <NuxtImg
          class="hero__logo"
          src="logos/mirkas-yogahaeuschen.svg"
          alt="Mirkas Yogahäuschen Logo: Haus, in der Mitte ein gezeichnetes Herz, aus Kamin treten Herzchen aus."
          :immediate="true"
        />
      </NuxtLink>
      <p class="hero__gap" />
      <h1 class="hero__heading u-heading u-heading--white">{{ title }}</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

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

    &--dark {
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0) 70%,
        rgba(0, 0, 0, 0) 70%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
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

  &__heading {
    font-family: variables.$font-family-header-default;
    font-size: variables.$font-size-xxxl;
    text-align: center;
    margin-top: variables.$space-xl;
    margin-bottom: variables.$space-xxl;
  }
}

@media (max-width: variables.$max-width-desktop) {
  .hero {
    &__heading {
      margin-top: variables.$space-m;
      margin-bottom: variables.$space-m;
    }
  }
}

@media (max-width: variables.$max-width-tablet) {
  .hero {
    &__heading {
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
    &__heading {
      margin-top: variables.$space-m;
      margin-bottom: variables.$space-m;
    }
  }
}

@media (max-width: variables.$max-width-mobile) {
  .hero {
    &__heading {
      margin-top: variables.$space-xs;
      margin-bottom: variables.$space-xs;
    }
  }
}
</style>
