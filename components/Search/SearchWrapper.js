import SearchAside from './SearchAside';
import SearchResults from './SearchResults';
import { Wrapper } from './styles';

function SearchWrapper({ cars, onLoadMore, onSearch }) {
  return (
    <Wrapper>
      <div className="container">
        <SearchAside onSearch={(filters) => onSearch(filters)} />
        <SearchResults cars={cars} onLoadMore={(nbrCars) => onLoadMore(nbrCars)} />
      </div>
    </Wrapper>
  );
};

export default SearchWrapper;
