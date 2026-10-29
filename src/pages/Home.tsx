import { Link } from 'react-router-dom'
import { site } from '../content/site'

// Eén kaart per tab van de app, in dezelfde kleur als die tab.
const features = [
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
    emoji: '🐥',
    tint: 'tint-profiel',
    title: 'Maatje',
    text: 'Je eigen eendje, met hoedjes en brillen. Zie je eigen taken en hoeveel je deze maand hebt gedaan.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="pill">🚀 Binnenkort in de App Store en Google Play</p>
            <h1>Een schoon huis, samen.</h1>
            <p className="lead">
              {site.name} verdeelt de huishoudtaken eerlijk tussen huisgenoten. Laat je
              taken liggen? Dan wordt je eendje steeds viezer.
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
            <img className="house" src="/house.webp" alt="Een opgeruimd huisje" />
            <img className="duck" src="/duck.png" alt="" />
          </div>
        </div>
      </section>

      <section className="container features-section">
        <p className="section-label">Wat zit erin</p>
        <div className="features">
          {features.map((f) => (
            <article key={f.title} className={`feature ${f.tint}`}>
              <div className="emoji-box" aria-hidden>{f.emoji}</div>
              <h2 className="card-title">{f.title}</h2>
              <p>{f.text}</p>
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
            <h2>Hoe meer je laat liggen, hoe viezer je eend.</h2>
            <p>
              Elke huisgenoot heeft een eigen eendje. Laat je je taken te lang liggen, dan
              krijgt je eend vlekken en krijg je een streepje. Vink je ze af, dan is hij
              weer helemaal schoon.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
