import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import CardCar from '../CardCar';
import { SectionAComp } from './styles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Vehicules({ cars, subHeadline }) {
  return (
    <SectionAComp>
      <h2 className="text-center">Les affaires du mois dans votre <span className="blue">{subHeadline}</span></h2>

      <Tabs>
        <TabList>
          <Tab>Occasion</Tab>
          <Tab>Neuf/0km</Tab>
        </TabList>

        <TabPanel>
          <div className="container">
            <Slider {...sliderSettings}>
              {cars?.map(car =>
                <CardCar
                  key={car._id}
                  year={car.year}
                  gearbox={car.gearbox}
                  energy={car.energy}
                  mileage={car.mileage}
                  brand={car.brand}
                  model={car.model}
                  thumbnail={car.oneImage[0]}
                  price={car.price}
                />
              )}
            </Slider>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="container">
            <Slider {...sliderSettings}>
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
                />
              )}
            </Slider>
          </div>
        </TabPanel>
      </Tabs>

      <div className="container">
        <button className="btn btn-primary">Voir toutes les annonces d’occasion</button>
      </div>
    </SectionAComp>
  );
};

Vehicules.propTypes = {
   cars: PropTypes.Object,
   subHeadline: PropTypes.string
};

export default Vehicules;

const sliderSettings = {
  className: 'slider',
  arrows: false,
  centerMode: false,
  adaptiveHeight: true,
  slidesToScroll: 1,
  focusOnSelect: true,
  infinite: true,
  variableWidth: true
};