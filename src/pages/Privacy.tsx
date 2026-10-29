import { site } from '../content/site'
import { dataCategories, processors } from '../content/privacyData'

export default function Privacy() {
  return (
    <article className="container doc">
      <header className="doc-head">
        <h1 className="screen-title">Privacyverklaring</h1>
        <p className="muted">Laatst bijgewerkt: {site.legalUpdated}</p>
      </header>
      <div className="doc-card">

      <p>
        {site.name} vindt jouw privacy belangrijk. In deze verklaring lees je welke
        gegevens we verwerken als je onze app of website gebruikt, waarom we dat doen
        en welke rechten je hebt.
      </p>

      <h2>Wie zijn wij?</h2>
      <p>
        {site.company} is verantwoordelijk voor de verwerking van je persoonsgegevens.
        {site.address && <> Ons adres is {site.address}.</>}
        {site.kvk && <> KvK-nummer: {site.kvk}.</>} Je bereikt ons via{' '}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>

      <h2>Welke gegevens verwerken we?</h2>
      {dataCategories.length === 0 ? (
        <p className="empty">📋 Dit overzicht wordt binnenkort aangevuld.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Gegevens</th>
                <th>Doel</th>
                <th>Grondslag</th>
                <th>Bewaartermijn</th>
              </tr>
            </thead>
            <tbody>
              {dataCategories.map((c) => (
                <tr key={c.data}>
                  <td>{c.data}</td>
                  <td>{c.purpose}</td>
                  <td>{c.legalBasis}</td>
                  <td>{c.retention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2>Met wie delen we gegevens?</h2>
      <p>
        We verkopen je gegevens nooit. We schakelen alleen partijen in die ons helpen
        de dienst te leveren, en sluiten met hen een verwerkersovereenkomst:
      </p>
      <ul>
        {processors.map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong>: {p.role}
          </li>
        ))}
      </ul>

      <h2>Cookies</h2>
      <p>
        Deze website gebruikt geen tracking- of advertentiecookies. Alleen technisch
        noodzakelijke opslag wordt gebruikt.
      </p>

      <h2>Beveiliging</h2>
      <p>
        We nemen passende technische en organisatorische maatregelen om je gegevens te
        beschermen, zoals versleutelde verbindingen (HTTPS) en beperkte toegang.
      </p>

      <h2>Jouw rechten</h2>
      <p>Op grond van de AVG heb je het recht om:</p>
      <ul>
        <li>je gegevens in te zien;</li>
        <li>onjuiste gegevens te laten corrigeren;</li>
        <li>je gegevens te laten verwijderen (inclusief je hele account);</li>
        <li>bezwaar te maken tegen of de verwerking te laten beperken;</li>
        <li>je gegevens over te laten dragen;</li>
        <li>gegeven toestemming in te trekken.</li>
      </ul>
      <p>
        Stuur je verzoek naar <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        We reageren binnen een maand. Ben je niet tevreden over hoe we met je gegevens
        omgaan? Dan kun je een klacht indienen bij de{' '}
        <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noreferrer">
          Autoriteit Persoonsgegevens
        </a>
        .
      </p>

      <h2>Wijzigingen</h2>
      <p>
        We kunnen deze verklaring aanpassen als de app verandert. De datum bovenaan
        laat zien wanneer dat voor het laatst is gebeurd.
      </p>
      </div>
    </article>
  )
}
