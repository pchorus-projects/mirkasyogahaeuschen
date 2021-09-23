<template>
  <Layout>
    <LandingPageHero id="willkommen"></LandingPageHero>
    <YogahaeuschenSection id="mirka-und-das-yogahaeuschen"></YogahaeuschenSection>
  </Layout>
</template>

<script>
import LandingPageHero from '../components/LandingPageHero';
import YogahaeuschenSection from '../components/YogahaeuschenSection';

export default {
  components: { LandingPageHero, YogahaeuschenSection },
  metaInfo: {
    title: 'Mirkas Yogahäuschen',
  },
};
</script>
