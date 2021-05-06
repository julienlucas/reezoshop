import graphQLQuery from '../utils/graphql';
import getAds from './.graphql';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import useShop from '../hooks/useShop';
import Vehicules from '../components/Home/Vehicules';
import Constructeurs from '../components/Home/Constructeurs';
import Promos from '../components/Home/Promos';
import Map from '../components/Home/Map';
import Interlocuteurs from '../components/Home/Interlocuteurs';
import Pourquoi from '../components/Home/Pourquoi';
import FAQS from '../components/Home/FAQS';

const getAdsQuery = getAds.loc.source.body;

function HomePage({ cars, data, shop }) {
  const shopFromContext = useShop();
  // console.log('shopFromContext', shopFromContext);
  // console.log(shop.subDomain);
  // console.log(shopFromContext.subDomain);
  const agence = data.agencies[shopFromContext.subdomain];

  return (
    <Layout nav={data.nav} phone={agence.phone} headline={agence.headline} home>
      <Vehicules cars={cars} subHeadline={agence.subHeadline} />
      <Constructeurs constructeurs={data.constructeurs} />
      <Promos subHeadline={agence.subHeadline} />
      <Map data={agence} />
      <Interlocuteurs interlocuteurs={data.interlocuteurs} />
      <Pourquoi data={data.pourquoi} />
      <FAQS faqs={data.faqs} />
    </Layout>
  );
};

HomePage.getInitialProps = async ({ shop }) => {
  const initialQueryParams = {
    queryParams: {
      size: 12
    }
  };

  let data;
  let cars;
  try {
    data = await mockData;
    cars = await graphQLQuery(getAdsQuery, initialQueryParams);
  } catch (err) {

  }

  cars = cars.ads.ads;
  return { data, cars, shop };
};

HomePage.propTypes = {
  // cars: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  shop: PropTypes.object.isRequired
};

export default HomePage;

const mockData = {
  nav: [
    { value: 'lille', label: 'Agence Boulogne-Billacourt' },
    { value: 'bordeaux', label: 'Agence Bordeaux' },
    { value: 'marseille', label: 'Agence Marseille' }
  ],
  agencies: {
    'lille': {
      headline: 'Reezocar Lille - Seclin',
      subHeadline: 'agence Lilloise',
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
    'bordeaux': {
      headline: 'Reezocar Bordeaux',
      subHeadline: 'agence Bordelaise',
      description: '',
      adresse: '11 Rue du des lumières, 33200 Bordeaux',
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
      googleAvis: '112',
      googleNote: '4,3'
    },
    'marseille': {
      headline: 'Reezocar Marseille',
      subHeadline: 'agence Marseillaise',
      description: '',
      adresse: '32 Rue saint Antoine, 13000 Marseille',
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
      googleAvis: '51',
      googleNote: '4,2'
    }
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