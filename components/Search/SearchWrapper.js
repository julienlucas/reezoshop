import Ad from './Ad';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';
import styled from 'styled-components'
import { Aside, Wrapper } from './styles';
import { theme } from '../../constants/theme';

function SearchWrapper({ cars, cityShop, count, onFilters, onLoadMore, onSort }) {
  return (
    <Wrapper>
      <div className="container">
        <Aside>
          <Filters />
          <div className="wrapper-ad-desktop">
            <Ad/>
          </div>
        </Aside>
        <SearchResults
          cars={cars}
          cityShop={cityShop}
          count={count}
          onLoadMore={nbrCars => onLoadMore(nbrCars)}
          onSort={sorting => onSort(sorting)}
        />
      </div>
    </Wrapper>
  );
};

SearchWrapper.propTypes = {
  cars: PropTypes.array.isRequired,
  cityShop: PropTypes.string.isRequired,
  count: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired
};

export default SearchWrapper;

export const Filters = styled.div`
  padding: 21px 16px 27px;
  background: ${theme.grey300};
  border-radius: 4px;
  width: 300px;
  height: 890px;
  display: none;
  @media (min-width: 990px) {
    display: block;
  }
`