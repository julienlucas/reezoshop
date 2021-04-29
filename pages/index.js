import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import Vehicules from '../components/Home/Vehicules';
import Constructeurs from '../components/Home/Constructeurs';
import Promos from '../components/Home/Promos';
import Map from '../components/Home/Map';
import Interlocuteurs from '../components/Home/Interlocuteurs';
import Pourquoi from '../components/Home/Pourquoi';
import FAQS from '../components/Home/FAQS';
import useShop from '../hooks/useShop';

function HomePage({ data, shop }) {
  const shopFromContext = useShop();
  console.log('shopFromContext', shopFromContext);
  console.log(shop.subDomain);
  console.log(shopFromContext.subDomain);

  return (
    <Layout nav={data.nav} phone={data.head.phone} headline={data.head.headline} home>
      <Vehicules cars={data.cars} />
      <Constructeurs constructeurs={data.constructeurs} />
      <Promos />
      <Map data={data.head} />
      <Interlocuteurs interlocuteurs={data.interlocuteurs} />
      <Pourquoi data={data.pourquoi} />
      <FAQS faqs={data.faqs} />
    </Layout>
  );
};

HomePage.getInitialProps = async ({ shop }) => {
   const data = await mockData

   return { data, shop };
};

HomePage.propTypes = {
   data: PropTypes.object.isRequired,
   shop: PropTypes.object.isRequired
};

export default HomePage;

const mockData = {
  nav: [
    { value: 'Lille', label: 'Lille' },
    { value: 'Bordeaux', label: 'Bordeaux' },
    { value: 'Marseille', label: 'Marseille' }
  ],
  head: {
    headline: 'Reezocar Lille - Seclin',
    description: '',
    adresse: '11 Rue du Clauwiers, 59113 Seclin',
    horaires: {
      Lundi: ['09:00 : 18:00'],
      Mardi: ['09:00 : 18:00'],
      Mercredi: ['09:00 : 18:00'],
      Jeudi: ['09:00 : 18:00'],
      Vendredi: ['09:00 : 18:00'],
      Samedi: ['09:00 : 18:00'],
      Dimanche: 'Fermé',
    },
    phone: '0142536529',
    googleAvis: '891',
    googleNote: '4,2'
  },
  cars: {
    'occasions': [
      {
        marque: 'Peugeot',
        modele: '208 II GT Line',
        complementInfos: 'couleur jaune avec GPS intégré',
        photos: [
          '/images/peugeot-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '27076',
        prix: '24890',
        neuf: false
      },
      {
        marque: 'Porsche',
        modele: 'Cayenne',
        complementInfos: 'Turbo-Techart-640P Panorama-LED-NP204T',
        photos: [
          '/images/porsche.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      },
      {
        titre: 'Peugeot',
        modele: '208 GT Line',
        complementInfos: 'PureTech 130 S et EAT8 + To...',
        photos: [
          '/images/peugeot-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2020',
        kilometrage: '31076',
        prix: '21890',
        neuf: false
      }
    ],
    'neufs': [
      {
        titre: 'Land Rover',
        modele: 'Range Rover',
        complementInfos: 'Evoque 2010 blanche TDI',
        photos: [
          '/images/land-rover-evoque-1.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2010',
        kilometrage: '31076',
        prix: '22340',
        neuf: true
      },
      {
        titre: 'Land Rover',
        modele: 'Range Rover',
        complementInfos: 'Evoque 2020 Noir + GPS + Bluetootk',
        photos: [
          '/images/land-rover-evoque-2.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2010',
        kilometrage: '43076',
        prix: '34340',
        neuf: true
      },
      {
        titre: 'Land Rover',
        modele: 'Range Rover',
        complementInfos: 'Evoque 2010 blanche TDI',
        photos: [
          '/images/land-rover-evoque-3.png'
        ],
        boite: 'Automatique',
        energie: 'Essence',
        annee: '2010',
        kilometrage: '54076',
        prix: '32120',
        neuf: true
      }
    ]
  },
  'constructeurs': [
    {
      nom: 'Renault',
    },
    {
      nom: 'Peugeot',
    },
    {
      nom: 'Audi',
    },
    {
      nom: 'Volkswagen',
    },
    {
      nom: 'Ford',
    },
    {
      nom: 'BMW',
    }
  ],
  'interlocuteurs': [
    {
      nom: 'Teddy',
      jobTitle: 'Customer Success manager',
      picture: '/images/teddy.png'
    },
    {
      nom: 'Marine',
      jobTitle: 'Head of Business & Marketing',
      picture: '/images/marine.png'
    },
    {
      nom: 'Erlé',
      jobTitle: 'Acquistion & Digital Performance Manager',
      picture: '/images/erle.png'
    },
    {
      nom: 'Jonathan',
      jobTitle: 'Head of Sales',
      picture: '/images/jonathan.png'
    }
  ],
  pourquoi: {
    recoPourcents: '94',
    economiesPourcents: '15',
    clientsSatisfaits: '10k',
    facebook: {
      note: '4.1',
      avis: '236'
    },
    google: {
      note: '4.2',
      avis: '570'
    }
  },
  faqs: [
    'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
    'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
    'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
    'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
    'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?'
  ]
};