<template>
  <section>
    <h2 class="u-heading">Mirka & das Yogahäuschen</h2>
    <div class="illustration">
      <g-image class="illustration__image" src="@/assets/images/mirka-by-the-sea.svg" :immediate="true"></g-image>
    </div>
    <p class="image-subtitle">
      "When you do things from your soul, you feel a river moving in you. Listen to your soul, trust your heart, feel,
      believe, ..."
    </p>
    <div class="text">
      <p>
        Herzlich Willkommen auf der Seite zu meinem Yogahäuschen. Ich bin Mirka, Aachenerin und habe Yoga sehr ins Herz
        geschlossen, weil ich über die Praxis Jahr für Jahr mehr und mehr zu mir gereist bin. Mit mehr Bewusstsein,
        Achtsamkeit, Zufriedenheit und Dankbarkeit gehe ich dank Yoga durchs Leben. Das Schöne ist, dass dieser Weg
        niemals endet. Meine Lehrerin hat mir dazu ein passendes Mantra mitgegeben: „Been travelling a day, been
        travelling a year, been travelling a lifetime to find my way home. Home is where my heart is, my heart is my
        home.“
      </p>
      <p>
        Auf meinem Yogaweg habe ich nicht nur mich selbst besser kennengelernt, sondern viele besondere und spannende
        Menschen und weitere wertvolle Unterstützer, wie die Ätherischen Öle, Musik, Coaching-Wege, Berührung.
      </p>
      <p>
        So gerne teile ich mit anderen Menschen über die Energiearbeit meine persönliche und fachliche Erfahrung,
        erinnere ans Achtsam sein, unterstütze dabei, über Yoga mehr Raum zum Fühlen zu öffnen und den Weg in ein Mehr
        an Selbstliebe zu wählen.
      </p>
      <p>
        Im Herbst 2021 hat mich ein persönliches Ereignis in diesem kleinen Reihenhäuschen in Aachen-Richterich stehen
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
        Die Angebote für euch wachsen, ihr seid herzlich Willkommen zum Tee trinken, im Garten sein, Entspannen,
        Meditieren, Yoga praktizieren, Auszeiten genießen.
      </p>
      <p>
        Mehr zu mir:<br /><br />
        Seit 2007 auf dem Yogaweg<br />
        Yin Yogalehrerin und - Coach I verliebt-in-yoga, Andrea Huson, Köln<br />
        Yogalehrerin (300 Std.) I Om Shanti, Ratingen<br />
        Vanessa Stilp & Silja Mahlow (Yoga & Yogatherapie, Coaching)<br />
        Beate Meyer (Anatomie)<br />
        Dr. Maitreya Larios (Philosophie)<br />
        Polarity Therapie I Emmanuelle Collinet<br />
        Aroma Yogalehrerin I Emmanuelle Collinet<br />
        Kinderyogalehrerin I Yoga & Familie, Carolin Richard, Münster<br />
        Teilnahme an diversen Yoga-Workshops zu verschiedenen Themen, wie<br />
        Yin Yoga, Yoga Nidra, Women circles, Tantra, Detox, Arm Balances, Thai Yoga Massage
      </p>
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
}

.text {
  padding: 0 $space-xl $space-xl $space-xl;

  > p {
    padding-bottom: $space-m;
  }
}
</style>
