<template>
  <section class="container">
    <h2 class="u-heading">Teilnehmerstimmen</h2>

    <ul class="cards">
      <li v-for="card in cards" :key="card.name">
        <TeilnehmerstimmeCard
          :icon-color="card.iconColor"
          :text="card.text"
          :name="card.name"
          :job="card.job"
        ></TeilnehmerstimmeCard>
      </li>
    </ul>
  </section>
</template>

<script>
import TeilnehmerstimmeCard from './TeilnehmerstimmeCard';
export default {
  components: { TeilnehmerstimmeCard },
  data: function () {
    return {
      cards: [
        {
          iconColor: 'red',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren',
          name: 'Angela',
          job: 'Job One',
        },
        {
          iconColor: 'purple',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren',
          name: 'Sophia',
          job: 'Job Two',
        },
        {
          iconColor: 'blue',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren',
          name: 'Eva',
          job: 'Job Three',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.container {
  background-color: $background-color-alternate;
}

.cards {
  display: flex;
  gap: $space-l;
  max-width: 900px;
  margin: auto;
  padding: 0 $space-xl $space-xl $space-xl;

  &__item {
    margin: 0;
  }
}

@media (max-width: $max-width-mobile-landscape) {
  .cards {
    flex-direction: column;
  }
}
</style>
