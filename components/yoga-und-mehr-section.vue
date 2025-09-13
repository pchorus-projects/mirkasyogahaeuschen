<script setup lang="ts">
import { coursePlanUrl } from '~/constants';

const linkItems = [
  {
    name: 'Yoga & mehr',
    to: 'yoga-und-mehr',
    image: 'yoga-und-mehr.jpg',
    imageAltText: '',
  },
  {
    name: 'Rund um die Geburt & Blessing Way',
    to: 'geburt-und-blessing-way',
    image: 'rund-um-die-geburt.jpg',
    imageAltText: '',
  },
  {
    name: 'Specials, Workshops, Events & Retreats',
    to: 'specials',
    image: 'specials.jpg',
    imageAltText: '',
  },
  {
    name: 'Herzensfeste & Yoga',
    to: 'herzensfeste',
    image: 'herzensfeste.jpg',
    imageAltText: '',
  },
  {
    name: 'Yin Ausbildung',
    to: 'yin-ausbildung',
    image: 'yin-ausbildung.jpg',
    imageAltText: '',
  },
  {
    name: 'Yoga Coaching',
    to: 'yoga-coaching',
    image: 'yoga-coaching.jpg',
    imageAltText: '',
  },
  {
    name: 'Chakra Clearing',
    to: 'chakra-clearing',
    image: 'chakra-clearing.jpg',
    imageAltText: '',
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

    <p class="u-heading">Lose your mind, find your soul.</p>

    <a class="booking u-button" :href="coursePlanUrl" target="_blank" rel="noopener">Kursplan</a>
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
  grid-template-columns: $link-image-width $link-image-width $link-image-width $link-image-width $link-image-width $link-image-width $link-image-width;
  justify-content: center;
  row-gap: variables.$space-l;
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

.booking {
  align-self: center;
  margin-bottom: variables.$space-xl;
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
