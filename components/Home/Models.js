import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Button from '../Buttons/Button';
import CardCar from '../CardCar';
import { ReactSlickStyles } from '../../constants/react-slick-styles';
import { theme, medias } from '../../constants/theme';
import useShop from '../../hooks/useShop';

const Models = ({ newCars, usedCars }) => {
  if (isEmpty([...newCars, ...usedCars])) return null;
  const [tab, setTab] = useState(1);
  const { shop } = useShop();

  return (
    <StyledModels>
      <h2 className="text-center">Les affaires du mois dans votre <span className="blue">{shop && shop.subHeadline}</span></h2>

      <ul className="tabs">
        <li className={tab === 1 ? 'active' : ''}><button onClick={() => setTab(1)} type="button">Occasion</button></li>
        <li className={tab === 2 ? 'active' : ''}><button onClick={() => setTab(2)} type="button">Neuf/0km</button></li>
      </ul>

      <div className="container">
        <div className={`pannel ${tab === 1 ? 'active' : ''}`}>
          <Slider {...sliderSettings}>
            {usedCars?.map(car =>
              <CardCar
                className="card-car"
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
              />
            )}
          </Slider>
        </div>

        <div className={`pannel ${tab === 2 ? 'active' : ''}`}>
          <Slider {...sliderSettings}>
            {newCars?.map(car =>
              <CardCar
                className="card-car"
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
              />
            )}
          </Slider>
        </div>
      </div>

      <ReactSlickStyles/>

      <div className="container">
        <Button primary>Voir toutes les annonces d’occasion</Button>
      </div>
    </StyledModels>
  );
};

Models.propTypes = {
  newCars: PropTypes.array.isRequired,
  usedCars: PropTypes.array.isRequired,
  subHeadline: PropTypes.string
};

export default Models;

const sliderSettings = {
  className: 'slider',
  arrows: false,
  centerMode: false,
  adaptiveHeight: true,
  slidesToScroll: 1,
  focusOnSelect: true,
  infinite: true,
  variableWidth: true,
};

export const StyledModels = styled.section`
  padding: 25px 0 40px;
  h2 {
    position: relative;
    margin: 0 auto 15px;
    dusplay: table;
    text-align: center;
    max-width: 280px;
  }
  ul.tabs {
    display: flex;
    justify-content: center;
    width: 100%;
    li {
      list-style: none;
      margin: 0 20px;
      border-bottom: 3px solid transparent;
      button {
        position: relative;
        display: block;
        border: 0;
        font-size: 18px;
        padding: 20px 0 5px;
        background: transparent;
        color: ${theme.black};
        cursor: pointer;
      }
      &.active{
        border-color: ${theme.blue100};
        button {
          font-weight: 700;
          color: ${theme.blue100};
        }
      }
    }
  }
  .pannel {
    padding: 0;
    visibility: hidden;
    opacity: 0;
    background: transparent;
    width: 100%;
    display: none;
    &.active {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }
  .btn {
    position: relative;
    margin: 15px auto 0;
    display: table;
    width: 100%;
    padding: 0 40px;
  }
  .slick-list {
    max-width: 1160px;
    width: 100%;
    height: 360px !important;
  }
  .container:first-child {
    padding-left: 0;
  }
  .slider {
    margin-left: 20px;
    .slick-slide {
      margin: 0 -50px 0px 70px;
      * {
        outline: 0;
        user-select: none;
      }
      .card-car {
        left: 10px;
      }
    }
  }
  ${medias.min768} {
    h2 {
      margin: 0 -10px 25px 30px;
      max-width: 100%;
    }
    .slider {
      margin-left: 30px;
    }
    ul.tabs {
      li {
        padding: 20px 5px 5px;
        margin: 0 40px;
        button {
          font-size: 24px;
        }
      }
    }
  }
  ${medias.min620} {
    .btn {
      width: auto;
    }
  }
`