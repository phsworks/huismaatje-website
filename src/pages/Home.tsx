import { Link } from 'react-router-dom'
import { site } from '../content/site'

// Eén kaart per tab van de app, in dezelfde kleur als die tab.
// Een kaart heeft een emoji of een icoon (afbeelding uit /public).
const features: { emoji?: string; icon?: string; tint: string; title: string; text: string }[] = [
  {
    emoji: '🏠',
    tint: 'tint-huis',
    title: 'Huis',
    text: 'Alle taken van het huis op één plek. Wijs ze toe en vink ze af, en stuur een huisgenoot een herinnering met 🔔.',
  },
  {
    emoji: '📅',
    tint: 'tint-kalender',
    title: 'Kalender',
    text: 'Per week of per maand zien wat er moet gebeuren. Vaste taken komen vanzelf op hun eigen dag terug.',
  },
  {
    emoji: '📊',
    tint: 'tint-overzicht',
    title: 'Overzicht',
    text: 'Wie doet wat? Bekijk de verdeling per categorie, de recente activiteit en wie er strepen heeft.',
  },
  {
    icon: '/duck.png',
    tint: 'tint-profiel',
    title: 'Jouw huismaatje',
    text: 'Je eigen eendje, met hoedjes en brillen. Laat je taken liggen, dan worden je eendje en jullie huis viezer. Houd ze allebei schoon!',
  },
]

// Drie stappen van downloaden tot de eerste afgevinkte taak.
const steps = [
  {
    title: 'Maak een huis',
    text: 'Je krijgt een 6-cijferige code. Deel die met je huisgenoten, dan zitten jullie binnen een minuut samen in de app.',
  },
  {
    title: 'Zet jullie vaste taken klaar',
    text: 'Kies uit voorstellen per categorie of maak je eigen taken. Geef elke taak een dag en een huisgenoot.',
  },
  {
    title: 'Vink af en houd het schoon',
    text: 'Afvinken kost één tik. Iedereen ziet direct wat er gedaan is en wat er nog openstaat.',
  },
]

// Kleinere features die niet bij één tab horen. Tint = categoriekleur uit de app.
const extras = [
  { emoji: '🔁', color: 'var(--cat-schoonmaken)', title: 'Terugkerende taken', text: 'Stofzuigen elke maandag, afval elke donderdag. Vaste taken komen vanzelf terug.' },
  { emoji: '🔔', color: 'var(--cat-afval)', title: 'Herinneringen', text: 'Stuur een huisgenoot een duwtje met een pushmelding, zonder dat iemand de zeurpiet hoeft te zijn.' },
  { emoji: '✏️', color: 'var(--cat-keuken)', title: 'Streepjes en straf', text: 'Taak niet gedaan op de dag zelf? Dan volgt een streepje. Jullie bepalen samen na hoeveel streepjes er een straf komt.' },
  { emoji: '🏆', color: 'var(--cat-was)', title: 'Ranglijst', text: 'Zie wie deze maand de meeste taken heeft gedaan. Een beetje competitie werkt verrassend goed.' },
  { emoji: '🎩', color: 'var(--cat-overig)', title: 'Eendje aankleden', text: 'Hoge hoed, piratenhoed, zonnebril of vlinderstrik: geef je eendje de beste looks.' },
]

const faq = [
  {
    q: 'Op welke telefoons werkt Huismaatje?',
    a: 'Op iPhone en Android. De app komt binnenkort in de App Store en Google Play.',
  },
  {
    q: 'Hoeveel huisgenoten kunnen er in één huis?',
    a: 'Zoveel als er in jullie huis wonen. Iedereen komt erbij met dezelfde 6-cijferige code.',
  },
  {
    q: 'Wat gebeurt er als ik mijn account verwijder?',
    a: 'Je profiel, je eendje en je plek in het huis worden verwijderd. Taken die je hebt afgevinkt blijven voor je huisgenoten zichtbaar, zonder je naam.',
  },
]

// Seconde in mockup.mp4 waarop de telefoon stilstaat (zie .phone-video in index.css).
const VIDEO_START = 7

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="pill">🚀 Binnenkort in de App Store en Google Play</p>
            <h1>Samen voor een schoner huis.</h1>
            <p className="lead">
              {site.name} verdeelt de huishoudtaken eerlijk tussen huisgenoten. Laat je
              taken liggen? Dan wordt jullie huis viezer, en je eendje ook. Houd je eendje en
              je huis schoon!
            </p>
            <div className="actions">
              <a className="button" href={`mailto:${site.contactEmail}?subject=Houd me op de hoogte`}>
                Houd me op de hoogte
              </a>
              <Link className="button button-ghost" to="/support">
                Vragen?
              </Link>
            </div>
          </div>
          <div className="hero-art">
            <img className="sun" src="/sun.png" alt="" />
            <img className="house" src="/house.png" alt="Een opgeruimd huisje" />
            <img className="duck" src="/duck.png" alt="" />
          </div>
        </div>
      </section>

      <section className="container features-section">
        <p className="section-label">Wat zit erin</p>
        <div className="features">
          {features.map((f) => (
            <article key={f.title} className={`feature ${f.tint}`}>
              <div className="emoji-box" aria-hidden>
                {f.icon ? <img src={f.icon} alt="" /> : f.emoji}
              </div>
              <h2 className="card-title">{f.title}</h2>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container preview-section">
        <div className="preview-card">
          <div className="phone-video">
            {/* De eerste seconden zoomt de telefoon in; die slaan we over, ook bij herhalen. */}
            <video
              src={`/mockup.mp4#t=${VIDEO_START}`}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={(e) => {
                e.currentTarget.currentTime = VIDEO_START
                void e.currentTarget.play()
              }}
              aria-label="Video van de Huismaatje-app op een telefoon"
            />
          </div>
          <div>
            <p className="section-label">Zo ziet het eruit</p>
            <h2>Alles van het huis op één scherm.</h2>
            <p>
              Bovenaan jullie huis, daaronder de taken van deze week. Wie wat moet doen en
              wanneer, zie je in één oogopslag. Afvinken kost één tik, en je huisgenoten
              zien het meteen.
            </p>
          </div>
        </div>
      </section>

      <section className="container steps-section">
        <p className="section-label">Zo werkt het</p>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-number">{i + 1}</span>
              <h2 className="card-title">{s.title}</h2>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container extras-section">
        <p className="section-label">En nog meer</p>
        <div className="extras">
          {extras.map((e) => (
            <article key={e.title} className="extra">
              <div className="emoji-box" style={{ background: e.color }} aria-hidden>
                {e.emoji}
              </div>
              <div>
                <h2 className="card-title">{e.title}</h2>
                <p>{e.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container duck-section">
        <div className="duck-card">
          <div className="duck-stage">
            <img src="/duck.png" alt="Het Huismaatje-eendje" />
          </div>
          <div>
            <p className="section-label">Jouw huismaatje</p>
            <h2>Houd je eendje en je huis schoon.</h2>
            <p>
              Elke huisgenoot heeft een eigen eendje. Laat je je taken te lang liggen, dan
              krijgt je eend vlekken, krijg je een streepje en wordt het huis viezer voor
              al je huisgenoten. Vink je ze af, dan zijn je eendje en het huis weer
              helemaal schoon.
            </p>
          </div>
        </div>
      </section>

      <section className="container faq-section">
        <p className="section-label">Veelgestelde vragen</p>
        <div className="faq">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
        <p className="muted">
          Staat je vraag er niet bij? Kijk op de <Link to="/support">supportpagina</Link>.
        </p>
      </section>
    </>
  )
}
