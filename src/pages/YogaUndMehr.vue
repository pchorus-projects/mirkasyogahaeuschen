<template>
  <Layout>
    <SimpleHero
      title="Yoga & mehr"
      image-path="images/yoga-und-mehr-hero.jpg"
      image-alt-text="Yoga im Wald"
    ></SimpleHero>

    <ul class="u-margin-top-xl">
      <li
        :id="item.to"
        class="yoga-list__item u-margin-bottom-xxl"
        v-for="(item, index) in yogaUndMehrItems"
        :key="item.to"
      >
        <h2 class="yoga-list__title">{{ item.name }}</h2>
        <g-image
          v-if="item.image"
          :class="`yoga-list__image yoga-list__image--${index + 1}`"
          :src="require(`!!assets-loader?width=1536!@assets/images/yoga-und-mehr-thumbnails/${item.image}`)"
        />
        <div class="yoga-list__text" v-html="item.text"></div>
      </li>
    </ul>
  </Layout>
</template>

<script>
import SimpleHero from '../components/SimpleHero';

export default {
  components: { SimpleHero },
  metaInfo: {
    title: 'Yoga & mehr',
  },
  data: function () {
    return {
      yogaUndMehrItems: [
        {
          name: 'Ausbildung',
          to: 'ausbildung',
          image: 'ausbildung.jpg',
          text: `
            <p>
              DIVING DEEP - YIN YOGA TEACHER TRAINING 2022 - 100 STUNDEN I  AACHEN<br />
              Mit Johanna Langner und Mirka Carlsen<br />
              Komm mit auf eine Reise in die Tiefe deines Selbst.
            </p>
            <p>Wenn du Yin Yoga auch für dich entdeckt hast, wenn du tiefer eintauchen, dir selbst intensiv begegnen und die Hintergründe der Traditionellen Chinesischen Medizin, des Buddhismus und der Asanas kennenlernen möchtest, sei ab Januar dabei.</p>
            <p>Wir haben die Erfahrung gemacht, dass eine fundierte Ausbildung mit Herz und Verstand die Basis für eine tiefe Auseinandersetzung und einen sicheren Umgang mit der Yogapraxis ist. Daher haben wir ein umfangreiches Konzept für dich erarbeitet, das neben Grundlagen und Basiswissen auch alle zusätzlich für uns relevanten Themen enthält.</p>
            <p>Für den Bereich Anatomie und Stimme haben wir uns zwei Expertinnen ins Team geholt. Die Ausbildung umfasst fünf Module mit insgesamt 100 Ausbildungsstunden in Präsenz. Unser ganzheitliches Programm beinhaltet samstags und sonntags ein warmes, ayurvedisches und zu unseren Ausbildungsinhalten passendes Mittagessen für dich.</p>
            <p>Mit vereinter Herzens- und Wissenskraft begleiten wir dich durch die Ausbildung, lassen dich Yin Yoga fühlen und erfahren - aus Schüler- und Lehrerperspektive. Nach dieser Ausbildung wirst du dich sehr gut auf ein eigenständiges Unterrichten von Yin Yogaklassen vorbereitet fühlen.</p>
            <p>Selbstverständlich ist es dir selbst überlassen, ob du das tiefere Wissen für deine eigene Praxis mitnimmst oder als Yin YogalehrerIn aktiv sein möchtest.</p>
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
              <li>Dienen im Yin</li>
              <li>in die Rolle des Lehrers wachsen</li>
              <li>Stille vs. Präsenz</li>
              <li>einen sicheren Raum kreieren und halten</li>
              <li>Sequencing im Yin, Themenfindung und -einbringung</li>
              <li>online unterrichten</li>
              <li>Business Facts</li>
            </ul>
            <p class="text-margin-bottom-s">Das bieten wir dir</p>
            <p class="text-margin-bottom-s">Fundierte 100 Stunden Ausbildung</p>
            <ul>
              <li>Yin Yoga Wissen in Theorie und Praxis</li>
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
              <li>Du zeigst großes Interesse an der Traditionellen Chinesischen Medizin und an einem tieferen Einstieg in die Welt des Yin Yoga.</li>
              <li>Du gehst mit Vertrauen in uns, die Gruppe und dich selbst durch die Ausbildung.</li>
              <li>Du erweiterst mutig du deine Komfortzone.</li>
              <li>Du teilst uns mit deinem Anmeldewunsch gesundheitliche (körperliche, psychische) Einschränkungen mit.</li>
              <li>Du bist an allen Ausbildungstagen anwesend und präsent.</li>
              <li>Du praktizierst regelmäßig Yin Yoga, freust dich darauf, ein spannendes Buch zu lesen und dich über Fachliteratur auszutauschen, du bist bereit, zuhause etwas auszuarbeiten und dich auf die Prüfung vorzubereiten.</li>
            </ul>
            <p class="text-margin-bottom-s">Termine</p>
            <table>
              <tr><td>14.01.&nbsp;-&nbsp;16.01.22</td><td>ESSENZ DES SEINS</td></tr>
              <tr><td>18.02.&nbsp;-&nbsp;20.02.22</td><td>VOM GROBSTOFFLICHEN IN DEN FEINSTOFFLICHEN KÖRPER</td></tr>
              <tr><td>04.03.&nbsp;-&nbsp;06.03.22</td><td>VOM SCHÜLER ZUM LEHRER</td></tr>
              <tr><td>29.04.&nbsp;-&nbsp;01.05.22</td><td>MAGIC TOUCH - Klang, Stimme, Berührung, Massage</td></tr>
              <tr><td>21.05.&nbsp;-&nbsp;22.05.22</td><td>PARYAPTI - Prüfung & Zeremonie</td></tr>
            </table>
            <p class="text-margin-bottom-s">Das investierst du</p>
            <ul>
              <li>100 Ausbildungsstunden, Zeit für dein Eigenstudium und die Prüfungsvorbereitung.</li>
              <li>Mit deiner (schriftlichen) Anmeldung wird eine Anzahlung fällig. Diese sichert dir deinen Ausbildungsplatz verbindlich. Die Restzahlung ist in der ersten Januarwoche zu überweisen.</li>
              <li>Wenn du in Raten bezahlen möchtest, mach uns einen fairen Vorschlag.</li>
              <li>Eventuelle Reisekosten, wie deine An-/Abfahrt, Unterkunft etc. sowie die Anschaffung der Pflichtlektüre und deines Yogamaterials (Matte, Bolster und Yogablöcke) sind nicht in den Ausbildungsgebühren enthalten.</li>
            </ul>
          `,
        },
        {
          name: 'Yoga Coaching',
          to: 'yoga-coaching',
          image: 'yoga-coaching.jpg',
          text: '<p>Du wünscht dir Unterstützung dabei, bestimmte Themen in deinem Leben anzugehen? Oft braucht es mehr, als darüber zu sprechen und so biete ich dir all meine Erfahrung und mein Wissen an, um auch auf körperlicher Ebene für Veränderung zu sorgen. Damit du dich ganzheitlich und fokussiert deinen Wünschen und Zielen widmen kannst.</p><p>Ich gebe dir Impulse und Ideen, wie du dich in einer aktuellen, herausfordernden Lebenssituation selbst gut unterstützen kannst.</p>',
        },
        {
          name: 'Yoga',
          to: 'yoga',
          image: 'yin-yoga.jpg',
          text: '<p>Yoga ist für mich etwas sehr Besonderes. Unerwartet habe ich vor vielen Jahren gleich in meiner ersten Stunde meinen Körper auf eine überraschend intensive Weise gefühlt und wertgeschätzt. So suchte und fand ich mich immer wieder auf der Yogamatte und ich schätze diese wundervolle Methode, die Körper, Geist und Seele gleichermaßen anspricht, sehr.</p><p>Mein Yogastil ist einen lebhaften Mix aus Vinyasa, Anusara und Hatha Yoga beschreiben. Du wirst von mir mit viel Achtsamkeit und einer seelenvollen Wortpraxis geführt.</p><p>Du stärkst durch die Yogapraxis deine Muskulatur und somit deine Gelenke sowie dein Gleichgewicht auf allen Ebenen. Ein gezieltes Lenken deiner Atmung (Pranayama) sorgt für Entspannung und ein Mehr an Atemvolumen. Durch die Verbindung von Atem und Bewegung entstehen Ruhe und ein Wahrnehmen deines Körpers. Über eine regelmäßige Yoga- und Meditationspraxis sorgst du langfristig für dein ganzheitliches Wohl.</p><p>Gern plane ich eine persönliche Einzelsequenz zu deinen Wünschen und Themen.</p>',
        },
        {
          name: 'Yin Yoga',
          to: 'yin-yoga',
          text: '<p>Dem Yin gehört mein Herz. Ich liebe diese passive, stille Yogaform. Einen großen Teil meines Lebens habe ich mich in meinem Umfeld angespannt und gestresst gefühlt, so dass in mir immer wieder eine tiefe Sehnsucht gestillt wird, wenn ich mir erlaube, mich auszugleichen, still zu werden, so dass ich meinen Körper ganz wahrnehmen kann. Spüre, was wichtig ist, was ich brauche, was Körper und Seele erzählen, wenn die Ruhe einkehrt.</p><p>Meine Yin Yoga Stunden beschreibe ich als eine tiefgründige Praxis, in der ich dich zum Loslassen, selbstreflektierten und zur ehrlichen Begegnung mit dir selbst einlade.</p><p>Über tiefe, langgehaltene Dehnungen ohne den Einsatz von Muskelkraft sorgen wir im Yin Yoga für das Aufweichen von verhärteten Strukturen, in Gewebe, Geist und Herz.</p>',
        },
        {
          name: 'Online Yoga',
          to: 'online-yoga',
          image: 'online-yoga.jpg',
          text: '<p>Zuhause ein schönes Plätzchen schaffen, in das liebste Entspannungsoutfit schlüpfen und in Gemütlichkeit, bei Kerzenschein und Tee auf der Yogamatte sein. Keine Anfahrt und keine Parkplatzsuche, kein Arrangieren eines Babysitters.</p><p>Ich gebe zu, als die Pandemie kam, war ich von der mit so viel Technik verbundenen Yogavariante gar nicht begeistert und skeptisch, wie hier die Energie so gut fließen soll, als wären wir alle im selben Raum. Aber es funktioniert und zwar richtig gut. Ich habe meine Gruppe und viele Teilnehmer(innen), die von der ersten Online-Stunde an (immer wieder) dabei sind, sehr ins Herz geschlossen.</p><p>In unsicheren Zeiten des Rückzugs hat es gut getan, uns weiterhin zu schönen Yoga-Ritualen zusammenzufinden. Meine Dienstagsgruppe will ich nicht mehr missen.</p>',
        },
        {
          name: 'Kinder- und Familien-Yoga',
          to: 'familien-yoga',
          image: 'familien-yoga.jpg',
          text: '<p>Die Achtsamkeitsarbeit mit den Kindern ist immer wieder eine erfrischende Abwechslung. Es ist schön zu erleben, wie interessiert sie die einzelnen Themen, Yogapositionen und das Entspannen annehmen. Sie bringen sich so motiviert und ehrlich ein, ich höre ihnen gerne zu. Das was sie zu sagen haben ist für mich anregend und eine Einladung, das Leben aus aus anderer Perspektive zu sehen.</p><p>In meinen Kinderyogastunden gibt es eine bunte Mischung aus körperlicher Bewegung (dehnen, strecken, tanzen, springen), Spaß, Balanceübungen, Achtsamkeitstraining, Entspannung und Traumreisen. Die Kinder lernen das Meditieren und Mantra singen kennen, wie die Atmung den Geist beruhigen und Anspannung lösen kann. Yoga fördert ein gutes Körpergefühl, zeigt Wege in die Entspannung und mehr Konzentration.</p><p>Wir setzen uns in der Gruppe jedes mal neu mit einem Thema auseinander, das an wichtige menschliche Werte und einen respektvollen Umgang miteinander erinnert.</p><p>Im Familienyoga wird ein besonderer Raum zu zweit geschaffen. Sich hier in Ruhe zu begegnen, öffnet die Möglichkeit der intensiven Verbindung zwischen Elternteil und Kind. Wie in jeder Yogastunde darf hier mal alles, was nicht in den Moment gehört, draußen bleiben und unwichtig sein.</p>',
        },
        {
          name: 'Ätherische Öle',
          to: 'aetherische-oele',
          image: 'aetherische-oele.jpg',
          text: '<p>Die ätherischen Öle kamen zu einer Zeit in mein Leben, in der ich sie brauchte. Zunächst waren es zwei besondere Ölmischungen, die über eine heilsame Polarity Sitzung zu mir fanden und mich einige Monate lang, wie zwei stützende Freunde, begleitet haben.</p><p>Ich wurde neugierig und beschäftigte mich mehr und mehr mit Heilpflanzen, ihren Essenzen und Wirkungsmöglichkeiten. Es folgte eine Aroma-Yogalehrerausbildung, viel Literatur und praktische Selbsterfahrung.</p><p>Nun genieße ich es sehr, auch in diesem Bereich meine eigene Erfahrung und mein Wissen mit denen zu teilen, die die natürlichen Kräfte einsetzen möchten und in ihrer aktuellen Lebensphase Unterstützung suchen.</p><p>Es gibt diverse Möglichkeiten, die Energie der Pflanzen, Früchte und Bäume in den Körper einzuladen. Ich selbst nutze zum Beispiel jeden Morgen Zitrusöle über den ersten Liter Wasser, um mich zu reinigen und für einen freundlichen und schwungvollen Start in den Tag zu sorgen. Ich lasse mich in meiner Yogapraxis über ein Einmassieren und Inhalieren der Essenzen von passenden Aromen unterstützen und nutze die Öle für eine erholsame Nacht.</p><p>Ich arbeite mit hochwertigen, naturbelassenen, reinen Bio-Ölen von Young Living. Diese Produkte überzeugen mich ganzheitlich, sie sind Fairtrade hergestellt und dies schwingt für mich mit in der Energie der Aromen. Die Young Living Öle sind die Kraftvollsten, die ich kenne.</p>',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../assets/variables';

.yoga-list {
  &__item {
    width: 768px;
    margin: 0 auto $space-xxl auto;
  }

  &__title {
    text-transform: uppercase;
    margin-bottom: $space-m;
    text-align: center;
    padding: 0 $space-m;
  }

  &__image {
    width: 100%;
    height: 480px;
    object-fit: cover;
    object-position: top;
    margin-bottom: $space-m;
    text-align: center;

    &--1 {
      object-position: center;
    }
  }

  &__text {
    p {
      margin-bottom: $line-height-m;

      &.text-margin-bottom-s {
        margin-bottom: $line-height-xs;
      }
    }

    ul {
      list-style-position: outside;
      margin-left: $space-m;
      margin-bottom: $space-m;
    }

    li {
      list-style-type: disc;
    }

    table {
      tr {
        vertical-align: top;
        td {
          &:not(:first-child) {
            padding-left: $space-m;
          }
        }
      }
      margin-bottom: $space-m;
    }
  }
}

@media (max-width: $max-width-mobile-landscape) {
  .yoga-list {
    &__item {
      width: 100%;
      margin: 0 auto $space-xxl auto;
    }

    &__image {
      height: 380px;
    }

    &__text {
      padding: 0 $space-m;
    }
  }
}

@media (max-width: $max-width-mobile) {
  .yoga-list {
    &__image {
      height: 280px;
    }
  }
}
</style>
