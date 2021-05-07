import Ad from './Ad';
import Filters from './Filters';
import PropTypes from 'prop-types';
import SearchResults from './SearchResults';
import { Aside, Wrapper } from './styles';

function SearchWrapper({ cars, cityShop, count, filters, onFilters, onLoadMore, onSort }) {
  return (
    <Wrapper>
      <div className="container">
        <Aside>
          <Filters onFilters={filters => onFilters(filters)} />
          <div className="wrapper-ad-desktop">
            <Ad/>
          </div>
        </Aside>
        <SearchResults
          cars={cars}
          cityShop={cityShop}
          count={count}
          filters={filters}
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
  filters: PropTypes.object.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired
};

export default SearchWrapper;