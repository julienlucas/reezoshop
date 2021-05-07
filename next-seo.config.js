const description = "Concessionnaire en ligne spécialiste de l'achat et la vente de voitures d'occasion"

const SEO = {
  title: `${description} | ReezoShop`,
  description,
  canonical: 'https://www.reezocar.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.reezocar.com',
    title: 'https://www.reezocar.com',
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
    handle: '@Reezocar',
    site: '@Reezocar',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [{
    content: 'IE=edge',
    httpEquiv: 'X-UA-Compatible'
  }, {
    name: 'msapplication-config',
    content: '/favicons/browserconfig.xml'
  }, {
    name: 'msapplication-TileColor',
    content: '#f29301'
  }, {
    name: 'theme-color',
    content: '#f29301'
  }],
  additionalLinkTags: [
    {
      content: 'width=device-width, initial-scale=1',
      name: 'viewport'
    },
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      href: '/favicons/site.webmanifest',
      rel: 'manifest'
    },
    {
      href: '/favicons/favicon-16x16.png',
      rel: 'shortcut icon'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com/',
      crossOrigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:wght@400,500,600,700,800&display=swap'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '192x192',
      href: '/favicons/apple-touch-icon.png'
    },
    {
      href: '/favicons/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png'
    },
    {
      href: '/favicons/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png'
    },
    {
      href: '/favicons/safari-pinned-tab.png',
      color: '#f29301',
      type: 'mask-icon'
    }
  ]
};

export default SEO;
