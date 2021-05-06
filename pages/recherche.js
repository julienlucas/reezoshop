import graphQLQuery from '../utils/graphql';
import getAds from './.graphql';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import SearchWrapper from '../components/Search/SearchWrapper';
import useShop from '../hooks/useShop';
import React, { useEffect, useState } from 'react';

const getAdsQuery = getAds.loc.source.body;

function Search({ data, search, shop }) {
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState([]);
  const shopFromContext = useShop();
  const agence = data.agencies[shopFromContext.subdomain];
  const cityShop = shopFromContext.subdomain;

  const onLoadMore = async nbrCars => {
    const queryParams = {
      queryParams: {
        size: nbrCars
      }
    };
    const newSearch = await graphQLQuery(getAdsQuery, queryParams);
    setCars(newSearch.ads.ads);
  };

  useEffect(() => {
    setCount(search.ads.count);
  }, [count])

  useEffect(() => {
    setCars(search.ads.ads);
  }, [search])

  return (
    <Layout nav={data.nav} phone={agence.phone}>
      <SearchWrapper cars={cars} cityShop={cityShop} count={count} onLoadMore={nbrCars => onLoadMore(nbrCars)} />
    </Layout>
  );
};

Search.getInitialProps = async ({ shop }) => {
  const initialQueryParams = {
    queryParams: {
      size: 12
    }
  };
  let data;
  let search;

  try {
    data = await mockData;
    search = await graphQLQuery(getAdsQuery, initialQueryParams);
  } catch (err) {

  }

  return { data, search, shop };
};

Search.propTypes = {
   data: PropTypes.object.isRequired,
   search: PropTypes.array.isRequired,
   shop: PropTypes.object.isRequired
};

export default Search;

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
  }
};