import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Ad from '../Ad';
import InputSuggestions from '../InputSuggestions/InputSuggestions';
import Filters from './Filters';
import SearchResults from './SearchResults';

import graphQLQuery from '../../utils/graphql';
import getSuggestions from '../InputSuggestions/getSuggestions.graphql';
import { medias } from '../../constants/theme';

function SearchWrapper({ cars, cityShop, count, filters, onFilters, onLoadMore, onSort, onResetFilters, onResetSorting }) {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState({ "query": ""});
  const [suggestions, setSuggestions] = useState([]);

  const onChoice = innerText => router.push(`/recherche?match=${innerText}`);

  const onSearch = inputSearch => setQueryParams({ "query": inputSearch });

  const fetchGraphQL = async (query, queryParams) => {
    const res = await graphQLQuery(query, queryParams)
    return res
  };

  useEffect(() => {
    const arrayFormated = [];

    fetchGraphQL(getSuggestions.loc.source.body, queryParams)
        .then(res => res.suggestions.suggestions.map(item => arrayFormated.push(item.query)))
        .then(() => setSuggestions(arrayFormated))
  }, [queryParams])

  return (
    <WrapperStyled>
      <div className="container">
        <InputSuggestions
          inNavBar
          suggestionsData={suggestions}
          onChoice={onChoice}
          onSearch={onSearch}
          placeholder="Marque, Modèle"
        />

        <AsideStyled>
          <Filters count={count} onFilters={filters => onFilters(filters)} onResetFilters={onResetFilters} />
          <Ad/>
        </AsideStyled>

        <SearchResults
          cars={cars}
          cityShop={cityShop}
          count={count}
          filters={filters}
          onLoadMore={nbrCars => onLoadMore(nbrCars)}
          onSort={sorting => onSort(sorting)}
          onResetSorting={onResetSorting}
        />
      </div>
    </WrapperStyled>
  );
};

SearchWrapper.propTypes = {
  cars: PropTypes.array.isRequired,
  cityShop: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  filters: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.string
  ]),
  onFilters: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  onResetFilters: PropTypes.func.isRequired,
  onResetSorting: PropTypes.bool.isRequired
};

export default SearchWrapper;

export const WrapperStyled = styled.section`
   padding: 80px 0;
   .container {
      padding: 0 25px;
      max-width: 1400px;
   }
   ${medias.min990} {
      padding: 135px 0;
   }
   @media (max-width: 768px) {
      padding: 40px 0 80px;
   }
`

export const AsideStyled = styled.aside`
   float: none;
   max-width: 100%;
   width: 100%;
   ${medias.min990} {
      float: left;
      max-width: 300px;
   }
`