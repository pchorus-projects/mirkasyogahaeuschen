<template>
  <section>
    <h2 class="u-heading">Mirka & das Yogahäuschen</h2>
    <div class="illustration">
      <g-image class="illustration__image" src="@/assets/images/mirka-by-the-sea.svg" :immediate="true"></g-image>
    </div>
    <p class="image-subtitle">"When you do things from your soul, you feel a river moving in you."</p>
    <div class="text">
      <p>
        Herzlich Willkommen auf der Seite zu meinem Yogahäuschen. Ich bin Mirka, Aachenerin und habe Yoga sehr ins Herz
        geschlossen, weil ich über die Praxis Jahr für Jahr mehr und mehr zu mir gereist bin. Mit mehr Bewusstsein,
        Achtsamkeit, Zufriedenheit und Dankbarkeit gehe ich dank Yoga durchs Leben. Das Schöne ist, dass dieser Weg
        niemals endet. Meine Lehrerin hat mir dazu ein passendes Mantra mitgegeben:
      </p>
      <p>
        „Been travelling a day,<br />
        been travelling a year,<br />
        been travelling a lifetime to find my way home. Home is where my heart is,<br />
        my heart is my home.“
      </p>
      <p>
        Auf meinem Yogaweg habe ich nicht nur mich selbst besser kennengelernt, sondern viele besondere und spannende
        Menschen und weitere wertvolle Unterstützer, wie die ätherischen Öle, Musik, Coaching-Wege, Berührung.
      </p>
      <p>
        So gerne teile ich mit anderen Menschen über die Energiearbeit meine persönliche und fachliche Erfahrung,
        erinnere ans Achtsam sein, unterstütze dabei, über Yoga mehr Raum zum Fühlen zu öffnen und den Weg in ein Mehr
        an Selbstliebe zu wählen.
      </p>
      <p>
        Im Herbst 2020 hat mich ein persönliches Ereignis in diesem kleinen Reihenhäuschen in Aachen-Richterich stehen
        lassen. Trotz schwieriger Zeiten entschied ich mich dafür, auf Bauch und Herz zu hören und hier Raum für
        Erholung, Entspannung und Begegnung zu schaffen.
      </p>
      <p>
        Das kleine Haus wurde von seinen Eigentümern 9 Monate lang kernsaniert und vielleicht sollte es so sein, dass
        erst einmal Ruhe einkehrt und über den langen Lockdown ein Winter-Savasana an der Reihe sein sollte, damit
        anschließend die Energie stimmt und mein Wunsch, dass ihr hier Ruhe und Frieden findet, aufgeht.
      </p>
      <p>
        Seit diesem Sommer ist die Tür geöffnet und ich freue mich sehr, dass meine Vision anfangen darf, zu leben. Ihr
        sollt euch wie zuhause fühlen. Zeit für euch finden. Das Yogahäuschen soll für euch ein Ort zur Selbsterfahrung,
        Transformation und Regeneration sein.
      </p>
      <p>
        Die Angebote für euch wachsen. Ihr seid herzlich Willkommen zum Yoga praktizieren, Meditieren, Entspannen, Tee
        trinken, im Garten sein.
      </p>
      <p>Mehr zu mir:</p>
      <ul>
        <li>Seit 2007 auf dem Yogaweg</li>
        <li>Yin Yogalehrerin und - Coach I verliebt-in-yoga, Andrea Huson, Köln</li>
        <li>
          Yogalehrerin (300 Std.) I Om Shanti, Ratingen<br />
          Vanessa Stilp & Silja Mahlow (Yoga & Yogatherapie, Coaching)<br />
          Beate Meyer (Anatomie)<br />
          Dr. Maitreya Larios (Philosophie)
        </li>
        <li>Polarity Therapie I Emmanuelle Collinet</li>
        <li>Aroma Yogalehrerin I Emmanuelle Collinet</li>
        <li>Kinderyogalehrerin I Yoga & Familie, Carolin Richard, Münster</li>
        <li>
          Teilnahme an diversen Yoga-Workshops zu Themen, wie<br />
          Yin Yoga, Yoga Nidra, Women circles, Tantra, Detox, Arm Balances, Thai Yoga Massage
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../assets/variables';

.illustration {
  text-align: center;

  &__image {
    width: 100%;
    max-width: 1090px;
  }
}

.image-subtitle {
  text-align: center;
  padding: $space-m $space-xl;
  max-width: 768px;
  margin: auto;
}

.text {
  padding: 0 $space-xl $space-xl $space-xl;
  max-width: 768px;
  margin: auto;

  > p {
    padding-bottom: $space-m;
  }
}
</style>
