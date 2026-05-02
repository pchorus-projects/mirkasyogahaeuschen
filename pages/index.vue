<script setup lang="ts">
import NewsletterSection from '~/components/newsletter-section.vue';
import YogaSommerSection from '~/components/yoga-sommer-section.vue';

useMeta(
  'Welcome',
  'Gemütliches, modernes Yogastudio zwischen Burtscheid und Frankenberger Viertel. Besondere Yogakurse und herzwärmende Yoga-Events, Blessing Way Zeremonien und Einzel-Sessions.',
);
</script>

<template>
  <div>
    <LandingPageHero id="willkommen" />
    <YogaSommerSection id="yoga-sommer" />
    <YogahaeuschenSection id="mirka-und-das-yogahaeuschen" />
    <YogaUndMehrSection id="yoga-und-mehr" />
    <EventsSection id="events" />
    <!--    <GallerySection id="team" />-->
    <div class="illustration">
      <NuxtImg
        class="illustration__image"
        src="images/moon-mirka.svg"
        :immediate="true"
        alt="Zeichnung eines Mandala in Kreisform mit Mirka im Portrait."
      />
    </div>
    <TeilnehmerstimmenSection />
    <NewsletterSection id="newsletter" />
    <GutscheineSection id="gutscheine" />
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.illustration {
  padding: variables.$space-xl;
  text-align: center;
  background-color: variables.$background-color-alternate;

  &__image {
    width: 100%;
    max-width: 500px;
  }
}
</style>
