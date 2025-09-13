<script setup lang="ts">
import { mailtoMirkaHref } from '~/constants';

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

const yogaUndMehrItems = [
  {
    name: 'Yoga & mehr',
    shortName: 'Yoga & mehr',
    to: 'yoga-und-mehr',
    image: 'yoga-und-mehr.jpg',
    imageAltText: '',
    buttons: [
      {
        text: 'Anfrage',
        link: `${mailtoMirkaHref}?subject=Yin Yoga Ausbildung&body=${ausbildungMailBody}`,
      },
    ],
    text: `
            <p>
              In unserem Studio verbinden wir eine vielfältige Yoga-Praxis mit geschützter Umgebung für
              innere Ruhe, Energiefluss und persönliche Entwicklung. Unsere Angebote laden dich dazu
              ein, deinen Körper zu spüren, Emotionen wahrzunehmen und deine Energie bewusst in
              Bewegung zu bringen.
            </p>
            <p>
              Über das klassische Yoga hinaus geben dir Meditationen, still oder in Bewegung, die
              Möglichkeit, dich selbst zu entdecken, innere Balance zu finden und deine
              Selbstwahrnehmung zu vertiefen. Soul Motion, achtsamer und intuitiver Tanz, gibt Emotionen
              und Kreativität Ausdruck, während Shake the Dust energetisch aktiviert und Lebensfreude
              schenkt.
            </p>
            <p>
              Unser Angebot in Yoga und Energiearbeit – jede Praxis mit ihrem besonderen Fokus und Benefit:
            </p>
            <p>
              <strong>Yin Yoga - ruhig | tiefgründig | erdend</strong><br>
              Eine passive, sanfte Praxis, die Muskeln, Gelenke und Faszien dehnt und Ruhe vermittelt. Hier
              kannst du langsamer werden und in deine eigene innere Welt spüren. Yin Yoga schafft ein
              Feld für Achtsamkeit und emotionale Entlastung.
            </p>
            <p>
              <strong>Hatha Yoga - stabilisierend | harmonisch | achtsam</strong><br>
              Stärkt deinen Körper in Muskulatur und Gelenken und verbindet Körper, Geist und Atmung.
              Ideal, um Körperbewusstsein, Stabilität und innere Ruhe zu fördern. Im Hatha Yoga wird in
              den Yoga-Positionen etwas länger verweilt.
            </p>
            <p>
              <strong>Vinyasa Yoga - fließend | dynamisch | belebend</strong><br>
              Dynamische, fließende Bewegungen laden dazu ein, Kraft und Leichtigkeit zugleich zu
              spüren. Vinyasa Yoga ist wie ein Tanz von Atem und Bewegung.
            </p>
            <p>
              <strong>Kundalini Yoga - energetisch | spirituell | mystisch</strong><br>
              Eine spirituelle Praxis, die dynamische Bewegung, Pranayama, Mantra und Meditation
              vereint. Kundalini Yoga ermöglicht ein intensives Bewegen deiner Energie, Kraft und
              Emotionen und lädt zu einer tiefen spirituellen Erfahrung ein.
            </p>
            <p>
              <strong>Flow Into Restorative - regenerierend | bewegend | nährend</strong><br>
              Sanfter Vinyasa-Flow trifft auf tiefe Entspannung und Regeneration.
            </p>
            <p>
              <strong>Yin & Yang - ganzheitlich | Balance | Sun & Monn</strong><br>
              Dynamische Vinyasa-Elemente vebinden sich mit ruhigem Yin Yoga. Du tanzt durch Atem und
              Fluss und entspannst in ruhigen, passiven, tiefen Dehnungen.
            </p>
            <p>
              <strong>Restorative Yoga - tiefenetnspannend | beruhigend | heilsam</strong><br>
              Eine besonders sanfte Praxis, bei der dein Körper in entspannenden Positionen vollständig
              unterstützt wird. Für tiefe Regeneration und das Lösen von Stress auf allen Ebenen.
            </p>
            <p>
              <strong>Aroma Yoga - duftend | sinnlich | naturverbunden</strong><br>
              Erlebe Yoga vereint mit der Essenz der Pflanzen - eine Begegnung, die Körper und Seele auf
              besondere Weise berührt.
            </p>
            <p>
              <strong>Meditationen - achtsam | bewusst | ausgleichend</strong><br>
              Meditation ist eine Reise nach innen. Sie führt dich in Kontakt mit deiner inneren Stimme und
              eröffnet Räume für Bewusstsein und Selbstfindung. In der Meditation kannst du dich
              aufmerksam dir selbst zuwenden, deine Gedanken klären und üben
              "jetzt" zu sein.
            </p>
            <p>
              <strong>Ob in Ruhe oder in Bewegung - Meditation lädt dich ein, dich selbst neu zu entdecken.</strong><br>
              Neben klassischer Stille-Meditation bieten wir auch aktive Prozesse an - vom sanften Gehen
              bis hin zum befreienden Schütteln. Finde den Ausdruck, der dir entspricht und dich in die Tiefe führt.
            </p>
            <p>
              <strong>Soul Motion - intuitiv | emotional | frei</strong><br>
              Achtsamer, intuitiver, freier Tanz - eine Einladung, dich über Bewegung auszudrücken. Eine
              Möglichkeit, deinen Körper neu zu spüren.
            </p>
            <p>
              <strong>Shake the Dust - ausgelassen | vitalisierend | befreiend</strong><br>
              Wild, lebendig und befreiend. Eine transformative Bewegungspraxis mit Yoga-, Pilates- und
              Tanz-Elementen, die Spannungen löst und Energie und Emotionen in Bewegung bringt.
            </p>
            <p>All unsere Gruppenangebote findest du in unserem Kursplan.</p>
            <p>
              Wenn du lieber eine persönliche 1:1 Session möchtest, schreib uns einfach eine kurze
              Nachricht mit deinen Wünschen und zeitlichen Möglichkeiten. Wir planen dann gemeinsam
              deine individuelle Einheit. Der Ausgleich für eine 1:1 Session liegt bei ...
            </p>
            <p>
              110,- € inkl. 19 % MwSt. für 1 Stunde (oder 10x bei 990,- €)<br>
              155,- € inkl. 19 % MwSt. für 1,5 Stunden (oder 10x bei 1.395,- €)
            </p>
          `,
  },
  {
    name: 'Rund um die Geburt',
    shortName: 'Geburt',
    to: 'rund-um-die-geburt.jpg',
    image: 'rund-um-die-geburt.jpg',
    imageAltText: '',
    text: `
            <h3 class="yoga-list__subtitle">Yoga in der Schwangerschaft – einzigartig&nbsp;|&nbsp;herzlich&nbsp;|&nbsp;unterstützend</h3>
            <p>
              Die Schwangerschaft ist eine einzigartige Lebensphase – voller Veränderung, Wunder und
              Vorfreude. In unseren Stunden darfst du dir bewusst Zeit für dich und dein Baby nehmen. Mit
              viel Herz und Wissen begleiten wir dich auf dieser besonderen Reise und stellen die
              Verbindung zwischen dir und deinem Kind in den Mittelpunkt.
            </p>
            <p>
              Unsere Stunden sind kunterbunt und abwechslungsreich gestaltet: kräftigende Übungen geben
              deinem Körper Stabilität und Stärke, bewusste Atem- und Achtsamkeitselemente stärken dein
              Selbstvertrauen und dein Vertrauen in deine intuitive Kraft. Sanfte, entspannende Sequenzen
              schenken dir Ruhe, Erdung und Fokus – damit du dich getragen und gestärkt fühlst.
            </p>
            <p>
              Neben der Yogapraxis ist uns auch der Austausch wichtig: im gemeinsamen Sharing mit den
              anderen Frauen entsteht ein wertvoller Raum voller Offenheit, Verständnis und gegenseitiger
              Unterstützung.
            </p>
            <p>
              Unser Angebot richtet sich an Schwangere ab dem zweiten Trimester – egal, ob du schon
              Yoga-Erfahrung hast oder ganz neu beginnst: du bist herzlich willkommen.
            </p>
            <p>All unsere Gruppenangebote findest du in unserem Kursplan.</p>
            <p>
              Wenn du lieber eine persönliche 1:1 Session möchtest, schreib uns einfach eine kurze
              Nachricht mit deinen Wünschen und zeitlichen Möglichkeiten. Wir planen dann gemeinsam
              deine individuelle Einheit. Der Ausgleich für eine 1:1 Session liegt bei ...
            </p>
            <p>
              110,- € inkl. 19 % MwSt. für 1 Stunde (oder 10x bei 990,- €)<br>
              155,- € inkl. 19 % MwSt. für 1,5 Stunden (oder 10x bei 1.395,- €)
            </p>
            <h3 class="yoga-list__subtitle">Blessing Way, ein liebevolles Ritual für die werdende Mama – verbunden&nbsp;|&nbsp;emotional&nbsp;|&nbsp;liebevoll</h3>
            <p>
              Ein Blessing Way ist ein Geschenk voller Herz, Wärme und Weiblichkeit – eine Zeremonie,
              die die Schwangere in dieser besonderen Zeit umhüllt, feiert und stärkt. Eingeladen sind ihre
              Lieblingsfrauen: Freundinnen, Schwestern, Mütter oder andere wichtige Wegbegleiterinnen.
              Gemeinsam erschafft ihr einen Raum, in dem die werdende Mama gehört, gehalten und
              getragen wird.
            </p>
            <p>
              In dieser liebevollen Atmosphäre erhält sie Zuspruch, Mut und Kraft. Sie und ihr Baby stehen
              im Mittelpunkt – voller Freude über das neue Leben und den baldigen Zuwachs. Rituale wie
              Dankbarkeitsmomente, kleine Liebesrituale oder kreative, gemeinsame Einheiten können
              eingeflochten werden und machen die Zeremonie einzigartig und ganz persönlich.
              Ein Blessing Way schenkt der Schwangeren Vertrauen und innere Stärke – für die Geburt,
              das Wochenbett und den neuen Weg ins Mama-Sein. Es ist eine Feier der Weiblichkeit, der
              Verbindung und des Lebens.
            </p>
            <p>
              <i>Wir freuen uns darauf, ein ganz persönliches Blessing mit euch zu gestalten. Schreib uns
              einfach eine kurze Nachricht mit euren Wünschen und zeitlicher Vorstellung und wir planen
              gemeinsam etwas Besonderes.</i>
            </p>
            <h3 class="yoga-list__subtitle">Mothers Yoga, Postnatal Yoga für Dich – stärkend&nbsp;|&nbsp;sanft&nbsp;|&nbsp;soulful</h3>
            <p>
              Die Zeit nach der Geburt ist besonders, wertvoll, intensiv und gefühlvoll. In unserem Mothers
              Yoga Kurs darfst du dir bewusst Zeit für dich selbst nehmen, sobald dein Wochenbett
              abgeschlossen ist und du eine medizinische Freigabe hast.
            </p>
            <p>
              Ob du parallel zur Rückbildung oder im Anschluss daran kommst – du bist herzlich
              willkommen. Auch wenn die Geburt deines Kindes schon länger zurückliegt, ist dieser Kurs
              genau richtig, um Körper und Seele wieder vorsichtig zu stärken.
              Sanfte, aber gezielte Übungen helfen dir, Schritt für Schritt neue Stabilität aufzubauen. Der
              Beckenboden steht dabei selbstverständlich im Fokus. Gleichzeitig schenken wir dir Momente
              der Entspannung und Ruhe – damit du Kraft schöpfen, dich erden und dich selbst wieder
              spüren kannst.
            </p>
            <p><i>Alle Gruppenangebote findest du in unserem Kursplan.</i></p>
            <h3 class="yoga-list__subtitle">Mama & Baby Yoga – gemeinsam&nbsp;|&nbsp;spielerisch&nbsp;|&nbsp;liebevoll</h3>
            <p>
              Dieses Angebot richtet sich an dich und dein Baby – ein liebevoller Raum, der euch beide
              verbindet.
            </p>
            <p>
              Wir empfehlen, mit dem Mama & Baby Yoga ab etwa 8–12 Wochen nach der Geburt zu
              starten – je nachdem, wann ihr euch bereit fühlt und ihr eine medizinische Freigabe erhalten
              habt. Das Wochenbett ist eine wertvolle Zeit, in der ihr als Mama und Baby gemeinsam
              ankommt, euch kennenlernt und eure neue Verbindung wachsen darf. Erst wenn ihr beide in
              Ruhe in dieser neuen Lebensphase gelandet seid, schenkt euch der Kurs die Möglichkeit,
              Bewegung, Nähe und Verbundenheit auch auf der Matte zu erleben.
              Am Kurs kannst du gut teilnehmen, bevor dein Baby beginnt zu krabbeln.
            </p>
            <p>
              In diesem Kurs wirst nicht nur du als Mama gestärkt, sondern dein Baby wird auf liebevolle
              Weise in die Praxis mit einbezogen. Ihr dürft gemeinsam fließen, euch spüren, miteinander
              lachen und Momente voller Nähe genießen.
              Die Übungen fördern deine körperliche Kraft und Stabilität, während die gemeinsame Praxis
              die Bindung zwischen dir und deinem Kind noch tiefer werden lässt. So entsteht ein Kurs, der
              nicht "Yoga mit Baby", sondern wirklich Yoga für euch beide ist.
            </p>
            <p><i>Alle Gruppenangebote findest du in unserem Kursplan.</i></p>
    `,
  },
  {
    name: 'Specials, Workshops, Events & Retreats – magisch&nbsp;|&nbsp;nährend&nbsp;|&nbsp;herzensnah',
    shortName: 'Specials',
    to: 'specials',
    image: 'specials.jpg',
    imageAltText: '',
    text: `
            <p>
              Neben unserem wöchentlichen Yogaprogramm und den individuellen Angeboten wie
              Einzelstunden, Coaching, Chakra Clearing oder Herzenszeremonien erwarten dich
              regelmäßig kleine und große Highlights. Fast jede Woche öffnen wir den Raum für etwas
              Besonderes: mal eine Klangreise oder ein Moon Circle, mal ein Workshop rund um
              Breathwork, Entgiftung und Ernährung – immer achtsam verbunden mit Yoga. Dazu laden wir
              zu inspirierenden Events ein, wie einer Lesung, einem Mantra-Abend oder einem Musik-
              Konzert, das dich tief im Herzen berührt. Und wer tiefer eintauchen möchte, findet in unseren
              Tages- oder Wochenend-Retreats (im Studio, gelegentlich auch an besonderen Orten
              außerhalb) die perfekte Auszeit.
            </p>
            <p>
              <i>
                Unsere Specials findest du im Buchugssystem unter Workshops und Retreats. Wir freuen uns,
                wenn du mit uns in diese Magie eintauchst und dir deine besonderen Herzensmomente
                schenkst.
              </i>
            </p>
    `,
  },
  {
    name: 'Herzensfeste & Yoga – wir gestalten Eure besonderen Momente und Anlässe, die das Leben und Eure Verbindung feiern – herzerwärmend&nbsp;|&nbsp;gemeinsam&nbsp;|&nbsp;besonders',
    shortName: 'Herzensfeste',
    to: 'herzensfeste',
    image: 'herzensfeste.jpg',
    imageAltText: '',
    text: `
            <p>
              Manche Anlässe im Leben verdienen es, auf ganz besondere Weise gefeiert zu werden. Ob
              als inniger Kreis, als ausgelassene Freundinnengruppe oder als Überraschung für einen
              Herzensmenschen – wir gestalten für euch einzigartige YOGA-Erlebnisse voller Wärme,
              Kreativität und Freude.
            </p>
            <p class="text-margin-bottom-s">
              Besonders viel Erfahrung haben wir mit Junggesellinnenabschieden, die wir fernab vom
              klassischen Trubel mit ganz viel Herz, Leichtigkeit und eurer persönlichen Note gestalten. Von
              reinen Yogastunden bis hin zu feierlichen Zeremonien ist alles möglich:
            </p>
            <ul>
              <li>kraftvolles Wunsch-Yoga in der Gruppe</li>
              <li>
                kreative Elemente wie Armbänder knüpfen, Blumenkränze binden oder Erinnerungsstücke
                gestalten
              </li>
              <li>
                persönliche Rituale voller Verbundenheit – z. B. Geschichten und Fotos teilen, Dankbarkeit
                spüren, gemeinsame Wünsche für die Zukunft aussprechen
              </li>
              <li>
                ein liebevoller Ausklang – sei es mit stimmungsvollem Boho-Picknick mit tiefem Tisch,
                Sitzkissen und liebevollen Details, einem persönlichen Live Konzert oder einem Gläschen
                Sekt.
              </li>
            </ul>
            <p>
              Doch nicht nur Bräute dürfen gefeiert werden. Vielleicht möchtet ihr eure Schwesternschaft
              ehren, eine Freundin zum Geburtstag überraschen oder einfach mal das Leben, die
              Freundschaft und euch selbst feiern. Jede Anfrage ist willkommen – wir hören euch zu und
              kreieren gemeinsam euer ganz individuelles Herzens-Event.
            </p>
            <p>
              Lasst uns zusammen Momente erschaffen, die bleiben – bunt, lebendig, innig und voller
              Liebe. <i>Schreib mir gerne eine Nachricht mit euren Wünschen und zeitlichen Möglichkeiten,
              damit wir euer ganz persönliches Herzensfest gestalten können.</i>
            </p>
    `,
  },
  {
    name: 'Diving Deep, Yin Yoga Ausbildung – tiefgründig&nbsp;|&nbsp;inspirierend&nbsp;|&nbsp;transformierend',
    shortName: 'Ausbildung',
    to: 'yin-ausbildung',
    image: 'yin-ausbildung.jpg',
    imageAltText: '',
    text: `
            <p>Komm mit auf eine magische Reise in die Tiefe deines Selbst</p>
            <p>
              Wenn du Yin Yoga auch für dich entdeckt und lieben gelernt hast, wenn du tiefer eintauchen,
              dir selbst intensiv begegnen und die Hintergründe der Traditionellen Chinesischen Medizin,
              des Buddhismus und der Asanas kennenlernen möchtest, sei unbedingt dabei.
            </p>
            <p>
              Wir haben ein umfangreiches Konzept für dich erarbeitet, das neben Grundlagen und
              Basiswissen auch alle zusätzlich für uns relevanten Themen enthält. Für den Bereich
              Anatomie, Klang und Stimme haben wir mit Jeska, Franci und Eva drei besondere
              Expertinnen ins Team geholt. Mit vereinter Herzens- und Wissenskraft begleiten
              wir dich durch dieses Programm, lassen dich Yin Yoga fühlen und erfahren - aus Schüler- und Lehrerperspektive.
            </p>
            <p class="text-margin-bottom-s">Ausbildungsinhalt:</p>
            <ul>
              <li>
                relevante Anatomie und Physiologie für die Yin Yoga Praxis mit Eva Lerch
                (Physiotherapeutin, Manuelle Therapeutin und Yogalehrerin)
              </li>
              <li>
                Einsatz und Pflege von Stimme und Sprache mit Francisca Langner (Logopädin, Bachelor
                of Health)
              </li>
              <li>
                Einsatz von Live Musik, Mantra-Gesang und Klang mit Jeska Onderwater (singer-
                songweaver, yoga teacher, creative workshop & ceremony leader)
              </li>
              <li>Energielehre und Traditionelle Chinesische Medizin</li>
              <li>Wesentliches aus der Yogaphilosophie</li>
              <li>Pranayama</li>
              <li>Meditation</li>
              <li>Asana-Praxis mit Variationen und Hilfsmitteln</li>
              <li>
                Tools für einzigartige Yin Yoga Stunden - Stimme, Adjustments, Massagetechniken, (Live-)
                Musik, Ätherische Öle
              </li>
              <li>die Rolle des Lehrers</li>
              <li>einen sicheren Raum kreieren und halten</li>
              <li>Sequencing</li>
            </ul>
            <p class="text-margin-bottom-s">Das bieten wir dir:</p>
            <ul>
              <li>Fundiertes Yin Yoga Wissen in Theorie und Praxis</li>
              <li>persönliche Entwicklung</li>
              <li>enge, persönliche Begleitung</li>
              <li>faires Feedback</li>
              <li>geschützter Raum</li>
              <li>umfangreiches Ausbildungsbuch zu allen Ausbildungsinhalten</li>
              <li>frische Ayurveda-Küche an allen Ausbildungstagen</li>
            </ul>
            <p class="text-margin-bottom-s">Das setzen wir voraus:</p>
            <ul>
              <li>
                großes Interesse an der Traditionellen Chinesischen Medizin und an einem tieferen
                Einstieg in die Welt des Yin Yoga
              </li>
              <li>Vertrauen in uns, die Gruppe und dich selbst</li>
              <li>mutiges erweitern deiner Komfortzone</li>
              <li>Präsenz</li>
              <li>Regelmäßige Yin Yoga Praxis</li>
              <li>Eigenstudium (Ausarbeitungen, Fachliteratur, Prüfungsvorbereitung)</li>
            </ul>
            <p>
              Du hast Interesse? Dann schreib uns gerne eine Nachricht und erzähle uns ein wenig von dir,
              deiner bisherigen Yin Yoga Erfahrung sowie deinen Wünschen und Zielen.
            </p>
            <p>
              <i>"Ich habe eine Yin Yoga Ausbildung für Körper und Geist erwartet, von der ich Übungen für
              meine eigenen Business-Trainings nutzen kann. Bekommen habe ich zwei so sehr
              warmherzig, wertschätzend, ganzheitlich denkende und lehrende, professionelle und alles
              gebende Lehrerinnen, die mich mit ihrem Gesamtkonzept überwältigt haben. Ein so
              umfangreiches und liebevoll gestaltetes Skript, beeindruckende Gastdozentinnen und
              Ayurvedisches Essen ergänzen diese Ausbildung für mich zu einem vollkommenen Paket. Das
              Training ist noch nicht abgeschlossen, doch schon jetzt fühle ich mich perfekt für erste eigene
              Yogastunde vorbereitet. Wir haben so viel Wertvolles über unseren Körper und den Geist, der
              hinter dem Yoga steht, gelernt. Ich bin begeistert! Von Herzen: Danke!"</i><br>
              Jenny aus Aachen, Business Trainer/Coach, begeisterte Teilnehmerin 2022
            </p>
    `,
  },
  {
    name: 'Yoga Coaching',
    shortName: 'Coaching',
    to: 'yoga-coaching',
    image: 'yoga-coaching.jpg',
    imageAltText: '',
    buttons: [
      {
        text: 'Anfrage',
        link: `${mailtoMirkaHref}?subject=Coaching-Session&body=${coachingMailBody}`,
      },
    ],
    text: `
            <p>
              Du wünschst dir mehr Verbindung nach innen? Möchtest dir selbst wieder näherkommen,
              deine Gefühle bewusster wahrnehmen, verstehen – und dieses gefühlte Verständnis wirklich
              verkörpern?
            </p>
            <p>
              Dann lade ich dich herzlich ein, über deinen Körper einzutauchen. Ich begleite dich
              individuell und unterstütze dich dabei, deinen Weg zu dir selbst zu finden – ins Fühlen, in die
              Begegnung mit deinen Themen und in die Kraft, die in dir liegt.
            </p>
            <p>
              Denn oft braucht es mehr als Worte: Wenn wir nur über Themen sprechen, bleibt ein
              wichtiger Teil unberührt – dein Körper. Hier wohnen deine Gefühle, hier entstehen sie und oft
              sind sie festgehalten, ohne dass wir es bewusst wahrnehmen.
            </p>
            <p>
              In den 1:1 Sessions nutzen wir genau das, was dich unterstützt und gut tut: Yin Yoga,
              bewusste Atmung, Journaling, kreativer Ausdruck, ätherische Öle und Klang. Alles Praktiken,
              die dich begleiten, spüren und ausdrücken lassen.
            </p>
            <p>
              <i>Wir freuen uns darauf, deine Yoga-Coaching-Session ganz auf dich abzustimmen. Schreib
              uns gerne, was dir wichtig ist und wann es dir passt.</i>
            </p>
            <p>
              <i>Der Ausgleich für deine persönliche 1,5-stündige Yoga-Coaching-Session beträgt 175,- € inkl. 19 % MwSt.</i>
            </p>
    `,
  },
  {
    name: 'Chakra Clearing – tief&nbsp;|&nbsp;exclusiv&nbsp;|&nbsp;soulful',
    shortName: 'Chakra Clearing',
    to: 'chakra-clearing',
    image: 'chakra-clearing.jpg',
    imageAltText: '',
    text: `
            <p>
              Chakren sind Energiefelder, die Körper, Geist und Emotionen miteinander verbinden. Sie
              stehen in feiner Resonanz und in ständiger Wechselwirkung miteinander. Wenn eines ins
              Ungleichgewicht gerät, spüren wir das oft auf vielen Ebenen. Deine Energiefelder wünschen
              sich, in Balance und Harmonie zu sein, damit deine Lebensenergie frei fließen und dein
              Wohlbefinden gestärkt werden kann.
            </p>
            <p>
              Während einer Chakra Clearing Session werden Blockaden gelöst, sodass Energie wieder
              frei fließen kann und du einen Weg in mehr Wohlbefinden und Ausgeglichenheit findest.
            </p>
            <p>
              Ich begleite dich einfühlsam und individuell. In diesem Clearing schauen wir, wo ein
              Ungleichgewicht besteht und widmen uns diesen Bereichen voller Fürsorge.
            </p>
            <p>
              Mit sanften Yogaübungen, dem Klang der Peter Hess Therapieschalen, Heilsteinen,
              ätherischen Ölen und weiteren feinen Impulsen erschaffen wir einen Raum, in dem sich deine
              Energie wieder frei entfalten und bewegen kann.
            </p>
            <p>
              Je nachdem, was gerade ist, kann das Clearing auch Elemente des Loslassen und Reinigen
              beinhalten - sanft, unterstützend und persönlich für dich abgestimmt.
            </p>
            <p>Jede Sitzung ist einzigartig, magisch und tiefgehend.</p>
            <p>
              <i>Schreib mir gerne eine kurze Nachricht mit deinen Wünschen, Zielen und zeitlichen
              Möglichkeiten - so können wir dein persönliches Clearing planen.</i>
            </p>
            <p>
              <i>Der Ausgleich für eine intensive 2,5-stündige Chakra Clearing Session inkl. Vorgespräch,
              Durchführung und Integration für Körper, Geist und Seele liegt bei 330,- € inkl. 19 % MwSt.</i>
            </p>
    `,
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

    <nav class="navigation">
      <ol>
        <li v-for="item in yogaUndMehrItems" :key="item.to">
          <NuxtLink :to="'#' + item.to">{{ item.shortName }}</NuxtLink>
        </li>
      </ol>
    </nav>

    <ul class="u-margin-bottom-xxl">
      <li
        v-for="(item, index) in yogaUndMehrItems"
        :id="item.to"
        :key="item.to"
        class="yoga-list__item u-margin-bottom-xxl"
      >
        <h2 class="yoga-list__title" v-html="item.name"></h2>
        <NuxtImg
          :class="`yoga-list__image yoga-list__image--${index + 1}`"
          :src="`images/yoga-und-mehr-thumbnails/${item.image}`"
          :alt="item.imageAltText"
          width="768"
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

html {
  scroll-behavior: smooth;
}

.navigation {
  position: sticky;
  margin: 0 auto;
  background-color: white;
  opacity: 0.9;
  top: 0;
  overflow-x: auto;

  ol {
    padding: 16px;
    display: flex;
    justify-content: center;
    gap: 16px;

    li {
      text-wrap: nowrap;
    }
  }
}

.yoga-list {
  &__item {
    width: 768px;
    margin: 0 auto;
  }

  &__title {
    text-transform: uppercase;
    text-align: center;
    padding: variables.$space-xxl variables.$space-m variables.$space-m variables.$space-m;
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
  .navigation {
    ol {
      justify-content: normal;
    }
  }
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
