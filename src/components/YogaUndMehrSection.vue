<template>
  <section class="container">
    <h2 class="u-heading">Yoga & mehr</h2>
    <ul class="link-list">
      <li v-for="(linkItem, index) in linkItems" :key="linkItem.to">
        <g-link class="link" :to="`/yoga-und-mehr#${linkItem.to}`">
          <g-image
            :class="`link__image link__image--${index + 1}`"
            class="link__image"
            :src="require(`!!assets-loader?width=392!@assets/images/yoga-und-mehr-thumbnails/${linkItem.image}`)"
          />
          <p class="link__text u-font-s">{{ linkItem.name }}</p>
        </g-link>
      </li>
    </ul>

    <a class="booking" href="https://calendly.com/mirkas-yogahaeuschen" target="_blank" rel="noopener">
      Lose&nbsp;your&nbsp;mind, find&nbsp;your&nbsp;soul
    </a>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      linkItems: [
        {
          name: 'Ausbildung',
          to: 'ausbildung',
          image: 'ausbildung.jpg',
        },
        {
          name: 'Yoga Coaching',
          to: 'yoga-coaching',
          image: 'yoga-coaching.jpg',
        },
        {
          name: '(Yin) Yoga',
          to: 'yoga',
          image: 'yin-yoga.jpg',
        },
        {
          name: 'Online Yoga',
          to: 'online-yoga',
          image: 'online-yoga.jpg',
        },
        {
          name: 'Kinder- und Familien-Yoga',
          to: 'familien-yoga',
          image: 'familien-yoga.jpg',
        },
        {
          name: 'Ätherische Öle',
          to: 'aetherische-oele',
          image: 'aetherische-oele.jpg',
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
  margin-bottom: $space-xl;
}

.link {
  &__image {
    width: $link-image-width;
    height: $link-image-width;
    object-fit: cover;
    object-position: top;

    &--1 {
      object-position: bottom;
    }
  }

  &__text {
    padding-top: $space-xs;
    text-align: center;
    text-transform: uppercase;
  }
}

.booking {
  display: inline-block;
  align-self: center;
  font-family: $font-family-header-default;
  font-size: $font-size-l;
  text-align: center;
  padding: $space-xs $space-m;
  margin: 0 $space-xl $space-xl $space-xl;
  border-radius: 30px;
  border: 1px solid $font-color-default;

  &:hover {
    color: darken($font-color-default, 20%);
    border-color: darken($font-color-default, 20%);
  }
}

@media (max-width: $max-width-desktop) {
  .link-list {
    grid-template-columns: $link-image-width $link-image-width $link-image-width;
  }
}

@media (max-width: $max-width-tablet) {
  .link-list {
    grid-template-columns: $link-image-width $link-image-width;
  }
}

@media (max-width: $max-width-mobile) {
  .link-list {
    grid-template-columns: $link-image-width;
  }
}
</style>
