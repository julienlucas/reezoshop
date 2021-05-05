import fetcher from '../utils/fetcher';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';
import SearchWrapper from '../components/Search/SearchWrapper';
import useShop from '../hooks/useShop';
import useSWR from 'swr';
import React, { useEffect, useState } from 'react';

function Search(props) {
    const [cars, setCars] = useState([]);
  // const shopFromContext = useShop();
  // console.log('shopFromContext', shopFromContext);
  // console.log(shop.subDomain);
  // console.log(shopFromContext.subDomain);

  const initialData = props.data
  // Intial Data servit SSR par l'API Next, ensuite la data peut être changée dynamiquement (feature de useSWR ver. 0.1.10, hook crée par Vercel/Next)
  const { data } = useSWR([`http://localhost:3000/api/search?size=${nbrCars}`], fetcher, { initialData })
  const { head, nav } = props;

  const onLoadMore = async nbrCars => {
    const res = await fetch([`http://localhost:3000/api/search?size=${nbrCars}`], fetcher);
    const updatedData = await res.json();
    setCars(updatedData.ads.ads);
  };

  const onSearch = async filters => {
    // filters.size = 12;
    // var query = Object.keys(filters).map(key => key + '=' + filters[key]).join('&');
    // const res = await fetch([`http://localhost:3000/api/search?${query}`], fetcher);
    // const updatedData = await res.json();
    // setCars(updatedData.ads.ads);
    // console.log(filters)
  }

  useEffect(() => {
    setCars(data.ads.ads)
  }, [props])

  return (
    <Layout nav={nav} phone={head.phone}>
      <SearchWrapper cars={cars} onLoadMore={nbrCars => onLoadMore(nbrCars)} onSearch={filters => onSearch(filters)} />
    </Layout>
  );
};

export async function getServerSideProps({ shop }) {
  const head = await mockData.head;
  const nav = await mockData.nav;
  const data = await fetcher([`http://localhost:3000/api/search?size=${nbrCars}`]);

  return {
    props: {
      head,
      data,
      nav,
      shop: null
    }
  }
}

Search.propTypes = {
  //  data: PropTypes.object.isRequired,
   shop: PropTypes.object.isRequired
};

export default Search;

const nbrCars = 12;

const mockData = {
  nav: [
    { value: 'Lille', label: 'Agence Boulogne-Billacourt' },
    { value: 'Bordeaux', label: 'Agence Bordeaux' },
    { value: 'Marseille', label: 'Agence Marseille' }
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
  }
};