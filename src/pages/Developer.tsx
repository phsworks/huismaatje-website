import { Link } from 'react-router-dom'
import { site } from '../content/site'

// Bestemming van "Over de ontwikkelaar" in de profielinstellingen van de app.
export default function Developer() {
  return (
    <article className="container doc">
      <header className="doc-head">
        <h1 className="screen-title">Over de ontwikkelaar</h1>
      </header>
      <div className="doc-card">
        <div className="dev-intro">
          <img src="/duck.png" alt="" width={72} height={72} />
          <p>
            {site.name} is gemaakt
            {site.developer ? <> door <strong>{site.developer}</strong></> : ' door één ontwikkelaar'}
            . Geen groot bedrijf, maar een klein, onafhankelijk project.
          </p>
        </div>

        <h2>🧽 Waarom Huismaatje?</h2>
        {/* TODO(human) */}

        <h2>🛠️ Hoe het gemaakt is</h2>
        <p>
          De app is gebouwd met React Native en Expo, zodat hij op iPhone en Android
          werkt. Inloggen loopt via Clerk, en jullie huis en taken staan in een
          beveiligde database. Meer daarover lees je in de{' '}
          <Link to="/privacy">privacyverklaring</Link>.
        </p>

        <h2>💌 Feedback</h2>
        <p>
          Mis je iets, gaat er iets mis of heb je een idee voor een nieuw hoedje voor
          je eendje? Mail naar <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          Elk bericht wordt gelezen.
        </p>
      </div>
    </article>
  )
}
