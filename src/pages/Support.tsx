import { Link } from 'react-router-dom'
import { site } from '../content/site'

export default function Support() {
  return (
    <article className="container prose">
      <h1>Support</h1>
      <p>
        Loop je ergens tegenaan in de app, of heb je een vraag? Mail ons op{' '}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. We reageren
        meestal binnen twee werkdagen.
      </p>

      <h2>Account verwijderen</h2>
      <p>
        Je kunt je account en alle bijbehorende gegevens laten verwijderen door een
        mail te sturen naar <a href={`mailto:${site.contactEmail}?subject=Account verwijderen`}>{site.contactEmail}</a>{' '}
        vanaf het e-mailadres waarmee je bent geregistreerd. We verwijderen je
        gegevens binnen 30 dagen. Lees meer in onze <Link to="/privacy">privacyverklaring</Link>.
      </p>
    </article>
  )
}
