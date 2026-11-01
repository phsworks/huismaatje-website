import { Link } from 'react-router-dom'
import { site } from '../content/site'

export default function Support() {
  return (
    <article className="container doc">
      <header className="doc-head">
        <h1 className="screen-title">Support</h1>
      </header>
      <div className="doc-card">
        <h2>💬 Vraag of probleem?</h2>
        <p>
          Loop je ergens tegenaan in de app, of heb je een vraag? Mail ons op{' '}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. We reageren
          meestal binnen twee werkdagen.
        </p>

        <h2>🏠 Bij een huis komen</h2>
        <p>
          Vraag een huisgenoot om de 6-cijferige code van jullie huis. Die kan de code
          in de app direct kopiëren of delen, bijvoorbeeld via WhatsApp. Kies bij het
          aanmelden voor "Huis joinen" en vul de code in.
        </p>

        <h2>🔔 Ik krijg geen meldingen</h2>
        <p>
          Ga in de app naar je profiel. Bij <strong>Meldingen</strong> zie je of ze aan
          staan; tik erop om naar de instellingen van je telefoon te gaan. Bij{' '}
          <strong>Koppeling met server</strong> zie je of je telefoon goed gekoppeld is.
          Staat daar een foutmelding? Tik erop om opnieuw te koppelen, of stuur ons een
          screenshot.
        </p>

        <h2>🧭 Rondleiding opnieuw bekijken</h2>
        <p>
          Kwijt waar alles zit? In je profiel staat <strong>Rondleiding opnieuw
          bekijken</strong>, een korte uitleg van elke tab.
        </p>

        <h2>🗑️ Account verwijderen</h2>
        <p>
          Je kunt je account zelf verwijderen in de app: ga naar je profiel en kies
          onderaan <strong>Account verwijderen</strong>. Je profiel, je eendje en je
          plek in het huis worden dan direct verwijderd. Afgevinkte taken blijven voor
          je huisgenoten zichtbaar, zonder je naam.
        </p>
        <p>
          Kom je niet meer in de app? Stuur dan een mail naar{' '}
          <a href={`mailto:${site.contactEmail}?subject=Account verwijderen`}>{site.contactEmail}</a>{' '}
          vanaf het e-mailadres waarmee je bent geregistreerd. We verwijderen je
          gegevens binnen 30 dagen. Lees meer in onze <Link to="/privacy">privacyverklaring</Link>.
        </p>
      </div>
    </article>
  )
}
