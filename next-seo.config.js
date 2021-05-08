const description = "Concessionnaire en ligne spécialiste de l'achat et la vente de voitures d'occasion";
const title = `ReezoShop | ${description}`;

const SEO = {
  canonical: 'https://www.reezoshop.com',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.reezoshop.com',
    title,
    description,
    images: [
      {
        url: 'https://assets.reezocar.com/statics/img/leaderboard-home-H500.jpg',
        width: 900,
        height: 800,
        alt: description,
      }
    ],
    site_name: 'reezoshop.com',
  },
  twitter: {
    handle: '@Reezocar',
    site: '@Reezocar',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
  {
    content: 'width=device-width, initial-scale=1',
    name: 'viewport'
  },
  {
    content: 'IE=edge',
    httpEquiv: 'X-UA-Compatible'
  }, {
    name: 'msapplication-TileImage',
    content: 'favicons/mstile-150x150.png'
  }, {
    name: 'msapplication-TileColor',
    content: '#f29301'
  }, {
    name: 'theme-color',
    content: '#f29301'
  }],
  additionalLinkTags: [
    {
      href: 'https://fonts.gstatic.com/',
      rel: 'preconnect',
      crossOrigin: ''
    },
    {
      href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:wght@400,500,600,700,800&display=swap',
      rel: 'stylesheet'
    },
    {
      href: 'favicons/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '192x192',
    },
    {
      href: 'favicons/favicon-32x32.png',
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png'
    },
    {
      href: 'favicons/favicon-16x16.png',
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png'
    },
    {
      href: 'favicons/favicon-16x16.png',
      rel: 'shortcut icon'
    },
    {
      href: 'favicons/favicon.ico',
      rel: 'icon',
    },
    {
      href: 'favicons/safari-pinned-tab.png',
      color: '#f29301',
      type: 'mask-icon'
    }
  ]
};

export default SEO;
