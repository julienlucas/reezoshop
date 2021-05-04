import SearchAside from './SearchAside';
import SearchResults from './SearchResults';
import { Wrapper } from './styles';

function SearchWrapper({ cars, loadMore }) {
  return (
    <Wrapper>
      <div className="container">
        <SearchAside />
        <SearchResults cars={cars} loadMore={(nbr) => loadMore(nbr)} />
      </div>
    </Wrapper>
  );
};

export default SearchWrapper;
