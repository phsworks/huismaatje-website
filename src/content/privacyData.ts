// Welke persoonsgegevens de app verwerkt. De privacypagina bouwt
// hier automatisch de tabel uit, dus je hoeft alleen deze lijst bij te houden.
export type DataCategory = {
  // Wat verzamelen we, bv. "Naam en e-mailadres"
  data: string
  // Waarvoor gebruiken we het
  purpose: string
  // AVG-grondslag
  legalBasis: 'toestemming' | 'overeenkomst' | 'wettelijke verplichting' | 'gerechtvaardigd belang'
  // Hoe lang bewaren we het
  retention: string
}

export const dataCategories: DataCategory[] = [
  {
    data: 'Naam en e-mailadres',
    purpose: 'Je account aanmaken, inloggen en je naam tonen aan je huisgenoten',
    legalBasis: 'overeenkomst',
    retention: 'Tot je je account verwijdert',
  },
  {
    data: 'Huis- en taakgegevens (je huis, taken, afgevinkte taken, streepjes en je eendje)',
    purpose: 'De taken in jullie huis verdelen, bijhouden en tonen',
    legalBasis: 'overeenkomst',
    retention: 'Tot je je account verwijdert; afgevinkte taken blijven zonder je naam zichtbaar voor je huisgenoten',
  },
  {
    data: 'Pushmeldingstoken van je toestel',
    purpose: 'Herinneringen en meldingen naar je telefoon sturen',
    legalBasis: 'toestemming',
    retention: 'Tot je meldingen uitzet of je account verwijdert',
  },
]

// Externe partijen die (een deel van) de gegevens verwerken.
export const processors: { name: string; role: string }[] = [
  { name: 'Clerk', role: 'Inloggen en accountbeheer (naam en e-mailadres)' },
  { name: 'Neon', role: 'Database waarin je huis- en taakgegevens worden opgeslagen' },
  { name: 'Vercel', role: 'Hosting van de server (API) van de app' },
  { name: 'Expo', role: 'Versturen van pushmeldingen' },
  { name: 'Netlify', role: 'Hosting van deze website' },
]
