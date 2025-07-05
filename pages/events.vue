<script setup lang="ts">
import { asText, type ImageField, isFilled, type LinkField } from '@prismicio/client';
import { useEvents } from '~/composables/use-events';

useMeta(
  'Events',
  'Zusammenstellung der nächsten 5 Yoga & Coaching Events von Mirkas Yogahäuschen Aachen Richterich, Raum Laurensberg, Herzogenrath und Weiterleitung zum Buchen.',
);

const { data: events } = useEvents();

function getLinkText(link: LinkField) {
  return isFilled.link(link) ? (link.url ?? '') : '';
}

function getBackgroundImageUrl(backgroundImage: ImageField) {
  return backgroundImage?.url ?? '';
}

function getBackgroundImageAltText(backgroundImage: ImageField) {
  return backgroundImage?.alt ?? '';
}
</script>

<template>
  <div>
    <SimpleHero
      title="Events"
      image-path="images/events-hero.jpg"
      image-alt-text="Ausschnitt einer meditierenden Frau, die mit buntem Puder bemalt ist."
    />
    <div class="illustration">
      <NuxtImg
        class="illustration__image"
        src="images/moon-mirka.svg"
        :immediate="true"
        alt="Zeichnung eines Mandala in Kreisform mit Mirka im Portrait."
      />
    </div>

    <ul>
      <li v-for="event in events" :id="event.uid" :key="event.uid" class="events-list__item u-margin-bottom-xl">
        <EventLayout1
          v-if="event.data.layout === '1'"
          :title1="asText(event.data.title1)"
          :title2="asText(event.data.title2)"
          :background-image-url="getBackgroundImageUrl(event.data.background_image)"
          :background-image-alt-text="getBackgroundImageAltText(event.data.background_image)"
          :link="getLinkText(event.data.link)"
        />
        <EventLayout2
          v-if="event.data.layout === '2'"
          :title1="asText(event.data.title1)"
          :title2="asText(event.data.title2)"
          :background-image-url="getBackgroundImageUrl(event.data.background_image)"
          :background-image-alt-text="getBackgroundImageAltText(event.data.background_image)"
          :link="getLinkText(event.data.link)"
        />
        <EventLayout3
          v-if="event.data.layout === '3'"
          :title1="asText(event.data.title1)"
          :title2="asText(event.data.title2)"
          :background-image-url="getBackgroundImageUrl(event.data.background_image)"
          :background-image-alt-text="getBackgroundImageAltText(event.data.background_image)"
          :link="getLinkText(event.data.link)"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.illustration {
  padding: variables.$space-xl;
  text-align: center;

  &__image {
    width: 100%;
    max-width: 500px;
  }
}

.events-list {
  &__item {
    width: 600px;
    height: 400px;
    aspect-ratio: 6/4;
    margin: 0 auto variables.$space-xl auto;
    overflow-x: hidden;
  }
}

@media (max-width: variables.$max-width-mobile) {
  .events-list {
    &__item {
      width: 100%;
      height: auto;
    }
  }
}
</style>
