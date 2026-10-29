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
  // TODO(human): vul de gegevens in die de Huismaatje-app echt verwerkt
]

// Externe partijen die (een deel van) de gegevens verwerken.
export const processors: { name: string; role: string }[] = [
  { name: 'Vercel', role: 'Hosting van deze website' },
]
