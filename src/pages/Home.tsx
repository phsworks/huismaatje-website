import { Link } from 'react-router-dom'
import { site } from '../content/site'

const features = [
  {
    title: 'Samen regelen',
    text: 'Taken, boodschappen en afspraken op één plek, zodat iedereen weet wat er speelt.',
  },
  {
    title: 'Altijd overzicht',
    text: 'Zie in één oogopslag wat er deze week moet gebeuren en wie wat doet.',
  },
  {
    title: 'Veilig en privé',
    text: 'Je gegevens blijven van jou. We verkopen niets door en vragen alleen wat nodig is.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Binnenkort beschikbaar</p>
          <h1>Jouw maatje in huis.</h1>
          <p className="lead">
            {site.name} is de app die het dagelijks leven thuis makkelijker maakt.
            We werken hard aan de eerste versie.
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
      </section>

      <section className="container features">
        {features.map((f) => (
          <article key={f.title} className="card">
            <h2>{f.title}</h2>
            <p>{f.text}</p>
          </article>
        ))}
      </section>
    </>
  )
}
