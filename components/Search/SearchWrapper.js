import Ad from './Ad';
import SearchResults from './SearchResults';
import styled from 'styled-components'
import { Aside, Wrapper } from './styles';
import { theme } from '../../constants/theme'

function SearchWrapper({ cars, cityShop, count, onLoadMore }) {
  return (
    <Wrapper>
      <div className="container">
        <Aside>
          <Filters/>
          <div className="wrapper-ad-desktop">
            <Ad/>
          </div>
        </Aside>
        <SearchResults cars={cars} cityShop={cityShop} count={count} onLoadMore={nbrCars => onLoadMore(nbrCars)} />
      </div>
    </Wrapper>
  );
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
