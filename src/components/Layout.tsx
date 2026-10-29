import { Link, NavLink, Outlet } from 'react-router-dom'
import { site } from '../content/site'

export default function Layout() {
  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <img src="/apple-touch-icon.png" alt="" width={34} height={34} />
            {site.name}
          </Link>
          <nav className="nav">
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {site.company}</span>
          <nav className="footer-nav">
            <Link to="/privacy">Privacyverklaring</Link>
            <Link to="/voorwaarden">Gebruiksvoorwaarden</Link>
            <Link to="/support">Support</Link>
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
