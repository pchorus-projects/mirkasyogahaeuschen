<template>
  <Layout>
    <LandingPageHero id="willkommen"></LandingPageHero>
    <YogahaeuschenSection id="mirka-und-das-yogahaeuschen"></YogahaeuschenSection>
    <YogaUndMehrSection id="yoga-und-mehr"></YogaUndMehrSection>
    <div class="illustration">
      <g-image
        class="illustration__image"
        src="@/assets/images/yoga-mirka.png"
        width="1000"
        :immediate="true"
        alt="Zeichnung von Mirka als Meerjungfrau"
      ></g-image>
    </div>
    <EventsSection id="events"></EventsSection>
    <GallerySection></GallerySection>
    <div class="illustration">
      <g-image
        class="illustration__image"
        src="@/assets/images/moon-mirka.svg"
        :immediate="true"
        alt="Zeichnung eines Mandala in Kreisform mit Mirka im Portrait."
      ></g-image>
    </div>
    <TeilnehmerstimmenSection></TeilnehmerstimmenSection>
  </Layout>
</template>

<script>
import LandingPageHero from '../components/LandingPageHero';
import YogahaeuschenSection from '../components/YogahaeuschenSection';
import YogaUndMehrSection from '../components/YogaUndMehrSection';
import EventsSection from '../components/EventsSection';
import GallerySection from '../components/GallerySection';
import TeilnehmerstimmenSection from '../components/TeilnehmerstimmenSection';

export default {
  components: {
    GallerySection,
    LandingPageHero,
    YogahaeuschenSection,
    YogaUndMehrSection,
    EventsSection,
    TeilnehmerstimmenSection,
  },
  metaInfo: {
    title: 'Mirkas Yogahäuschen',
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.illustration {
  padding: $space-xl;
  text-align: center;

  &__image {
    width: 100%;
    max-width: 500px;
  }
}
</style>
