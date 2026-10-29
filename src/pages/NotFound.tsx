import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <article className="container doc">
      <div className="doc-card" style={{ textAlign: 'center' }}>
        <img src="/duck.png" alt="" width={120} />
        <h1 className="screen-title">Pagina niet gevonden</h1>
        <p>
          Deze pagina bestaat niet (meer). <Link to="/">Terug naar de homepage</Link>.
        </p>
      </div>
    </article>
  )
}
