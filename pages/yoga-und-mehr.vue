<script setup lang="ts">
import { coursePlanUrl, mailtoMirkaHref } from '~/constants';

useMeta(
  'Yoga & mehr',
  'Detaillierte Beschreibung der Yoga & Coaching Leistungen von Mirka Carlsen & Team des Mirkas Yogahäuschen in Aachen Richterich, Raum Laurensberg, Herzogenrath.',
);

const ausbildungMailBody = encodeURIComponent(`Liebe Mirka,

ich interessiere mich für die Yin Yogaausbildung und freue mich auf deinen Anruf.
Meine Mobilnummer:

Viele Grüße
`);

const coachingMailBody = encodeURIComponent(`Liebe Mirka,

ich interessiere mich für eine Coaching-Session mit dir und freue mich, wenn du dich meldest.
Meine Mobilnummer:

Viele Grüße
`);

const aetherischeOeleMailBody = encodeURIComponent(`Liebe Mirka,

ich interessiere mich für Ätherische Öle und würde mich gerne von dir beraten lassen. Wann hast du Zeit?
Meine Mobilnummer:

Viele Grüße
`);

const yogaMailBody = encodeURIComponent(`Liebe Mirka,

ich interessiere mich für Privatstunden bei dir im Forsthaus und freue mich, wenn du dich meldest.
Meine Mobilnummer:

Viele Grüße
`);

const yogaUndMehrItems = [
  {
    name: 'Ausbildung',
    to: 'ausbildung',
    image: 'ausbildung.jpg',
    imageAltText: 'Mirka unterstützt Schülerin in Yoga-Asana.',
    buttons: [
      {
        text: 'Anfrage',
        link: `${mailtoMirkaHref}?subject=Yin Yoga Ausbildung&body=${ausbildungMailBody}`,
      },
    ],
    text: `
            <p>
              DIVING DEEP - YIN YOGA TEACHER TRAINING 2022 - 100 STUNDEN I  AACHEN<br />
              Mit Johanna Langner und Mirka Carlsen<br />
            </p>
            <p class="u-text-justify">
              <i>
                „Ich habe eine Yin Yoga Ausbildung für Körper und Geist erwartet, von der ich Übungen für meine eigenen Business-Trainings nutzen kann. Bekommen habe ich zwei so sehr warmherzig, wertschätzend, ganzheitlich denkende und lehrende, professionelle und alles gebende Lehrerinnen, die mich durch ihr Gesamtkonzept überwältigt haben. Ein so umfangreiches und liebevoll gestaltetes Skript, beeindruckende Gastdozentinnen und Ayurvedisches Essen ergänzen diese Ausbildung für mich zu einem vollkommenen Paket. Das Training ist noch nicht abgeschlossen doch schon jetzt fühle ich mich perfekt für erste eigene Yogastunden vorbereitet. Wir haben so viel Wertvolles über unseren Körper und den Geist, der hinter dem Yoga steht, gelernt. Ich bin begeistert! Von Herzen Danke!“<br />
                Jenny aus Aachen, Business Trainer/Coach, begeisterte Teilnehmerin 2022
              </i>
            </p>
            <p>Komm mit auf eine Reise in die Tiefe deines Selbst</p>
            <p>Wenn du Yin Yoga auch für dich entdeckt hast, wenn du tiefer eintauchen, dir selbst intensiv begegnen und die Hintergründe der Traditionellen Chinesischen Medizin, des Buddhismus und der Asanas kennenlernen möchtest, sei dabei.</p>
            <p>Wir haben ein umfangreiches Konzept für dich erarbeitet, das neben Grundlagen und Basiswissen auch alle zusätzlich für uns relevanten Themen enthält. Für den Bereich Anatomie und Stimme haben wir uns zwei Expertinnen ins Team geholt.</p>
            <p>Die Ausbildung umfasst fünf Module. Unser ganzheitliches Programm beinhaltet samstags und sonntags ein warmes, ayurvedisches und zu unseren Ausbildungsinhalten passendes Mittagessen für dich.</p>
            <p>Mit vereinter Herzens- und Wissenskraft begleiten wir dich durch die Ausbildung, lassen dich Yin Yoga fühlen und erfahren - aus Schüler- und Lehrerperspektive.</p>
            <p class="text-margin-bottom-s">Das erwartet dich</p>
            <ul>
              <li>relevante Anatomie und Physiologie für die Yin Yoga Praxis mit Eva Lerch (Physiotherapeutin, Manuelle Therapeutin und Yogalehrerin)</li>
              <li>Einsatz und Pflege von Stimme und Sprache mit Francisca Langner (Logopädin, Bachelor of Health)</li>
              <li>Energielehre und Traditionelle Chinesische Medizin</li>
              <li>Wesentliches aus der Yogaphilosophie</li>
              <li>Pranayama</li>
              <li>Meditation</li>
              <li>Yin Yoga Unterricht</li>
              <li>Asana-Praxis mit Variationen und Hilfsmitteln</li>
              <li>Tools für einzigartige Yin Yoga Stunden - Stimme, Adjustments, Massagetechniken, (Live-) Musik, Ätherische Öle</li>
              <li>in die Rolle des Lehrers wachsen</li>
              <li>Stille vs. Präsenz</li>
              <li>einen sicheren Raum kreieren und halten</li>
              <li>Sequencing im Yin, Themenfindung und -einbringung</li>
              <li>online unterrichten</li>
              <li>Business Facts</li>
            </ul>
            <p class="text-margin-bottom-s">Das bieten wir dir: Fundiertes Yin Yoga Wissen in Theorie und Praxis</p>
            <ul>
              <li>persönliche Entwicklung</li>
              <li>enge, persönliche Begleitung</li>
              <li>faires Feedback</li>
              <li>geschützter Raum</li>
              <li>umfangreiches Handout zu allen Ausbildungsinhalten</li>
              <li>Raum für alle deine Fragen</li>
              <li>ayurvedisches Mittagessen</li>
            </ul>
            <p class="text-margin-bottom-s">Das setzen wir voraus</p>
            <ul>
              <li>großes Interesse an der Traditionellen Chinesischen Medizin und an einem tieferen Einstieg in die Welt des Yin Yoga</li>
              <li>Vertrauen in uns, die Gruppe und dich selbst</li>
              <li>mutiges erweitern deiner Komfortzone</li>
              <li>Präsenz</li>
              <li>Regelmäßige Yin Yoga Praxis</li>
              <li>Eigenstudium (Ausarbeitungen, Fachliteratur, Prüfungsvorbereitung)</li>
            </ul>
            <p>Interesse? Wir freuen uns auf deine Nachricht.</p>
          `,
  },
  {
    name: 'Yoga Coaching',
    to: 'yoga-coaching',
    image: 'yoga-coaching.jpg',
    imageAltText: 'Mirka unterstützt Kundin in Entspannungshaltung.',
    buttons: [
      {
        text: 'Anfrage',
        link: `${mailtoMirkaHref}?subject=Coaching-Session&body=${coachingMailBody}`,
      },
    ],
    text: '<p>Du wünschst dir, den Weg zu mehr Lebensfreude und -qualität wieder zu finden und schaffst es nicht alleine?</p><p>Ich biete dir meine Unterstützung, meine Erfahrung und mein Wissen an um über individuelle Methoden, wie die körperliche Arbeit über Yin Yoga neue Ansätze zu finden. Gern gebe ich dir Impulse und Ideen, wie du dich in einer aktuellen, herausfordernden Lebenssituation selbst gut unterstützen kannst.</p><p>Oft braucht es mehr, als die Themen zu besprechen. Denn dabei wird etwas Wichtiges nicht einbezogen: Dein Körper. Ich finde es wichtig, den Gefühlen Raum in ihm zu geben und somit ganzheitlich für Veränderung sorgen zu können.</p>',
  },
  {
    name: '(Yin) Yoga',
    to: 'yoga',
    image: 'yin-yoga.jpg',
    imageAltText: 'Mirka liegt in Rückenlage und hält Hände in Gebetshaltung an ihre Stirn.',
    buttons: [
      {
        text: 'Kursplan',
        link: coursePlanUrl,
      },
      {
        text: 'Anfrage',
        link: `${mailtoMirkaHref}?subject=Privatstunde Yoga / Yin Yoga&body=${yogaMailBody}`,
      },
    ],
    text: '<h2 class="yoga-list__subtitle">Yoga</h2><p>Yoga ist für mich etwas sehr Besonderes. Unerwartet habe ich vor vielen Jahren gleich in meiner ersten Stunde meinen Körper auf eine überraschend intensive Weise gefühlt und wertgeschätzt. So suchte und fand ich mich immer wieder auf der Yogamatte und ich schätze diese wundervolle Methode, die Körper, Geist und Seele gleichermaßen anspricht, sehr.</p><p>Meinen Yogastil beschreibe ich als einen lebhaften Mix aus Hatha, Anusara und Vinyasa Yoga. Du wirst von mir mit viel Achtsamkeit und einer seelenvollen Wortpraxis geführt.</p><p>Du stärkst durch die dynamische Yogapraxis deine Muskulatur und somit deine Gelenke sowie dein Gleichgewicht auf allen Ebenen. Ein gezieltes Lenken deiner Atmung (Pranayama) sorgt für Entspannung und ein Mehr an Atemvolumen. Durch die Verbindung von Atem und Bewegung entstehen Ruhe und ein Wahrnehmen deines Körpers. Über eine regelmäßige Yoga- und Meditationspraxis sorgst du langfristig für dein ganzheitliches Wohl.</p><p>Gern plane ich eine persönliche Einzelsequenz zu deinen Wünschen und Themen.</p><h2 class="yoga-list__subtitle">Yin Yoga</h2><p>Dem Yin gehört mein Herz. Ich liebe diese passive, stille Yogaform. Einen großen Teil meines Lebens habe ich mich in meinem Umfeld angespannt und gestresst gefühlt, so dass in mir immer wieder eine tiefe Sehnsucht gestillt wird, wenn ich mir erlaube, mich auszugleichen, still zu werden, so dass ich meinen Körper ganz wahrnehmen kann. Spüre, was wichtig ist, was ich brauche, was Körper und Seele erzählen, wenn die Ruhe einkehrt.</p><p>Meine Yin Yoga Stunden beschreibe ich als eine tiefgründige Praxis, in der ich dich zum Loslassen, Selbstreflektieren und zur ehrlichen Begegnung mit dir selbst einlade.</p><p>Über tiefe, langgehaltene Dehnungen und ohne den Einsatz von Muskelkraft, sorgen wir im Yin Yoga für das Aufweichen von verhärteten Strukturen in Gewebe, Geist und Herz.</p>',
  },
  {
    name: 'Online Yoga',
    to: 'online-yoga',
    image: 'online-yoga.jpg',
    imageAltText: 'Notebook steht vor Yogaplatz zuhause.',
    buttons: [
      {
        text: 'Kursplan',
        link: coursePlanUrl,
      },
    ],
    text: '<p>Zuhause ein schönes Plätzchen schaffen, in das liebste Entspannungsoutfit schlüpfen und in Gemütlichkeit, bei Kerzenschein und Tee auf der Yogamatte sein. Keine Anfahrt und keine Parkplatzsuche, kein Arrangieren eines Babysitters.</p><p>Ich gebe zu, als die Pandemie kam, war ich von der mit so viel Technik verbundenen Yogavariante gar nicht begeistert und skeptisch, wie hier die Energie so gut fließen soll, als wären wir alle im selben Raum. Aber es funktioniert und zwar richtig gut. Ich habe meine Gruppe und viele Teilnehmer(innen), die von der ersten Online-Stunde an (immer wieder) dabei sind, sehr ins Herz geschlossen.</p><p>In unsicheren Zeiten des Rückzugs hat es gut getan, uns weiterhin zu schönen Yoga-Ritualen zusammenzufinden. Meine Dienstagsgruppe will ich nicht mehr missen.</p>',
  },
  {
    name: 'Kinder- und Familien-Yoga',
    to: 'familien-yoga',
    image: 'familien-yoga.jpg',
    imageAltText: 'Mutter und Tochter schmiegen Stirn an Stirn.',
    buttons: [
      {
        text: 'Kursplan',
        link: coursePlanUrl,
      },
    ],
    text: '<p>Die Achtsamkeitsarbeit mit den Kindern ist immer wieder eine erfrischende Abwechslung. Es ist schön zu erleben, wie interessiert sie die einzelnen Themen, Yogapositionen und das Entspannen annehmen. Sie bringen sich so motiviert und ehrlich ein, ich höre ihnen gerne zu. Das was sie zu sagen haben ist für mich anregend und eine Einladung, das Leben aus anderer Perspektive zu sehen.</p><p>In meinen Kinderyogastunden gibt es eine bunte Mischung aus körperlicher Bewegung (dehnen, strecken, tanzen, springen), Spaß, Balanceübungen, Achtsamkeitstraining, Entspannung und Traumreisen. Die Kinder lernen das Meditieren und Mantra singen kennen, wie die Atmung den Geist beruhigen und Anspannung lösen kann. Yoga fördert ein gutes Körpergefühl, zeigt Wege in die Entspannung und mehr Konzentration.</p><p>Wir setzen uns in der Gruppe jedes mal neu mit einem Thema auseinander, das an wichtige menschliche Werte und einen respektvollen Umgang miteinander erinnert.</p><p>Im Familienyoga wird ein besonderer Raum zu zweit geschaffen. Sich hier in Ruhe zu begegnen, öffnet die Möglichkeit der intensiven Verbindung zwischen Elternteil und Kind. Wie in jeder Yogastunde darf hier mal alles, was nicht in den Moment gehört, draußen bleiben und unwichtig sein.</p>',
  },
  {
    name: 'Ätherische Öle',
    to: 'aetherische-oele',
    image: 'aetherische-oele.jpg',
    imageAltText: 'Mirka im Wald, hält Blätter in Händen und riecht daran.',
    buttons: [
      {
        text: 'Anfrage',
        link: `${mailtoMirkaHref}?subject=Beratung Ätherische Öle&body=${aetherischeOeleMailBody}`,
      },
    ],
    text: '<p>Die ätherischen Öle kamen zu einer Zeit in mein Leben, in der ich sie brauchte. Zunächst waren es zwei besondere Ölmischungen, die über eine heilsame Polarity Sitzung zu mir fanden und mich einige Monate lang, wie zwei stützende Freunde, begleitet haben.</p><p>Ich wurde neugierig und beschäftigte mich mehr und mehr mit Heilpflanzen, ihren Essenzen und Wirkungsmöglichkeiten. Es folgte eine Aroma-Yogalehrerausbildung, viel Literatur und praktische Selbsterfahrung.</p><p>Nun genieße ich es sehr, auch in diesem Bereich meine eigene Erfahrung und mein Wissen mit denen zu teilen, die die natürlichen Kräfte einsetzen möchten und in ihrer aktuellen Lebensphase Unterstützung suchen.</p><p>Es gibt diverse Möglichkeiten, die Energie der Pflanzen, Früchte und Bäume in den Körper einzuladen. Ich selbst nutze zum Beispiel jeden Morgen Zitrusöle über den ersten Liter Wasser, um mich zu reinigen und für einen freundlichen und schwungvollen Start in den Tag zu sorgen. Ich lasse mich in meiner Yogapraxis über ein Einmassieren und Inhalieren der Essenzen von passenden Aromen unterstützen und nutze die Öle für eine erholsame Nacht.</p><p>Ich arbeite mit hochwertigen, naturbelassenen, reinen Bio-Ölen von Young Living. Diese Produkte überzeugen mich ganzheitlich, sie sind Fairtrade hergestellt und dies schwingt für mich mit in der Energie der Aromen. Die Young Living Öle sind die Kraftvollsten, die ich kenne.</p><p>Gern berate ich dich ganz individuell zu deinem aktuellen Bedarf.</p>',
  },
];
</script>

<template>
  <div>
    <SimpleHero
      title="Yoga & mehr"
      image-path="images/yoga-und-mehr-hero.jpg"
      image-alt-text="Mirka in friedvoller Krieger Position im Wald"
    />

    <ul class="u-margin-bottom-xxl">
      <li
        v-for="(item, index) in yogaUndMehrItems"
        :id="item.to"
        :key="item.to"
        class="yoga-list__item u-margin-bottom-xxl"
      >
        <h2 class="yoga-list__title">{{ item.name }}</h2>
        <NuxtImg
          :class="`yoga-list__image yoga-list__image--${index + 1}`"
          :src="`images/yoga-und-mehr-thumbnails/${item.image}`"
          :alt="item.imageAltText"
          width="1536"
        />
        <div class="yoga-list__text" v-html="item.text" />
        <a
          v-for="button in item.buttons"
          :key="button.link"
          class="yoga-list__button u-button"
          :href="button.link"
          target="_blank"
          rel="noopener"
          >{{ button.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use '../assets/variables';

.yoga-list {
  &__item {
    width: 768px;
    margin: 0 auto;
  }

  &__title {
    text-transform: uppercase;
    text-align: center;
    padding: variables.$space-xl variables.$space-m variables.$space-m variables.$space-m;
  }

  &__subtitle {
    text-transform: uppercase;
    text-align: center;
    padding: 0 variables.$space-m variables.$space-m variables.$space-m;
  }

  &__image {
    width: 100%;
    height: 480px;
    object-fit: cover;
    object-position: top;
    margin-bottom: variables.$space-m;
    text-align: center;

    &--1 {
      object-position: center;
    }
  }

  &__text {
    p {
      margin-bottom: variables.$line-height-m;

      &.text-margin-bottom-s {
        margin-bottom: variables.$line-height-xs;
      }
    }

    ul {
      list-style-position: outside;
      margin-left: variables.$space-m;
      margin-bottom: variables.$space-m;
    }

    li {
      list-style-type: disc;
    }

    table {
      tr {
        vertical-align: top;
        td {
          &:not(:first-child) {
            padding-left: variables.$space-m;
          }
        }
      }
      margin-bottom: variables.$space-m;
    }
  }

  &__button {
    &:not(:last-child) {
      margin-right: variables.$space-m;
    }
  }
}

@media (max-width: variables.$max-width-tablet) {
  .yoga-list {
    &__item {
      width: 100%;
      margin: 0 auto variables.$space-xl auto;
    }

    &__text {
      padding: 0 variables.$space-m;
    }

    &__button {
      margin: 0 variables.$space-m;

      &:not(:last-child) {
        margin-bottom: variables.$space-m;
      }
    }
  }
}

@media (max-width: variables.$max-width-mobile-landscape) {
  .yoga-list {
    &__image {
      height: 380px;
    }
  }
}

@media (max-width: variables.$max-width-mobile) {
  .yoga-list {
    &__image {
      height: 280px;
    }
  }
}
</style>
