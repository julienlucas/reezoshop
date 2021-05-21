import dynamic from 'next/dynamic';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Tab, TabList, TabPanel } from 'react-tabs';
import Slider from 'react-slick';

import Button from '../Buttons/Button';
import CardCar from '../CardCar';
import { ReactSlickStyles } from '../../constants/react-slick-styles';
import { ReactTabsStyles } from '../../constants/react-tabs-styles';
import { medias } from '../../constants/theme';
import useShop from '../../hooks/useShop';

const Models = ({ newCars, usedCars }) => {
  if (isEmpty([...newCars, ...usedCars])) return null;

  const { shop } = useShop();

  return (
    <StyledModels>
      <h2 className="text-center">Les affaires du mois dans votre <span className="blue">{shop && shop.subHeadline}</span></h2>

      <ReactTabsStyles>
        <Tabs>
          <TabList>
            <Tab>Occasion</Tab>
            <Tab>Neuf/0km</Tab>
          </TabList>

          <TabPanel>
            <div className="container">
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
                    />
                  )}
                </Slider>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="container">
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
                    />
                  )}
                </Slider>
            </div>
          </TabPanel>
        </Tabs>
      </ReactTabsStyles>

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

const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs)
);

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
  }
  ${medias.min620} {
    .btn {
      width: auto;
    }
  }
`