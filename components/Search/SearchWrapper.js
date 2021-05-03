import Aside from './SearchAside';
import Results from './SearchResults';
import { Wrapper } from './styles';

function SearchWrapper({ cars }) {
  return (
    <Wrapper>
      <div className="container">
        <Aside />
        <Results cars={cars} />
      </div>
    </Wrapper>
  );
};

export default SearchWrapper;
