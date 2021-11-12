<template>
  <section class="events-section">
    <g-image class="events-section__image" src="@/assets/images/events.jpg" alt="Mirka liegt auf einem Baum"></g-image>
    <h2 class="events-heading u-heading u-heading--white">Events</h2>

    <div class="events-booking">
      <a class="events-booking__button" href="https://calendly.com/mirkas-yogahaeuschen" target="_blank" rel="noopener">
        Glow with Mirkas Workshops
      </a>
    </div>

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
        <g-link class="events-list__button" :to="`events#${edge.node._meta.uid}`">More</g-link>
      </li>
    </ul>
  </section>
</template>

<static-query>
query Events {
  prismic {
    events: allEvents {
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
export default {
  methods: {
    getTitle(node) {
      return `${node.title1?.[0].text ?? ''} ${node.title2?.[0].text ?? ''}`.trim();
    },
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
    font-family: $font-family-header-default;
    font-size: $font-size-l;
    text-align: center;
    padding: $space-xs $space-m;
    border-radius: 30px;
  }
}
.events-list {
  width: 30%;
  align-self: flex-end;
  padding: 0 $space-xl $space-xl $space-xl;

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
