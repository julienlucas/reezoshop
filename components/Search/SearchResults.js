import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../Buttons/Button';
import CardCar from '../CardCar';
import Ad from './Ad';
import Select from '../Select';

import { medias } from '../../constants/theme';
import { capitalize1stLetter, numberFormat } from '../../utils/formaters';
import { sorting } from '../../constants/search';

const SearchResults = ({ cars, cityShop, count, filters, onLoadMore, onSort, onResetSorting }) => {
  const [nbrCars, setNbrCars] = useState(12);

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
      return <>Véhicules {filters?.body ? filters.body : ''} {filters?.onlyNew === true ? 'neufs 0km' : ''} {filters?.onlyNew === false ? "d'occasions" : ''} en vente <span className="blue">près de {capitalize1stLetter(cityShop)}</span></>;
    };
    return <><span className="capitalize">{filters?.match ? filters.match : ''}</span> {filters?.onlyNew === true ? 'neuves 0km' : ''} {filters?.onlyNew === false ? "d'occasion " : ''} en vente <span className="blue">près de {capitalize1stLetter(cityShop)}</span></>;
  };

  return (
    <ResultsStyled>
      <h2>{headlineCustom()}</h2>
      <p className="count"><span className="blue">{numberFormat(count)}</span> voitures dispos</p>

      <Select
        sorting
        name="sorting"
        options={sorting}
        placeholder="Tri par défaut"
        onChange={sorting => onSort(sorting)}
        onReset={onResetSorting}
      />

      <div className="row">
        {cars?.map(car =>
          <CardCar
            className="small-width"
            _id={car._id}
            key={car._id}
            brand={car.brand}
            gearbox={car.gearbox}
            energy={car.energy}
            isNew={car.isNew}
            mileage={car.mileage}
            model={car.model}
            price={car.price}
            prices={car.prices}
            title={car.title}
            thumbnail={car.oneImage[0]}
            year={car.year}
            pictures320={car.pictures320}
            pictures360={car.pictures360}
            pictures420={car.pictures420}
            pictures480={car.pictures480}
            pictures660={car.pictures480}
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
   onSort: PropTypes.func.isRequired,
   onResetSorting: PropTypes.bool.isRequired
};

export default SearchResults;

export const ResultsStyled = styled.div`
  padding: 40px 0 0 0;
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
