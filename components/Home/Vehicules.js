import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
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

      <button className="btn btn-primary">Voir toutes les annonces d’occasion</button>
    </SectionAComp>
  )
}

export default Vehicules;

function CardCar({ data }) {
  // Ajout d'un espace tous les 3 caractères
  const numberFormat = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  };

  return (
    <div className="card-car">
      <div className="thumbnail">
        <Link href="/">
          <a>
            <Image
              src={data.photos && data.photos[0]}
              width={366}
              height={205}
              layout="responsive"
            />
          </a>
        </Link>
      </div>
      <div className="box-text">
        <h3><Link href="/"><a>{data.marque && data.marque} {data.modele && data.modele} {data.complementInfos && data.complementInfos}</a></Link></h3>
        <p className="description">{data.boite && data.boite + ' ·'} {data.energie && data.energie + ' ·'} {data.annee && data.annee + ' ·'} {data.kilometrage && numberFormat(data.kilometrage) + ' km'}</p>
        <p className="prix">{data.prix && numberFormat(data.prix)} €</p>
      </div>
    </div>
  );
};

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
