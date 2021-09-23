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
      ></g-image>
    </div>
  </Layout>
</template>

<script>
import LandingPageHero from '../components/LandingPageHero';
import YogahaeuschenSection from '../components/YogahaeuschenSection';
import YogaUndMehrSection from '../components/YogaUndMehrSection';

export default {
  components: { LandingPageHero, YogahaeuschenSection, YogaUndMehrSection },
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
