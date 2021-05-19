import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Ad from './Ad';
import InputSuggestions from '../InputSuggestions/InputSuggestions';
import Filters from './Filters';
import SearchResults from './SearchResults';

import { medias } from '../../constants/theme';

function SearchWrapper({ cars, cityShop, count, filters, onFilters, onLoadMore, onSort, onResetFilters }) {
  return (
    <WrapperStyled>
      <div className="container">
        <InputSuggestions className="search-page"/>

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
  onResetFilters: PropTypes.func.isRequired
};

export default SearchWrapper;

export const WrapperStyled = styled.section`
   margin: 80px 0;
   .container {
      padding: 0 25px;
      max-width: 1400px;
   }
   ${medias.min990} {
      margin: 135px 0;
   }
   @media (max-width: 768px) {
      margin: 40px 0 80px;
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