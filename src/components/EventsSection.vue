<template>
  <section class="events-section">
    <g-image
      class="events-section__image"
      src="@/assets/images/events.jpg"
      alt="Mirka in der Nacht mit leuchtender Lichterkette."
    ></g-image>
    <h2 class="events-heading u-heading u-heading--white">Events</h2>

    <ul class="events-list">
      <li
        class="events-list__item u-margin-bottom-xl"
        v-for="edge in $static.prismic.events.edges"
        :key="edge.node._meta.uid"
      >
        <p class="events-list__item-title u-font-l u-margin-bottom-xs">
          {{ getTitle(edge.node) }}
        </p>
        <p class="u-font-s u-font-s--paragraph">{{ edge.node.text[0].text }}</p>
        <g-link class="events-list__button" :to="`events#${edge.node._meta.uid}`">Mehr</g-link>
      </li>
    </ul>

    <div class="events-booking">
      <a class="events-booking__button" :href="coursePlanUrl" target="_blank" rel="noopener"> Kursplan </a>
    </div>
  </section>
</template>

<static-query>
query Events {
  prismic {
    events: allEvents(sortBy: date_ASC) {
      edges {
        node {
          _meta {
            uid
          }
          title1
          title2
          text
        }
      }
    }
  }
}
</static-query>

<script>
import { coursePlanUrl } from '../constants';

export default {
  methods: {
    getTitle(node) {
      return `${node.title1?.[0].text ?? ''} ${node.title2?.[0].text ?? ''}`.trim();
    },
  },
  data: function () {
    return {
      coursePlanUrl,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.events-section {
  position: relative;
  color: $font-color-white;
  display: flex;
  flex-direction: column;

  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: right;
    z-index: -1;
  }
}

.events-heading {
  width: 30%;
  align-self: flex-end;
}

.events-booking {
  width: 30%;
  align-self: flex-end;
  padding: 0 $space-xl $space-xl $space-xl;
  display: flex;
  flex-direction: column;

  &__button {
    display: block;
    align-self: flex-end;
    color: rgb(5, 10, 10);
    background: $font-color-white;
    font-size: $font-size-m;
    text-transform: uppercase;
    padding: $space-s $space-xxl;
    text-align: center;

    &:hover {
      background-color: darken($font-color-white, 10%);
    }
  }
}
.events-list {
  width: 30%;
  align-self: flex-end;
  padding: 0 $space-xl;

  &__item {
    display: flex;
    flex-direction: column;
    font-size: $font-size-s;
  }

  &__item-title {
    font-family: $font-family-header-default;
  }

  &__button {
    display: block;
    align-self: flex-end;
    color: $font-color-white;
    font-size: $font-size-s;
    text-transform: uppercase;
    border: 2px solid $font-color-white;
    padding: $space-xs $space-xxl;

    &:hover {
      color: darken($font-color-white, 10%);
      border-color: darken($font-color-white, 10%);
    }
  }
}

@media (max-width: $max-width-desktop) {
  .events-heading,
  .events-booking,
  .events-list {
    width: 40%;
  }
}

@media (max-width: $max-width-tablet) {
  .events-heading,
  .events-booking,
  .events-list {
    width: 50%;
  }
}

@media (max-width: $max-width-mobile-landscape) {
  .events-heading,
  .events-booking,
  .events-list {
    width: 70%;
  }
}

@media (max-width: $max-width-mobile) {
  .events-heading,
  .events-booking,
  .events-list {
    width: auto;
  }

  .events-booking {
    align-self: stretch;
    &__button {
      text-align: center;
      align-self: stretch;
    }
  }
}
</style>
