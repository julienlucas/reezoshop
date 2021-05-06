import CardCar from '../CardCar';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import SearchAd from './Ad';
import Select from '../Select';
import React, { useEffect, useState } from 'react';
import { Results } from './styles';
import { sorting } from '../../constants/search';

const SearchResults = ({ cars, cityShop, count, onLoadMore, onSort }) => {
  const [nbrCars, setNbrCars] = useState(12);

  const capitalizeFirstLetter = str => {
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

  return (
    <Results>
      <h2>Land Rover Range Rover Evoque neuves en vente <span className="blue">près de {capitalizeFirstLetter(cityShop)}</span></h2>
      <p className="count"><span className="blue">{count}</span> voitures dispos</p>

      <div className="wrapper-select-sorting">
        <Select
          name="sorting"
          options={sorting}
          placeholder="Meilleures prix"
          onChange={sorting => onSort(sorting)}
        />
      </div>

      <div className="row">
        {cars?.map(car =>
          <CardCar
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
        <button className="btn btn-tertiary" onClick={loadMore}>Voir plus de véhicules</button>
        <div/>
      </div>

      <div className="wrapper-ad-mobile">
        <SearchAd />
      </div>
    </Results>
  );
};

SearchResults.propTypes = {
   cars: PropTypes.array.isRequired,
   cityShop: PropTypes.string,
   count: PropTypes.array.isRequired,
   onLoadMore: PropTypes.func
};

export default SearchResults;

// React Select : Styles
const customStyles = {
  option: (styles, state) => ({
    ...styles,
    fontSize: '16px',
    borderTop: '1px solid #C1C1C1',
    background: state.isSelected ? 'white' : 'white',
    color: '#313131',
    cursor: 'pointer',
    "&:focus": {
      background: 'white'
    },
    "&:hover": {
      background: 'white'
    },
    "&:active": {
      background: 'white'
    }
  }),
  singleValue: (styles) => ({
    ...styles
  }),
  control: styles => ({
    ...styles,
    position: 'absolute',
    top: '-40px',
    right: '-50px',
    width: '200px',
    fontSize: '14px',
    padding: '0 5px',
    color: '#313131',
    border: '1px solid #C4C4C4',
    background: 'white url("/icons/arrow-bottom-light.svg") no-repeat',
    backgroundPosition: 'calc(100% - 10px) 50%',
    backgroundSize: '13px',
    boxShadow: 'none',
    cursor: 'pointer',
  }),
  menu: styles => ({
    ...styles,
    position: 'absolute',
    right: '-50px',
    padding: '0',
    border: 'none',
    boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
    width: '240px',
    borderRadius: '4px',
    zIndex: '10'
  })
};
