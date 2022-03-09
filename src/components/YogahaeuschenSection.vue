<template>
  <section>
    <h2 class="u-heading">Mirka & das Yogahäuschen</h2>
    <div class="illustration">
      <g-image
        class="illustration__image"
        src="@/assets/images/mirka-by-the-sea.svg"
        :immediate="true"
        alt="Zeichnung von Mirka, die am Strand sitzt und aufs Meer blickt."
      ></g-image>
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
        been travelling a lifetime to find my way home.<br />
        Home is where my heart is,<br />
        my heart is my home.“
      </p>
      <p>
        Auf meinem Yogaweg habe ich nicht nur mich selbst besser kennengelernt, sondern viele besondere und spannende
        Menschen und weitere wertvolle Unterstützer, wie die ätherischen Öle, Musik, Coaching-Wege, Berührung.
      </p>
      <p>
        So gerne teile ich mit anderen Menschen über die Energiearbeit meine persönliche und fachliche Erfahrung,
        erinnere ans Achtsamsein, unterstütze dabei, über Yoga mehr Raum zum Fühlen zu öffnen und den Weg in ein Mehr an
        Selbstliebe zu wählen.
      </p>
      <p>
        MIRKAS YOGAHÄUSCHEN soll für dich ein Ort der Ruhe und des Wohlfühlens sein. Hier findest du Raum für
        Selbsterfahrung, Transformation und Regeneration.
      </p>
      <p>
        Dieses naturnahe Fleckchen, an das ich dich einlade, bietet dir beste Voraussetzungen dafür. Durch die hohen
        Fenster des exklusiven Wintergartens siehst du direkt in den Wald, bist von alten Bäumen umgeben, kannst beim
        Entspannen dem Wetter zusehen und manchmal huscht auch sogar ein Eichhörnchen, Hase oder Reh vorbei.
      </p>
      <p>
        Von Frühling bis Herbst nutzen wir auch den privaten, großzügigen, geschützten Garten um noch mehr in den Genuss
        des besonderen Umfelds zu kommen. Wir fühlen die Sonne und den Wind auf der Haut, hören dem fröhlichen
        Gezwitscher der Vögel zu und lassen unsere Seelen mit einstimmen…
      </p>
      <p>
        Ich verspreche dir: dieser einzigartige Ort hat zu jeder Jahreszeit seinen Charme. Du bist herzlich Willkommen
        zum Yoga praktizieren, Meditieren, Entspannen, Tee trinken, im Garten sein...
      </p>

      <div class="location">
        <div class="location__image"><g-image src="@/assets/images/forsthaus.jpg" alt="Kursraum"></g-image></div>
        <div class="location__image">
          <g-image class="cv__portrait" src="@/assets/images/mirka-portrait.jpg" alt="Portrait von Mirka"></g-image>
        </div>
      </div>

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
  padding-bottom: $space-xl;
  max-width: 768px;
  margin: auto;

  > p,
  > ul {
    padding: 0 $space-xl $space-m $space-xl;
  }
}

.location {
  display: flex;
  align-items: stretch;
  margin-bottom: $space-l;
  padding: 0 $space-xl;

  &__image {
    display: block;

    &:not(:last-child) {
      margin-right: $space-l;
    }

    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: $max-width-mobile) {
  .location {
    flex-direction: column;
    padding: 0;

    &__image {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: $space-l;
      }
    }
  }
}
</style>
