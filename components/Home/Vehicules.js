import dynamic from 'next/dynamic'
import CardCar from '../CardCar';
import PropTypes from 'prop-types';
import React from 'react';
import { ReactTabsStyles } from '../../constants/react-tabs';
import Slider from 'react-slick';
import { SectionAComp } from './styles';
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false }) // SSR désactivé : évite erreur rouge browser
import { Tab, TabList, TabPanel } from 'react-tabs';

const Vehicules = ({ newCars, oldCars, subHeadline }) => {
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

  return (
    <SectionAComp>
      <h2 className="text-center">Les affaires du mois dans votre <span className="blue">{subHeadline}</span></h2>

      <ReactTabsStyles>
        <Tabs>
          <TabList>
            <Tab>Occasion</Tab>
            <Tab>Neuf/0km</Tab>
          </TabList>

          <TabPanel>
            <div className="container">
              <Slider {...sliderSettings}>
                {oldCars?.map(car =>
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
                {newCars?.map(car =>
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
      </ReactTabsStyles>

      <div className="container">
        <button className="btn btn-primary">Voir toutes les annonces d’occasion</button>
      </div>
    </SectionAComp>
  );
};

Vehicules.propTypes = {
   newCars: PropTypes.array.isRequired,
   oldCars: PropTypes.array.isRequired,
   subHeadline: PropTypes.string
};

export default Vehicules;