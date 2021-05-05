import CardCar from '../CardCar';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import React, { useState } from 'react';
import { Results } from './styles';

const SearchResults = ({ agence, cars, count, onLoadMore }) => {
  const [nbrCars, setNbrCars] = useState(12);

  const loadMore = () => {
    setNbrCars((prevState) => prevState + 12);
    onLoadMore(nbrCars);
  };

  const capitalizeFirstLetter = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Results>
      <h2>Land Rover Range Rover Evoque neuves en vente <span className="blue">près de {capitalizeFirstLetter(agence)}</span></h2>
      <p className="count"><span className="blue">{count}</span> voitures dispos</p>

      <ReactSelect
        className="select"
        instanceId={String}
        placeholder="Meilleures réductions"
        styles={customStyles}
        components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
      />

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
          />)}
      </div>

      <div className="row">
        <div/>
        <button className="btn btn-tertiary" onClick={loadMore}>Voir plus de véhicules</button>
        <div/>
      </div>
    </Results>
  );
};

SearchResults.propTypes = {
   agence: PropTypes.string,
   cars: PropTypes.array.isRequired,
   count: PropTypes.string.isRequired,
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
