<script setup lang="ts">
const images = [
  {
    name: 'Mirka',
    description: 'Tiefgründige Seele,<br>Yin-verliebt, Licht-Löwin,<br>Studio-Inhaberin',
    image: {
      filename: 'Mirka.jpg',
      altText: '',
    },
  },
  {
    name: 'Micha',
    description: 'Humorvoll, weltoffen,<br>always caring',
    image: {
      filename: 'Micha.jpg',
      altText: '',
    },
  },
  {
    name: 'Johanna',
    description: 'Holistic, Flow Goddess,<br>Sun & Paws,<br>Yin Yogaausbildung, Flow Into Restorative, Workshops',
    image: {
      filename: 'Johanna.jpg',
      altText: '',
    },
  },
  {
    name: 'Isabell',
    description: 'Strahelnd, liebevoll, kreativ,<br>Yin & Yang, Klang,<br>Special-Queen',
    image: {
      filename: 'Isabell.jpg',
      altText: '',
    },
  },
  {
    name: 'Katrin',
    description: 'Lebensfreude,<br>Sonnenschein,<br>Natur- & Tierfreundin,<br>Vinyasa Yoga',
    image: {
      filename: 'Katrin.jpg',
      altText: '',
    },
  },
  {
    name: 'Sabrina',
    description: 'Fels in der Brandung,<br>ruhige Kraft, Garden Soul,<br>Yin Yoga',
    image: {
      filename: 'Sabrina.jpg',
      altText: '',
    },
  },
  {
    name: 'Kathrin',
    description: 'Klar, ruhig, stark,<br>Postnatal/Mothers Yoga',
    image: {
      filename: 'Kathrin.jpg',
      altText: '',
    },
  },
  {
    name: 'Nikki',
    description: 'Waldherz, Creative Soul, herzensnah,<br>Hatha Yoga, Shake the Dust, Kreativ-Workshops',
    image: {
      filename: 'Nikki.jpg',
      altText: '',
    },
  },
  {
    name: 'Mira',
    description: 'Soulful Fire, Intuitive Dancer, Inspired & Inspiring,<br>Kundalini Yoga, Soul Motion, Coaching',
    image: {
      filename: 'Mira.jpg',
      altText: '',
    },
  },
  {
    name: 'Carlchen',
    description: 'Kleiner Clown, großes Herz, Lebensfreude,<br>begleitet Mirka',
    image: {
      filename: 'Carlchen.jpg',
      altText: '',
    },
  },
  {
    name: 'Milo',
    description: 'Herzens-Eisbär,<br>Yoga Buddy, always kind,<br>begleitet Isabell',
    image: {
      filename: 'Milo.jpg',
      altText: '',
    },
  },
];

const visibleOverlayIndex = ref<number | undefined>(undefined);
</script>

<template>
  <section class="container">
    <h2 class="u-heading">Dein Yogahäuschen-Team</h2>

    <div class="gallery">
      <div
        v-for="(item, index) in images"
        :key="item.name"
        class="gallery__item"
        @touchstart="visibleOverlayIndex = index"
      >
        <NuxtImg
          class="gallery__image"
          :src="`images/gallery/${item.image.filename}`"
          :alt="item.image.altText"
          width="440"
        />
        <div class="gallery__image-overlay"></div>
        <div class="gallery__image-name">{{ item.name }}</div>
        <div
          class="gallery__image-description"
          :class="{ 'gallery__image-description--visible': visibleOverlayIndex === index }"
          v-html="item.description"
        ></div>
      </div>
      <div class="gallery__item gallery__item--empty">Hier<br />könntest<br />Du<br />strahlen</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

$link-image-width: 260px;
$link-image-height: 220px;

.container {
  background-color: variables.$background-color-alternate;
  padding-bottom: variables.$space-xl;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, $link-image-width);
  grid-template-rows: repeat(4, $link-image-height);
  justify-content: center;

  &__item {
    position: relative;

    &:hover .gallery__image-description {
      visibility: visible;
    }

    &--empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: variables.$background-color-alternate-light;
      font-family: variables.$font-family-header-default;
      font-size: 24px;
      text-align: center;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    z-index: 2;
  }

  &__image-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      354deg,
      rgba(107, 78, 67, 0.7) 0%,
      rgba(107, 78, 67, 0) 30%,
      rgba(107, 78, 67, 0) 70%,
      rgba(107, 78, 67, 0) 100%
    );
  }

  &__image-name {
    position: absolute;
    left: variables.$space-s;
    bottom: variables.$space-s;
    right: variables.$space-m;
    color: variables.$font-color-white;
    font-family: variables.$font-family-header-default;
    font-size: variables.$font-size-l;
    text-align: right;
  }

  &__image-description {
    display: flex;
    visibility: hidden;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: radial-gradient(rgba(107, 78, 67, 0.7) 0%, rgba(107, 78, 67, 0) 70%);
    top: variables.$space-s;
    left: variables.$space-s;
    right: variables.$space-s;
    bottom: variables.$space-s;
    color: variables.$font-color-white;
    font-size: variables.$font-size-s;
    text-align: center;

    &--visible {
      visibility: visible;
    }
  }
}

@media (max-width: variables.$max-width-tablet) {
  .gallery {
    grid-template-columns: repeat(2, $link-image-width);
    grid-template-rows: repeat(6, $link-image-height);
  }
}

@media (max-width: variables.$max-width-mobile) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
