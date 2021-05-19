import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import BreadCrumb from '../components/BreadCrumb';
import SearchWrapper from '../components/Search/SearchWrapper';

import graphQLQuery from '../utils/graphql';
import useShop from '../hooks/useShop';
import { sortAsc, sortDsc } from '../utils/sorting';

function Search({ search }) {
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);
  const [filters, setfilters] = useState({});
  const { shop, shopKey } = useShop();

  let queryParams = { queryParams: { ...filters } };

  const fetchGraphQL = async (getAdsQuery, queryParams) => {
    const newSearch = await graphQLQuery(getAdsQuery, queryParams)
    setCount(newSearch.ads.count)
    setCars(newSearch.ads.ads)
  };

  const onSort = async sorting => {
    if (sorting === 'prices-dsc') {
      setCars(prevState => sortDsc(prevState, 'price'));
    } else if (sorting === 'prices-asc') {
      setCars(prevState => sortAsc(prevState, 'price'));
    } else {
      fetchGraphQL(getAdsQuery, queryParams)
    }
  };

  const onFilters = async filters => {
    setfilters(filters)
    fetchGraphQL(getAdsQuery, queryParams)
  };

  const onLoadMore = async nbrCars => {
    queryParams = {
      queryParams: {
        ...filters,
        size: nbrCars
      }
    };
    fetchGraphQL(getAdsQuery, queryParams)
  };

  // Chargement initial
  useEffect(() => {
    setCount(search.ads.count);
    setCars(sortAsc(search.ads.ads, 'price'));
  }, [search])

  return (
    <>
      {/* Balise SEO title/description spécifique à la Recherche Vertical (Neuf ou Occassion) */}
      {(filters?.onlyNew === true || filters?.onlyNew === false) && <NextSeo
        title={`Annonces voitures ${filters.onlyNew === true ? 'neuves' : "d'occasions"} près de ${shop.name} | Reezocar ${shop.locality}`}
        description={` Acheter une nouvelle voiture ${filters.onlyNew === true ? 'neuves' : "d'occasions"} près de ${shop.name} grâce
        à Reezocar ${shop.locality}. Faites l’expérience du conseil personnalisé et de l’accompagnement reezocar dans votre projet
        d'acquisition d’une nouvelle voiture.`}
      />}

      <SearchWrapper
        cars={cars}
        cityShop={shopKey}
        count={count}
        filters={filters}
        onFilters={filters => onFilters(filters)}
        onLoadMore={nbrCars => onLoadMore(nbrCars)}
        onSort={sorting => onSort(sorting)}
      />
      <BreadCrumb params={filters} />
    </>
  );
};

Search.getInitialProps = async () => {
   const initialQueryParams = { queryParams: { size: 12 } };

   let search;
   try {
      search = await graphQLQuery(getAdsQuery, initialQueryParams);
   } catch (err) {
      search = {};
   }

   return { search };
};

Search.propTypes = {
   search: PropTypes.object.isRequired
};

export default Search;

const getAdsQuery = `query getAds($queryParams: AdQueryParams!) {
   ads(queryParams: $queryParams) {
      count
      ads {
         _id
         brand
         colors { ext }
         energy
         gearbox
         images
         isNew
         mileage
         model
         oneImage:images(count: 1, width: W320)
         price
         prices { originalPrice: originalCommercializationPrice, percentage }
         title
         thumbs:images(width: W320)
         year
      }
   }
}`