import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import CardCar from '../CardCar';
import Ad from './Ad';
import Select from '../Select';

import { sorting } from '../../constants/search';
import { medias } from '../../constants/theme';

const SearchResults = ({ cars, cityShop, count, filters, onLoadMore, onSort }) => {
  const [nbrCars, setNbrCars] = useState(12);

  const capitalize1stLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const loadMore = () => {
    setNbrCars((prevState) => prevState + 12);
  };

  useEffect(() => {
    if (nbrCars > 12) {
      onLoadMore(nbrCars);
    }
  }, [nbrCars])

  const headlineCustom = () => {
    if (!filters.match) {
      return <>Véhicules {filters?.body ? filters.body : ''} {filters?.onlyNew === true ? 'neufs' : ''} {filters?.onlyNew === false ? "d'occasion " : ''} en vente <span className="blue">près de {capitalize1stLetter(cityShop)}</span></>;
    };
    return <><span className="capitalize">{filters?.match ? filters.match : ''}</span> {filters?.onlyNew === true ? 'neuves' : ''} {filters?.onlyNew === false ? "d'occasion " : ''} en vente <span className="blue">près de {capitalize1stLetter(cityShop)}</span></>;
  };

  return (
    <ResultsStyled>
      <h2>{headlineCustom()}</h2>
      <p className="count"><span className="blue">{count}</span> voitures dispos</p>

      <Select
        className="sorting"
        name="sorting"
        options={sorting}
        placeholder="Tri par défaut"
        onChange={sorting => onSort(sorting)}
      />

      <div className="row">
        {cars?.map(car =>
          <CardCar
            className="small-width"
            key={car._id}
            year={car.year}
            gearbox={car.gearbox}
            energy={car.energy}
            mileage={car.mileage}
            brand={car.brand}
            modele={car.model}
            thumbnail={car.oneImage[0]}
            price={car.price}
            isNew={car.isNew}
          />)}
      </div>

      <div className="row row-btn">
        <div/>
        <Button third onClick={loadMore}>Voir plus de véhicules</Button>
        <div/>
      </div>

      <Ad className="ad-mobile" />
    </ResultsStyled>
  );
};

SearchResults.propTypes = {
   cars: PropTypes.array.isRequired,
   cityShop: PropTypes.string,
   count: PropTypes.number.isRequired,
   filters: PropTypes.object.isRequired,
   onLoadMore: PropTypes.func.isRequired,
   onSort: PropTypes.func.isRequired
};

export default SearchResults;

export const ResultsStyled = styled.div`
  padding: 0 0 0 0;
  float: none;
  width: 100%;
  h2 {
    margin: -8px 0 20px 0;
    span.capitalize {
      text-transform: capitalize;
    }
  }
  .count {
    font-size: 20px;
    span {
      font-weight: 700;
    }
  }
  select {
    display: none;
  }
  .row {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 22px;
    width: 100%;
    &.row-btn {
        display: block;
        .btn {
          width: 100%;
        }
    }
  }
  ${medias.min990} {
    float: left;
    width: calc(100% - 300px);
    padding: 0 51px;
    select {
      display: block;
    }
    .row {
      width: calc(100% + 51px);
      &.row-btn {
        display: grid;
      }
    }
  }
  ${medias.min750} {
    .row {
        grid-template-columns: repeat(3, 1fr);
    }
  }
`
