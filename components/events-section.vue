<script setup lang="ts">
import { coursePlanUrl } from '~/constants';
import { useEvents } from '~/composables/use-events';
import { asText } from '@prismicio/client';
import type { EventDocument } from '~/prismicio-types';

const { data: events } = useEvents();

function getTitle(event: EventDocument) {
  return `${asText(event.data.title1)} ${asText(event.data.title2)}`.trim();
}
</script>

<template>
  <section class="events-section">
    <NuxtImg
      class="events-section__image"
      src="images/events.jpg"
      alt="Mirka in der Nacht mit leuchtender Lichterkette."
    />
    <h2 class="events-heading u-heading u-heading--white">Events</h2>

    <ul class="events-list">
      <li v-for="event in events" :key="event.uid" class="events-list__item u-margin-bottom-xl">
        <p class="events-list__item-title u-font-l u-margin-bottom-xs">
          {{ getTitle(event) }}
        </p>
        <p class="u-font-s u-font-s--paragraph">{{ asText(event.data.text) }}</p>
        <NuxtLink class="events-list__button" :to="`events#${event.uid}`" external>Mehr</NuxtLink>
      </li>
    </ul>

    <div class="events-booking">
      <a
        class="events-booking__button u-button u-button--primary-white"
        :href="coursePlanUrl"
        target="_blank"
        rel="noopener"
      >
        Kursplan
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../assets/variables';

.events-section {
  position: relative;
  color: variables.$font-color-white;
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
  padding: 0 variables.$space-xl variables.$space-xl variables.$space-xl;
  display: flex;
  flex-direction: column;

  &__button {
    align-self: flex-end;
  }
}
.events-list {
  width: 30%;
  align-self: flex-end;
  padding: 0 variables.$space-xl;

  &__item {
    display: flex;
    flex-direction: column;
    font-size: variables.$font-size-s;
  }

  &__item-title {
    font-family: variables.$font-family-header-default;
  }

  &__button {
    display: block;
    align-self: flex-end;
    color: variables.$font-color-white;
    font-size: variables.$font-size-s;
    text-transform: uppercase;
    border: 1px solid variables.$font-color-white;
    border-radius: 4px;
    padding: variables.$space-xs variables.$space-xxl;

    &:hover {
      color: color.adjust(variables.$font-color-white, $lightness: -10%);
      border-color: color.adjust(variables.$font-color-white, $lightness: -10%);
    }
  }
}

@media (max-width: variables.$max-width-desktop) {
  .events-heading,
  .events-booking,
  .events-list {
    width: 40%;
  }
}

@media (max-width: variables.$max-width-tablet) {
  .events-heading,
  .events-booking,
  .events-list {
    width: 50%;
  }
}

@media (max-width: variables.$max-width-mobile-landscape) {
  .events-heading,
  .events-booking,
  .events-list {
    width: 70%;
  }
}

@media (max-width: variables.$max-width-mobile) {
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
