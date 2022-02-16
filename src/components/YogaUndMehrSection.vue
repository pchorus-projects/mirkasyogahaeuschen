<template>
  <section class="container">
    <h2 class="u-heading">Yoga & mehr</h2>
    <ul class="link-list">
      <li v-for="(linkItem, index) in linkItems" :key="linkItem.to">
        <g-link class="link" :to="`/yoga-und-mehr#${linkItem.to}`">
          <div class="link__image-container">
            <g-image
              :class="`link__image link__image--${index + 1}`"
              class="link__image"
              :src="require(`!!assets-loader?width=750!@assets/images/yoga-und-mehr-thumbnails/${linkItem.image}`)"
              :alt="linkItem.imageAltText"
            />
          </div>
          <p class="link__text u-font-s">{{ linkItem.name }}</p>
        </g-link>
      </li>
    </ul>

    <p class="u-heading">Lose your mind, find your soul.</p>

    <a class="booking u-button" :href="coursePlanUrl" target="_blank" rel="noopener">Kursplan</a>
  </section>
</template>

<script>
import { coursePlanUrl } from '../constants';

export default {
  data: function () {
    return {
      coursePlanUrl,
      linkItems: [
        {
          name: 'Ausbildung',
          to: 'ausbildung',
          image: 'ausbildung.jpg',
          imageAltText: 'Mirka unterstützt Schülerin in Yoga-Asana.',
        },
        {
          name: 'Yoga Coaching',
          to: 'yoga-coaching',
          image: 'yoga-coaching.jpg',
          imageAltText: 'Mirka unterstützt Kundin in Entspannungshaltung.',
        },
        {
          name: '(Yin) Yoga',
          to: 'yoga',
          image: 'yin-yoga.jpg',
          imageAltText: 'Mirka liegt in Rückenlage und hält Hände in Gebetshaltung an ihre Stirn.',
        },
        {
          name: 'Online Yoga',
          to: 'online-yoga',
          image: 'online-yoga.jpg',
          imageAltText: 'Notebook steht vor Yogaplatz zuhause.',
        },
        {
          name: 'Kinder- und Familien-Yoga',
          to: 'familien-yoga',
          image: 'familien-yoga.jpg',
          imageAltText: 'Mutter und Tochter schmiegen Stirn an Stirn.',
        },
        {
          name: 'Ätherische Öle',
          to: 'aetherische-oele',
          image: 'aetherische-oele.jpg',
          imageAltText: 'Mirka im Wald, hält Blätter in Händen und riecht daran.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

$link-image-width: 196px;

.container {
  background-color: $background-color-alternate;
  display: flex;
  flex-direction: column;
}

.link-list {
  display: grid;
  grid-template-columns: $link-image-width $link-image-width $link-image-width $link-image-width $link-image-width $link-image-width;
  justify-content: center;
  row-gap: $space-l;
}

.link {
  &__image-container {
    width: $link-image-width;
    height: $link-image-width;
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
    padding-top: $space-xs;
    text-align: center;
    text-transform: uppercase;
  }

  &:hover {
    .link__image {
      transform: scale(1.1);
    }

    .link__text {
      color: darken($font-color-default, 20%);
    }
  }
}

.booking {
  align-self: center;
  margin-bottom: $space-xl;
}

@media (max-width: $max-width-desktop) {
  .link-list {
    grid-template-columns: $link-image-width $link-image-width $link-image-width;
  }
}

@media (max-width: $max-width-mobile) {
  .link-list {
    grid-template-columns: 1fr 1fr;
  }

  .link {
    &__image-container {
      width: 50vw;
      height: 50vw;
    }
  }
}
</style>
