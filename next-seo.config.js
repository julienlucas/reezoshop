const description = "Concessionnaire en ligne spécialiste de l'achat et la vente de voitures d'occasion"

const SEO = {
  title: `${description} | Meilleure reprise`,
  description,
  canonical: 'https://meilleure-reprise.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://meilleure-reprise.com',
    title: 'Meilleure-reprise.com',
    description,
    images: [
      {
        url: 'https://assets.reezocar.com/statics/img/leaderboard-home-H500.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second',
      }
    ],
    site_name: 'Meilleure-reprise.com',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  }
}

export default SEO
