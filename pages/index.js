import graphQLQuery from '../utils/graphql';
import getAds from './.graphql';
import { homePropTypes } from '../constants/home-proptypes';
import Layout from '../components/Layout';
import { NextSeo } from 'next-seo';
import { ReactSlickStyles } from '../constants/react-slick-style';
import SEO from '../next-seo.config';
import useShop from '../hooks/useShop';
import Advisors from '../components/Home/Advisors';
import Brands from '../components/Home/Brands';
import FAQS from '../components/Home/FAQS';
import Map from '../components/Home/Map';
import Models from '../components/Home/Models';
import Offers from '../components/Home/Offers';
import Why from '../components/Home/Why';

const getAdsQuery = getAds.loc.source.body;

const HomePage = ({ data, newCars, oldCars, shop }) => {
  const shopFromContext = useShop();
  // console.log('shopFromContext', shopFromContext);
  // console.log(shop.subDomain);
  // console.log(shopFromContext.subDomain);
  const agence = data.agencies[shopFromContext.subdomain];
  const cityShop = shopFromContext.subdomain;

  return (
    <Layout cityShop={cityShop} heroComp={true} nav={data.nav} phone={agence.phone} headline={agence.headline} home>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
      />
      <Models newCars={newCars} oldCars={oldCars} subHeadline={agence.subHeadline} />
      <Brands brands={data.brands} />
      <Offers subHeadline={agence.subHeadline} />
      <Map data={agence} />
      <Advisors advisors={data.advisors} />
      <Why data={data.pourquoi} />
      <FAQS faqs={data.faqs} />
      <ReactSlickStyles />
    </Layout>
  );
};

HomePage.getInitialProps = async ({ shop }) => {
  let data;
  let newCars;
  let oldCars;
  const paramsNewCars = {queryParams: { size: 3, onlyNew: true }};
  const paramsOldCars = {queryParams: { size: 3, onlyNew: false }};

  try {
    data = await mockData;
    newCars = await graphQLQuery(getAdsQuery, paramsNewCars);
    oldCars = await graphQLQuery(getAdsQuery, paramsOldCars);
  } catch (err) {

  }

  newCars = newCars.ads.ads;
  oldCars = oldCars.ads.ads;
  return { data, newCars, oldCars, shop };
};

HomePage.propTypes = homePropTypes;

export default HomePage;

const mockData = {
  nav: [
    { value: 'lille', label: 'Agence Boulogne-Billancourt' },
    { value: 'bordeaux', label: 'Agence Bordeaux' },
    { value: 'marseille', label: 'Agence Marseille' }
  ],
  agencies: {
    'lille': {
      headline: 'Reezocar Lille - Seclin',
      subHeadline: 'agence Lilloise',
      description: '',
      address: '11 Rue du Clauwiers, 59113 Seclin',
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
      address: '11 Rue du des lumières, 33200 Bordeaux',
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
      address: '32 Rue saint Antoine, 13000 Marseille',
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
  'brands': [
    {
      nom: 'Renault',
      picture: 'icons/renault.svg'
    },
    {
      nom: 'Peugeot',
      picture: 'icons/peugeot.svg'
    },
    {
      nom: 'Audi',
      picture: 'icons/audi.svg'
    },
    {
      nom: 'Volkswagen',
      picture: 'icons/volkswagen.svg'
    },
    {
      nom: 'Ford',
      picture: 'icons/ford.svg'
    },
    {
      nom: 'BMW',
      picture: 'icons/bmw.svg'
    }
  ],
  'advisors': [
    {
      nom: 'Teddy',
      jobTitle: 'Customer Success manager',
      picture: 'images/teddy.png'
    },
    {
      nom: 'Marine',
      jobTitle: 'Head of Business & Marketing',
      picture: 'images/marine.png'
    },
    {
      nom: 'Erlé',
      jobTitle: 'Acquistion & Digital Performance Manager',
      picture: 'images/erle.png'
    },
    {
      nom: 'Jonathan',
      jobTitle: 'Head of Sales',
      picture: 'images/jonathan.png'
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