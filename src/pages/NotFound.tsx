import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <article className="container prose">
      <h1>Pagina niet gevonden</h1>
      <p>
        Deze pagina bestaat niet (meer). <Link to="/">Terug naar de homepage</Link>.
      </p>
    </article>
  )
}
