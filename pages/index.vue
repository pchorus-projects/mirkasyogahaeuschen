<script setup lang="ts">
useMeta(
  'Welcome',
  'kleines, ländliches, gut erreichbares Yogastudio in Aachen. Persönliches Yogatraining, Coaching sowie regelmäßige Termine in Klein-Gruppen',
);
</script>

<template>
  <div>
    <LandingPageHero id="willkommen" />
    <YogahaeuschenSection id="mirka-und-das-yogahaeuschen" />
    <YogaUndMehrSection id="yoga-und-mehr" />
    <div class="illustration">
      <NuxtImg
        class="illustration__image"
        src="images/yoga-mirka.png"
        width="1000"
        :immediate="true"
        alt="Zeichnung von Mirka als Meerjungfrau"
      />
    </div>

    <EventsSection id="events" />
    <GallerySection />
    <div class="illustration">
      <NuxtImg
        class="illustration__image"
        src="images/moon-mirka.svg"
        :immediate="true"
        alt="Zeichnung eines Mandala in Kreisform mit Mirka im Portrait."
      />
    </div>
    <TeilnehmerstimmenSection />
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
</style>
