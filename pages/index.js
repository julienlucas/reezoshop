import React from 'react';
import PropTypes from 'prop-types';

import graphQLQuery from '../utils/graphql';
import { shops } from '../constants/shops';
import useShop from '../hooks/useShop';

import HeroSearch from '../components/Home/HeroSearch';
import Models from '../components/Home/Models';
import Brands from '../components/Home/Brands';
import Offers from '../components/Home/Offers';
import Map from '../components/Home/Map';
import Advisors from '../components/Home/Advisors';
import Why from '../components/Home/Why';
import FAQS from '../components/Home/FAQS';

const HomePage = ({ data, newCars, usedCars }) => {
  const { shop } = useShop();

  return (
   <>
      <HeroSearch headline={shop.headline} />
      <Models newCars={newCars} usedCars={usedCars} />
      <Brands brands={data.brands} />
      <Offers subHeadline={shop.subHeadline} />
      <Map shop={shop} />
      <Advisors advisors={data.advisors} />
      <Why shop={shop} />
      <FAQS faqs={data.faqs} />
   </>
  );
};

export async function getStaticProps() {
   const queryParamsUsed = { onlyNew: true, size: 3 };
   const queryParamsNew = { ...queryParamsUsed, onlyNew: true };

   let homeDatas;
   try {
      homeDatas = await fetchDatas({ queryParamsNew, queryParamsUsed });
   } catch (err) {
      homeDatas = {newCars: [], usedCars: []};
   }

   return {
      props: {
         ...homeDatas,
         data: mockData
      }
   };
};

HomePage.propTypes = {
   data: PropTypes.object.isRequired,
   newCars: PropTypes.array.isRequired,
   usedCars: PropTypes.array.isRequired,
};

export default HomePage;

const fetchDatas = ({ queryParamsNew, queryParamsUsed }) =>
   graphQLQuery(adsQuery, {
      queryParamsNew,
      queryParamsUsed,
   }).then(({ usedCars: { ads: usedCars }, newCars: { ads: newCars } }) => ({ newCars, usedCars }));

const adsQuery = `query getAds($queryParamsNew: AdQueryParams!, $queryParamsUsed: AdQueryParams!) {
   newCars: ads(queryParams: $queryParamsNew) {
      ads {
         _id
         brand
         colors { ext }
         energy
         gearbox
         images
         isNew
         mileage
         model
         oneImage:images(count: 1, width: W320)
         price
         prices { originalPrice: originalCommercializationPrice, percentage }
         thumbs:images(width: W320)
         title
         year
         pictures320: images(count: 1, width: W320)
         pictures360: images(count: 1, width: W360)
         pictures420: images(count: 1, width: W420)
         pictures480: images(count: 1, width: W480)
         pictures660: images(count: 1, width: W660)
      }
   }
   usedCars: ads(queryParams: $queryParamsUsed) {
      ads {
         _id
         brand
         colors { ext }
         energy
         gearbox
         images
         isNew
         mileage
         model
         oneImage:images(count: 1, width: W320)
         price
         prices { originalPrice: originalCommercializationPrice, percentage }
         thumbs:images(width: W320)
         title
         year
         pictures320: images(count: 1, width: W320)
         pictures360: images(count: 1, width: W360)
         pictures420: images(count: 1, width: W420)
         pictures480: images(count: 1, width: W480)
         pictures660: images(count: 1, width: W660)
      }
   }
}`;

const mockData = {
   agencies: shops,
   brands: [
      {
         nom: 'Renault',
         picture: 'icons/renault.svg',
      },
      {
         nom: 'Peugeot',
         picture: 'icons/peugeot.svg',
      },
      {
         nom: 'Audi',
         picture: 'icons/audi.svg',
      },
      {
         nom: 'Volkswagen',
         picture: 'icons/volkswagen.svg',
      },
      {
         nom: 'Ford',
         picture: 'icons/ford.svg',
      },
      {
         nom: 'BMW',
         picture: 'icons/bmw.svg',
      },
   ],
   advisors: [
      {
         nom: 'Teddy',
         jobTitle: 'Customer Success manager',
         picture: 'images/teddy.png',
      },
      {
         nom: 'Marine',
         jobTitle: 'Head of Business & Marketing',
         picture: 'images/marine.png',
      },
      {
         nom: 'Erlé',
         jobTitle: 'Acquistion & Digital Performance Manager',
         picture: 'images/erle.png',
      },
      {
         nom: 'Jonathan',
         jobTitle: 'Head of Sales',
         picture: 'images/jonathan.png',
      },
   ],
   faqs: [
      'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
      'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
      'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
      'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
      'Integer pellentesque nunc ac consectetur pharetra, et neque in tristique ?',
   ],
};