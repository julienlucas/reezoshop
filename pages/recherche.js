import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import BreadCrumb from '../components/BreadCrumb';
import SearchWrapper from '../components/Search/SearchWrapper';

import graphQLQuery from '../utils/graphql';
import useShop from '../hooks/useShop';
import { sort } from '../utils/sorting';

function Search({ search }) {
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);
  const [filters, setfilters] = useState({});
  const [sortOrder, setSortOrder] = useState(null);
  const { shop, shopKey } = useShop();
  const router = useRouter();

  let queryParams = { queryParams: { ...filters } };

  const fetchGraphQL = async (getAdsQuery, queryParams) => {
    const newSearch = await graphQLQuery(getAdsQuery, queryParams);
    setCount(newSearch.ads.count);


    console.log(filters)

    const sortOrder = sortOrder || 'pricesAsc';
    const sortedCars = sort(newSearch.ads.ads, 'price', sortOrder);
    setCars(sortedCars);
  };

  const onSort = async sorting => {
    queryParams = { queryParams: { ...filters, size: 12 } };
    setSortOrder(sorting);
    fetchGraphQL(getAdsQuery, queryParams);
  };

  const onFilters = async filters => {
    queryParams = { queryParams: { ...filters, size: 12 } };
    fetchGraphQL(getAdsQuery, queryParams);
    setfilters(filters);
  };

  const onLoadMore = async nbrCars => {
    queryParams = { queryParams: { ...filters, size: nbrCars } };
    fetchGraphQL(getAdsQuery, queryParams);
  };

  const onResetFilters = () => {
    queryParams = { queryParams: { size: 12 } };
    fetchGraphQL(getAdsQuery, queryParams);
    setfilters({});
    setSortOrder(null);
    router.push({ pathname: '/recherche' }, undefined, { shallow: true });
  };

  useEffect(() => {
    // Affichage les params URL lors des filters
    if (sortOrder || Object.keys(filters).length > 1) {
      delete filters.size;
      const query = { ...filters }
      if (sortOrder) query.sort = sortOrder;

      // Converti en Strings les Arrays des filters
      Object.keys(query).map((item) => {
        query[item] = query[item].toString()
        return null
      });

      router.push({ pathname: '/recherche', query }, undefined, { shallow: true });
    }
  }, [filters, sortOrder])

  // Chargement initial
  useEffect(() => {
    setCount(search.ads.count);
    const IntialSorting = sort(search.ads.ads, 'price', 'pricesAsc');
    setCars(IntialSorting);
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
        onResetFilters={onResetFilters}
      />
      <BreadCrumb params={filters} />
    </>
  );
};

Search.getInitialProps = async ({ query }) => {
   const initialQueryParams = { queryParams: { size: 12 } };

   let search;
   try {
     if (query) {
       search = await graphQLQuery(getAdsQuery, { queryParams: { ...query, size: 12 } });
     } else {
       search = await graphQLQuery(getAdsQuery, initialQueryParams);
     }
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