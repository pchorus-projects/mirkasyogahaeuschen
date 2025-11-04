<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://widget-static.eversports.io/loader.js',
      type: 'module',
      async: true,
      defer: true,
    },
  ],
});

const linkItems = [
  {
    name: 'Yoga & mehr',
    to: 'yoga-und-mehr',
    image: 'yoga-und-mehr.jpg',
    imageAltText: 'Mirka in Fisch-Asana',
  },
  {
    name: 'Rund um die Geburt',
    to: 'rund-um-die-geburt',
    image: 'rund-um-die-geburt.jpg',
    imageAltText: 'Mutter und Baby Kopf an Kopf',
  },
  {
    name: 'Specials/Events',
    to: 'specials',
    image: 'specials.jpg',
    imageAltText: 'Frau im Yogisitz mit bunter Farbe auf der Haut',
  },
  {
    name: 'Herzensfeste & Yoga',
    to: 'herzensfeste',
    image: 'herzensfeste.jpg',
    imageAltText: 'Vier strahlende Freundinnen, die Freude ausstrahlen mit bunten Konfetti um sie herum',
  },
  {
    name: 'Yin Ausbildung',
    to: 'yin-ausbildung',
    image: 'yin-ausbildung.jpg',
    imageAltText: 'Ausbilderin Johanna zeigt Meridiane an Puppe',
  },
  {
    name: 'Coaching & Chakra',
    to: 'coaching-und-chakra',
    image: 'coaching-und-chakra.jpg',
    imageAltText: 'gemalter Mensch bei Nacht vor buntem Mond, der seine Hand auf seinen bunten Herzraum legt',
  },
];
</script>

<template>
  <section class="container">
    <h2 class="u-heading">Yoga & mehr</h2>
    <ul class="link-list">
      <li v-for="(linkItem, index) in linkItems" :key="linkItem.to">
        <NuxtLink class="link" :to="`/yoga-und-mehr#${linkItem.to}`" external>
          <div class="link__image-container">
            <NuxtImg
              :class="`link__image link__image--${index + 1}`"
              class="link__image"
              :src="`images/yoga-und-mehr-thumbnails/${linkItem.image}`"
              :alt="linkItem.imageAltText"
              width="196"
            />
          </div>
          <p class="link__text u-font-s">{{ linkItem.name }}</p>
        </NuxtLink>
      </li>
    </ul>

    <div class="u-max-page-width u-margin-bottom-xl">
      <NuxtLink class="u-button" to="/yoga-und-mehr" external>Mehr erfahren</NuxtLink>
    </div>

    <p class="u-heading">Lose your mind, find your soul - hier geht's zu unserem Buchungsportal...</p>

    <div class="u-margin-left-m u-margin-right-m" data-eversports-widget-id="4b30ad4f-57c9-412c-b5bc-9e83e37b5432" />
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables';

$link-image-width: 168px;
$link-image-height: 120px;

.container {
  background-color: variables.$background-color-alternate;
  display: flex;
  flex-direction: column;
}

.link-list {
  display: grid;
  grid-template-columns: $link-image-width $link-image-width $link-image-width $link-image-width $link-image-width $link-image-width;
  justify-content: center;
  row-gap: variables.$space-l;
  padding-bottom: variables.$space-l;
}

.link {
  &__image-container {
    width: $link-image-width;
    height: $link-image-height;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.4s;

    &--1 {
      object-position: bottom;
    }
  }

  &__text {
    padding-top: variables.$space-xs;
    text-align: center;
    text-transform: uppercase;
  }

  &:hover {
    .link__image {
      transform: scale(1.1);
    }

    .link__text {
      color: color.adjust(variables.$font-color-default, $lightness: -20%);
    }
  }
}

@media (max-width: variables.$max-width-desktop) {
  .link-list {
    grid-template-columns: $link-image-width $link-image-width $link-image-width;
  }
}

@media (max-width: variables.$max-width-mobile) {
  .link-list {
    grid-template-columns: 1fr 1fr;
  }

  .link {
    &__image-container {
      width: 50vw;
      height: 32vw;
    }
  }
}
</style>
