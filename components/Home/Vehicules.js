import React from 'react';
import Slider from 'react-slick';
import CardCar from '../CardCar';
import { SectionAComp } from './styles';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Vehicules({ cars }) {
  return (
    <SectionAComp>
      <h2 className="text-center">Les affaires du mois dans votre <span className="blue">agence Lilloise</span></h2>

      <Tabs>
        <TabList>
          <Tab>Occasion</Tab>
          <Tab>Neuf/0km</Tab>
        </TabList>

        <TabPanel>
          <div className="container">
            <Slider {...sliderSettings}>
              {cars?.occasions?.slice(0, 3).map((car, i) => <CardCar key={car + i + 'occasion'} data={car} />)}
            </Slider>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="container">
            <Slider {...sliderSettings}>
              {cars?.neufs?.slice(0, 3).map((car, i) => <CardCar key={car + i + 'neuf'}  data={car} />)}
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