import React from 'react';
import Slider from 'react-slick';
import AudiIcon from '../../svgs/audi.svg';
import BmwIcon from '../../svgs/bmw.svg';
import FordIcon from '../../svgs/ford.svg';
import PeugeotIcon from '../../svgs/peugeot.svg';
import RenaultIcon from '../../svgs/renault.svg';
import VolkswagenIcon from '../../svgs/volkswagen.svg';
import { SectionBComp } from './styles';

function Constructeurs({ constructeurs }) {
  return (
    <SectionBComp>
      <div className="container">
        <h2 className="small">Les constructeurs populaires</h2>

        <Slider {...sliderSettings}>
          {constructeurs?.map(constructeur => <CardAutomaker key={constructeur.nom} constructeur={constructeur}  />)}
        </Slider>
      </div>
    </SectionBComp>
  );
};

export default Constructeurs;

function CardAutomaker({ constructeur }) {
  return (
    <div className="card-automaker">
      <div className="logo">
        <Logo constructeur={constructeur.nom} />
      </div>
      <div className="box-text">
        <strong>{constructeur.nom}</strong>
        <p className="prix">à partir de 5000€</p>
      </div>
    </div>
  );
};

function Logo({ constructeur }) {
  if (constructeur == 'Audi') {
    return <AudiIcon/>
  } else if (constructeur == 'BMW') {
    return <BmwIcon/>
  } else if (constructeur == 'Ford') {
    return <FordIcon/>
  } else if (constructeur == 'Peugeot') {
    return <PeugeotIcon/>
  } else if (constructeur == 'Renault') {
    return <RenaultIcon/>
  } else if (constructeur == 'Volkswagen') {
    return <VolkswagenIcon/>
  };
};

const sliderSettings = {
  className: 'slider',
  arrows: false,
  centerMode: false,
  adaptiveHeight: true,
  focusOnSelect: true,
  infinite: true,
  variableWidth: true,
  slidesToScroll: 1,
};


