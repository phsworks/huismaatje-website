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
            {site.developer ? (
              <>
                {' '}door{' '}
                <strong>
                  {site.developerUrl
                    ? <a href={site.developerUrl} target="_blank" rel="noopener noreferrer">{site.developer}</a>
                    : site.developer}
                </strong>
              </>
            ) : ' door één ontwikkelaar'}
            , vanuit een probleem dat iedereen in een studentenhuis of gedeeld huis
            wel kent.
          </p>
        </div>

        <h2>🧽 Waarom Huismaatje?</h2>
        <p>
          Wie doet deze week de wc? Wie bracht als laatste het glas weg? In veel huizen
          wordt dat bijgehouden op een whiteboard in de gang, een schema op de koelkast
          of een appgroep waarin berichten snel ondersneeuwen. Dat werkt, totdat de stift
          opdroogt, iemand het vergeet of niemand meer weet wie er aan de beurt was.
        </p>
        <p>
          {site.name} is ontstaan om dat beter te doen. Taken verdelen, bijhouden wie
          wat heeft gedaan en elkaar eraan herinneren gebeurt in de app, en op een
          leuke, interactieve manier: met een eigen eendje dat vies wordt als je taken
          blijft liggen, hoedjes om het aan te kleden en een ranglijst voor een beetje
          gezonde competitie. Zo voelt het huishouden minder als een klus en meer als
          iets wat je samen doet.
        </p>

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
        {site.developerUrl && (
          <p>
            Benieuwd naar ander werk van {site.developer}? Kijk op{' '}
            <a href={site.developerUrl} target="_blank" rel="noopener noreferrer">
              {site.developerUrl.replace(/^https?:\/\//, '')}
            </a>.
          </p>
        )}
      </div>
    </article>
  )
}
