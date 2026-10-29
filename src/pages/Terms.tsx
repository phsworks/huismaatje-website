import { Link } from 'react-router-dom'
import { site } from '../content/site'

export default function Terms() {
  return (
    <article className="container doc">
      <header className="doc-head">
        <h1 className="screen-title">Gebruiksvoorwaarden</h1>
        <p className="muted">Laatst bijgewerkt: {site.legalUpdated}</p>
      </header>
      <div className="doc-card">

      <h2>1. Over deze voorwaarden</h2>
      <p>
        Deze voorwaarden gelden voor het gebruik van de app en website van {site.name}.
        Door de app te gebruiken ga je akkoord met deze voorwaarden.
      </p>

      <h2>2. Je account</h2>
      <p>
        Je bent zelf verantwoordelijk voor je inloggegevens en voor wat er met je
        account gebeurt. Merk je misbruik op? Laat het ons direct weten.
      </p>

      <h2>3. Normaal gebruik</h2>
      <p>
        Gebruik de app niet om anderen lastig te vallen, voor illegale doeleinden of
        om de werking van de dienst te verstoren. Bij misbruik kunnen we je account
        blokkeren.
      </p>

      <h2>4. Beschikbaarheid</h2>
      <p>
        We doen ons best om de app altijd beschikbaar te houden, maar kunnen dat niet
        garanderen. Functies kunnen veranderen of verdwijnen.
      </p>

      <h2>5. Aansprakelijkheid</h2>
      <p>
        {site.name} is niet aansprakelijk voor indirecte schade die ontstaat door
        het gebruik van de app, voor zover de wet dat toestaat.
      </p>

      <h2>6. Privacy</h2>
      <p>
        Hoe we met je gegevens omgaan, lees je in onze{' '}
        <Link to="/privacy">privacyverklaring</Link>.
      </p>

      <h2>7. Contact</h2>
      <p>
        Vragen over deze voorwaarden? Mail naar{' '}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
      </div>
    </article>
  )
}
