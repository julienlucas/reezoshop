import SearchAside from './SearchAside';
import SearchResults from './SearchResults';
import { Wrapper } from './styles';

function SearchWrapper({ agence, cars, count, onLoadMore }) {
  return (
    <Wrapper>
      <div className="container">
        <SearchAside />
        <SearchResults agence={agence} cars={cars} count={count} onLoadMore={nbrCars => onLoadMore(nbrCars)} />
      </div>
    </Wrapper>
  );
};

export default SearchWrapper;
