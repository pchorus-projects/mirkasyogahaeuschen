<script setup lang="ts">
const cards = [
  {
    iconColor: 'red',
    text: '<p>Mirka ist ein wunderbarer Mensch und dass sie liebt, was sie tut, vermittelt sie mit ihrem ganzen Wesen und transportiert genau das in ihren Yoga-Klassen.</p><p>Ich bin froh, sie gefunden zu haben und freue mich auf weitere gemeinsame Zeit auf dem Yogaweg.</p>',
    name: 'Sarah',
    job: 'Sozialpädagogin, Aachen',
  },
  {
    iconColor: 'purple',
    text: '<p>Mirka, in dir wohnt ein großes Herz und eine traumhafte, entspannende Stimme. Du schaffst in jeder Location die richtige Atmosphäre. Danke für dein einfühlsames Vorgehen und dieses wunderbar gelöste, friedvolle Gefühl, mit dem ich nachhause gehe. </p><p>Neben allem Geben an intensiven Arbeitstagen und als Mutter, Tochter, Partnerin, Freundin, ... tut es gut, mir selber etwas Zeit zu schenken und aufzutanken.</p>',
    name: 'Ria',
    job: 'Aldenhoven-Schleiden',
  },
  {
    iconColor: 'blue',
    text: '<p>Deine Yoga-Retreat-Einheiten waren sehr warm, wertschätzend, tiefgehend, ruhig und dennoch intensiv.</p><p>Danke für die Anregung, in mich zu horchen, zu spüren, bei mir zu bleiben, auf mich und meinen Körper zu vertrauen.</p><p>Dein Yoga ist mehr, als "nur ein paar Körperübungen". Deine warme Stimme hat sehr dazu beigetragen, dass ich ganz aus dem Außen abtauchen konnte.</p>',
    name: 'Verena',
    job: 'Ergotherapeutin, Rennerod',
  },
];
</script>

<template>
  <section class="container">
    <h2 class="u-heading">Teilnehmerstimmen</h2>

    <div class="cards">
      <TeilnehmerstimmeCard
        v-for="card in cards"
        :key="card.name"
        class="cards__item"
        :icon-color="card.iconColor"
        :text="card.text"
        :name="card.name"
        :job="card.job"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.container {
  background-color: variables.$background-color-alternate;
}

.cards {
  display: flex;
  gap: variables.$space-l;
  max-width: 900px;
  margin: auto;
  padding: 0 variables.$space-xl variables.$space-xl variables.$space-xl;

  &__item {
    flex: 1 0 10px;
    margin: 0;
    position: relative;

    > * {
      height: 100%;
    }
  }
}

@media (max-width: variables.$max-width-mobile-landscape) {
  .cards {
    flex-direction: column;
  }
}
</style>
