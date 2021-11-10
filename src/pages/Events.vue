<template>
  <Layout>
    <SimpleHero title="Events" image-path="images/events-hero.jpg" image-alt-text="Meditation"></SimpleHero>
    <div class="illustration">
      <g-image class="illustration__image" src="@/assets/images/moon-mirka.svg" :immediate="true"></g-image>
    </div>

    <ul>
      <li
        :id="edge.node._meta.uid"
        class="events-list__item u-margin-bottom-xl"
        v-for="edge in $page.prismic.events.edges"
        :key="edge.node._meta.uid"
      >
        <EventLayout1
          v-if="edge.node.layout === '1'"
          :title1="getTitleText(edge.node.title1)"
          :title2="getTitleText(edge.node.title2)"
          :backgroundImageUrl="getBackgroundImageUrl(edge.node.background_image)"
          :backgroundImageAltText="getBackgroundImageAltText(edge.node.background_image)"
          :link="getLinkText(edge.node.link)"
        ></EventLayout1>
        <EventLayout2
          v-if="edge.node.layout === '2'"
          :title1="getTitleText(edge.node.title1)"
          :title2="getTitleText(edge.node.title2)"
          :backgroundImageUrl="getBackgroundImageUrl(edge.node.background_image)"
          :backgroundImageAltText="getBackgroundImageAltText(edge.node.background_image)"
          :link="getLinkText(edge.node.link)"
        ></EventLayout2>
        <EventLayout3
          v-if="edge.node.layout === '3'"
          :title1="getTitleText(edge.node.title1)"
          :title2="getTitleText(edge.node.title2)"
          :backgroundImageUrl="getBackgroundImageUrl(edge.node.background_image)"
          :backgroundImageAltText="getBackgroundImageAltText(edge.node.background_image)"
          :link="getLinkText(edge.node.link)"
        ></EventLayout3>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
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
          background_image
          link {
            ... on prismic__ExternalLink {
              url
            }
          }
          layout
        }
      }
    }
  }
}
</page-query>

<script>
import EventLayout1 from '../components/EventLayout1';
import EventLayout2 from '../components/EventLayout2';
import EventLayout3 from '../components/EventLayout3';
import SimpleHero from '../components/SimpleHero';

export default {
  components: { SimpleHero, EventLayout1, EventLayout2, EventLayout3 },
  metaInfo: {
    title: 'Events',
  },
  methods: {
    getTitleText(title) {
      return title ? title[0].text : '';
    },
    getLinkText(link) {
      return link ? link.url : '';
    },
    getBackgroundImageUrl(backgroundImage) {
      return backgroundImage?.url;
    },
    getBackgroundImageAltText(backgroundImage) {
      return backgroundImage?.alt;
    },
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

.events-list {
  &__item {
    width: 600px;
    height: 400px;
    margin: 0 auto $space-xl auto;
  }
}

@media (max-width: $max-width-mobile) {
  .events-list {
    &__item {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
