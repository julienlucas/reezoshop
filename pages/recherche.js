import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import BreadCrumb from '../components/BreadCrumb';
import SearchWrapper from '../components/Search/SearchWrapper';

import graphQLQuery from '../utils/graphql';
import useShop from '../hooks/useShop';
import { sort } from '../utils/sorting';

const Search = ({ search, query }) => {
  const [cars, setCars] = useState([]);
  const [count, setCount] = useState(0);
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState(null);
  const { shop, shopKey } = useShop();
  const router = useRouter();

  let queryParams = { queryParams: { ...filters, size: 12 } };

  useEffect(() => {
    setFilters(query)
  },[query])

  const fetchGraphQL = async (getAdsQuery, queryParams) => {
    const newSearch = await graphQLQuery(getAdsQuery, queryParams);
    setCount(newSearch.ads.count);

    const sortedCars = sort(newSearch.ads.ads, 'price', sortOrder || 'pricesAsc');
    setCars(sortedCars);
  };

  const onSort = sorting => setSortOrder(sorting);

  const onFilters = filters => {
    setFilters(prevState => {
      return { ...prevState, ...filters }
    });
  };

  useEffect(() => {
    if (sortOrder || Object.keys(filters).length > 1) fetchGraphQL(getAdsQuery, queryParams);
  }, [sortOrder, filters])

  const onLoadMore = nbrCars => {
    queryParams = { queryParams: { ...filters, size: nbrCars } };
    fetchGraphQL(getAdsQuery, queryParams);
  };

  const onResetFilters = () => {
    queryParams = { queryParams: { size: 12 } };
    fetchGraphQL(getAdsQuery, queryParams);
    setFilters({});
    setSortOrder(null);
    router.push({ pathname: '/recherche' }, undefined, { shallow: true });
  };

  useEffect(() => {
    // Affiche les params URL en formatant les filters pour le query
    if (sortOrder || Object.keys(filters).length > 1) {
      delete filters.size;
      query = { ...filters };

      Object.keys(query).forEach((item) => {
        query[item] = query[item].toString().replace(/,/g, '-');
        if (!query[item].trim()) delete query[item]
        return null;
      });

      if (sortOrder) query.sort = sortOrder; // Si en state, ajoute dans le sort dans le query

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
        onResetSorting={sortOrder === null && true}
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

        Object.keys(query).forEach((item) => {
          const array = query[item].split('-', 2);
          query[item] = array
          return;
        });
        search = await graphQLQuery(getAdsQuery, { queryParams: { ...query, size: 12 } });

      } else {
        search = await graphQLQuery(getAdsQuery, initialQueryParams);
      }
   } catch (err) {
      search = {};
   }

   return { query, search };
};

Search.propTypes = {
   search: PropTypes.object.isRequired,
   query: PropTypes.object.isRequired
};

Search.layoutProps = {
  headerProps: {
    withHeaderShadow: true,
    withBottomMobileNav: true,
    singleBottomMobileNav: false
  }
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
         pictures320: images(count: 1, width: W320)
         pictures360: images(count: 1, width: W360)
         pictures420: images(count: 1, width: W420)
         pictures480: images(count: 1, width: W480)
         pictures660: images(count: 1, width: W660)
      }
   }
}`