<script setup lang="ts"></script>

<template>
  <section class="section u-background-alternate">
    <h2 class="u-heading u-heading--no-padding-top">Mirka & das Yogahäuschen</h2>
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
        Herzlich Willkommen auf der Seite zum Yogahäuschen. Dein Wohlfühlort für Ruhe, Tiefe und Selbstliebe. Wie schön,
        dass du hier bist.
      </p>
      <p>
        Mit Mirkas Yogahäuschen steht für dich ein Praxisraum für Tiefe, Stille, bewusstes Erleben und echte Erfahrung
        offen. Ein Platz, an dem du dich erinnern darfst, wie wichtig DU bist und wie Achtsamkeit dir dabei hilft,
        langsamer zu werden und bewusst wahrzunehmen. In Mirkas Yogahäuschen bist du eingeladen, dich zu fühlen, zu
        deiner Essenz zurückzukehren, dich weiterzuentwickeln und in einem Meer voller Selbstliebe zu wachsen.
      </p>
      <p>
        Ich bin Mirka, Löwin, dem Herzen folgend und liebe es, zugewandt tief nach innen zu tauchen, zu erforschen und
        zu erleben. Für uns gemeinsam wünsche ich mir diesen lichtvollen Ort. An dem wir gemeinsam 'sein' können. All
        das, das ich selber als faszinierend, heilsam, stärkend und unterstützend erlebe, teile ich von Herzen gerne
        über meine energetische Arbeit mit dir. Dazu zählen neben meiner tiefen Begeisterung für das Yin und die innere
        Arbeit auch ätherische Öle, Berührung und Klang.
      </p>
      <p>
        Seit ein paar Jahren wirke ich nun gemeinsam mit meinem Team – mit bezaubernden, kreativen und herzlichen
        Menschen. Gemeinsam möchten wir dich über die Philosophie des Yoga an wichtige Werte erinnern und dich dabei
        unterstützen, dir selber wieder näher zu kommen. Bei uns findest du einen Ort zum Yogapraktizieren, Atmen,
        Meditieren, Reflektieren, Tanzen, Entspannen, Regenerieren und Fühlen.
      </p>
      <p>Ganz egal, wo du gerade auf deinem Weg stehst: du bist willkommen. Von Herzen.</p>

      <div class="location">
        <div class="location__image">
          <NuxtImg
            class="cv__portrait"
            src="images/mirka-portrait.jpg"
            alt="Mirka lächelt über ein schwarz-weiß Porträt"
            width="320"
          />
        </div>
        <div class="location__image">
          <NuxtImg
            src="images/studio-innen.jpg"
            alt="Gezeichnetes Viadukut Aachen mit Sicht auf Dachgeschoss zu Mirkas Yogahäuschen mit Logo"
            width="320"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="qualification-section u-max-page-width">
    <div class="qualification-section__text">
      <p class="u-margin-bottom-xs">Meine Qualifikationen und Lehrtätigkeiten:</p>
      <ul>
        <li>
          Yin-Ausbildung, Yin Yoga Sessions, Yin-Yoga-Coaching<br />(Ausbildung Yin-Yoga und Coaching: Andrea Huson)
        </li>
        <li>Aroma-Yoga®-Lehrerin<br />(Ausbildung: Emmanuelle Collinet)</li>
        <li>
          Polarity-Körperarbeit - energetische Balancearbeit mit Akupressur, Aromaölen und Chakrabalancing<br />(Ausbildung
          Polarity Therapie: Emmanuelle Collinet)
        </li>
        <li>Yogalehrerin<br />(Ausbildung: Vanessa Stilp & Silja Mahlow mit Beate Meyer und Dr. Maitreya Larios)</li>
        <li>Prä-, Postnatal- & Mama-Baby-Yogalehrerin<br />(Ausbildung: Stefanie Weyrauch)</li>
        <li>Beckenbodentrainerin<br />(Ausbildung: AHAB Akademie)</li>
        <li>
          Planung und Begleitung von Zeremonien & Ritualen<br />(Blessing-Way-Circle, Freundinnen- und Familien-Rituale
          u.a.)
        </li>
        <li>Kinder- & Familien-Yoga<br />(Ausbildung Kinder-Yoga: Carolin Richard)</li>
      </ul>
    </div>

    <NuxtImg class="qualification-section__image" src="images/mirka.svg" alt="Portrait von Mirka" width="420" />
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/variables';

li {
  &:not(:last-child) {
    margin-bottom: variables.$space-m;
  }
}

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

.qualification-section {
  padding: variables.$space-xxl 0;
  position: relative;
  max-width: 768px;

  &__image {
    position: absolute;
    bottom: 0;
    right: variables.$space-l;
    opacity: 0.42;
  }

  &__text {
    @extend .text;

    padding-bottom: variables.$space-xxxl;
  }
}

.text {
  max-width: 768px;
  margin: auto;

  > p,
  > ul {
    padding: 0 variables.$space-m variables.$space-m variables.$space-m;
  }
}

.location {
  display: flex;
  align-items: stretch;
  gap: variables.$space-l;
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

@media (max-width: variables.$max-width-tablet) {
  .qualification-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 0;

    ul {
      padding-bottom: 0;
    }

    &__text {
      padding-bottom: 0;
    }
    &__image {
      position: initial;
      opacity: 0.72;
      width: 240px;
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
