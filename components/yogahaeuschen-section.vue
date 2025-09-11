<script setup lang="ts"></script>

<template>
  <section>
    <h2 class="u-heading">Mirka & das Yogahäuschen</h2>
    <div class="illustration">
      <NuxtImg
        class="illustration__image"
        src="images/mirka-by-the-sea.svg"
        :immediate="true"
        alt="Zeichnung von Mirka, die am Strand sitzt und aufs Meer blickt."
      />
    </div>
    <p class="image-subtitle">"When you do things from your soul, you feel a river moving in you."</p>
    <div class="text">
      <p>
        Herzlich Willkommen auf der Seite zum Yogahäuschen. Dein Ort für Ruhe, Tiefe und Selbstliebe. Ein Platz, der
        umarmt ist von Burtscheid und Frankenberg.
      </p>
      <p>
        Wie schön, dass du hier bist. Ich bin Mirka, meinen ersten Atemzug habe ich in Aachen-Burtscheid, nur wenige
        Meter vom Studio entfernt, gemacht. Ich liebe es, hier zu leben und das zu praktizieren, was mich erfüllt und
        glücklich macht. Yoga habe ich schon vor vielen Jahren tief ins Herz geschlossen. Über die Praxis und
        Philosophie bin ich Jahr für Jahr mehr zu mir selbst gereist – mit mehr Bewusstsein, Achtsamkeit, Zufriedenheit
        und Dankbarkeit.
      </p>
      <p>
        Mein Weg wurde dabei immer intensiver, war immer vielfältig und bunt – und zugleich meine Ruhe und Basis. Das
        Schönste ist: dieser Weg endet nie. So wie der Weg unserer Seele. Einer meiner Lehrer schenkte mir dazu ein
        Mantra, das mich sehr berührt und mit Liebe und Frieden füllt:
      </p>
      <p class="image-subtitle">"If we walk forever, we have time for now."</p>
      <p>
        Auf meinem Yogaweg darf ich mich nicht nur selbst besser kennenlernen, sondern auch viele besondere Menschen.
        Außerdem habe ich weitere, wertvolle Begleiter gefunden, wie die Energie ätherischer Öle, die Kraft von Musik
        und Klang, heilsame Coaching-Wege und die Wirkung von Berührung. All das fließt heute in meine Arbeit ein.
      </p>
      <p>
        Mit Mirkas Yogahäuschen möchte ich einen Raum für dich öffnen – für Tiefe, Stille, bewusstes Erleben und echte
        Erfahrung. Einen Ort, an dem du dich erinnern darfst, wie wichtig Achtsamkeit ist. Wo du Raum findest, dich
        selbst wieder zu spüren, zu deiner Essenz zurückzukehren, dich weiterzuentwickeln und in einem Meer voller
        Selbstliebe zu wachsen.
      </p>
      <p>
        Seit ein paar Jahren wirke ich nun gemeinsam mit meinem Team – bezaubernden, kreativen, herzlichen Menschen.
        Gemeinsam möchten wir dich über die Philosophie des Yoga an wichtige Werte erinnern und dich dabei unterstützen,
        dir selber näher zu kommen.
      </p>
      <p>
        Bei uns bist du eingeladen, Yoga zu praktizieren, zu atmen, zu meditieren, zu reflektieren, zu tanzen, zu
        entspannen, zu regenerieren, zu fühlen – und ein Tässchen Tee zu genießen. Ganz egal, wo du gerade auf deinem
        Weg stehst: du bist willkommen. Von Herzen.
      </p>

      <div class="location">
        <div class="location__image">
          <NuxtImg src="images/forsthaus.jpg" alt="Kursraum" width="320" />
        </div>
        <div class="location__image">
          <NuxtImg class="cv__portrait" src="images/mirka-portrait.jpg" alt="Portrait von Mirka" width="320" />
        </div>
      </div>

      <p>Mehr zu mir:</p>
      <ul>
        <li>Seit 2007 auf dem Yogaweg</li>
        <li>Ausbilderin Yin Yoga Lehre</li>
        <li>Yin Yoga Coach</li>
        <li>Yoga- & Yin Yogalehrerin</li>
        <li>Polarity Therapie</li>
        <li>Aroma Yogalehrerin</li>
        <li>Kinder Yogalehrerin</li>
        <li>Prä- und Postnatal Yogalehrerin</li>
        <li>Beckenboden Trainerin</li>
        <li>Yogalehrerin für Mama und Baby</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

.illustration {
  text-align: center;

  &__image {
    width: 100%;
    max-width: 1090px;
  }
}

.image-subtitle {
  text-align: center;
  padding: variables.$space-m variables.$space-xl;
  max-width: 768px;
  margin: auto;
}

.text {
  padding-bottom: variables.$space-xl;
  max-width: 768px;
  margin: auto;

  > p,
  > ul {
    padding: 0 variables.$space-xl variables.$space-m variables.$space-xl;
  }
}

.location {
  display: flex;
  align-items: stretch;
  gap: variables.$space-l;
  margin-bottom: variables.$space-l;
  padding: 0 variables.$space-xl;

  &__image {
    display: block;
    flex: 1;

    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: variables.$max-width-mobile) {
  .location {
    flex-direction: column;
    padding: 0;

    &__image {
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: variables.$space-l;
      }
    }
  }
}
</style>
