import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import ButtonIsNew from './Buttons/ButtonIsNew';

import { makeCarURL } from '../utils/url';
import NextImageLazy from '../utils/imgLazy';
import { numberFormat } from '../utils/formaters';
import { medias, theme } from '../constants/theme';
import { energies, gearboxes } from '../constants/search';

const CardCar = ({
      _id,
      className,
      brand,
      energy,
      isNew,
      gearbox,
      model,
      mileage,
      price,
      prices,
      title,
      thumbnail,
      year,
      pictures320,
      pictures360,
      pictures420,
      pictures480,
      pictures660
   }) => {
   const url = makeCarURL({ _id, brand, isNew, model, year });
   const priceDiscounted = prices?.percentage && (price - (price * `.${prices.percentage}`)).toFixed(0);

   const isEnMagasin = true; // Fake data, à remplacer lorsque que cette clé sera gérée par l'API

   const srcSet = `${pictures320 && `${pictures320} 320w,`}
   ${pictures360 && `${pictures360} 360w,`}
   ${pictures420 && `${pictures420} 420w,`}
   ${pictures480 && `${pictures480} 480w,`}
   ${pictures660 && `${pictures660} 660w`}`

   return (
      <Card className={className}>
         <div className="thumbnail">
            {className === 'small-width' && <>
               {prices?.percentage && <div className="promo">-{prices.percentage}%</div>}
               {isEnMagasin && <div className="en-magasin">En magasin</div>}
            </>}

            <Link href={url}>
               <a>
                  <NextImageLazy
                     src={thumbnail}
                     srcSet={srcSet}
                     width="100%"
                     height={205}
                     layout="responsive"
                     alt=""
                  />
               </a>
            </Link>
         </div>
         <div className="box-text">
            <h3><Link href={url}><a>{title && title}</a></Link></h3>

            <p className="description">{gearbox && `${(gearboxes[gearbox] || '')} ·`} {energy && `${energies[energy] || ''} ·`} {year && `${year} ·`} {mileage && `${numberFormat(mileage)} km`}</p>
            {(isNew && className === 'small-width') && <ButtonIsNew className="button-isnew">Neuf /0km</ButtonIsNew>}

            <div className="box-prix">
               <p className="prix">{price && numberFormat(price)} €</p>
               {className === 'small-width' && priceDiscounted  && <p className="prix-barre">{priceDiscounted} €</p>}
            </div>
         </div>
      </Card>
   );
};

CardCar.propTypes = {
   _id: PropTypes.string,
   className: PropTypes.string,
   brand: PropTypes.string,
   energy: PropTypes.string,
   gearbox: PropTypes.string,
   isNew: PropTypes.bool,
   model: PropTypes.string,
   mileage: PropTypes.number,
   price: PropTypes.number,
   prices: PropTypes.object,
   title: PropTypes.string,
   thumbnail: PropTypes.string,
   year: PropTypes.string,
   pictures320: PropTypes.array,
   pictures360: PropTypes.array,
   pictures420: PropTypes.array,
   pictures480: PropTypes.array,
   pictures660: PropTypes.array,
};

export default CardCar;

export const Card = styled.div`
   position: relative;
   min-height: 356px;
   width: 367px;
   user-select: none;
   outline: 0;
   cursor: pointer;
   border-radius: 4px;
   box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.15);
   overflow: hidden;
   &:hover, &:focus {
      box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.2);
   }
   &.small-width {
      width: 100%;
      min-height: auto;
      .box-prix {
         left: auto;
         right: 20px;
         bottom: 15px;
      }
      .box-text {
         height: 205px;
      }
      .prix {
         text-align: right;
         float: right;
      }
   }
   .promo {
      position: absolute;
      padding: 3px 0 0 6px;
      display: flex;
      align-item: center;
      margin-top: 15px;
      font-size: 17px;
      font-weight: 700;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      width: 50px;
      height: 30px;
      color: white;
      text-align: center;
      background ${theme.orange100};
      content: '';
      z-index: 2;
   }
   .en-magasin {
      position: absolute;
      top: 20px;
      right: -40px;
      display: flex;
      align-item: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 600;
      width: 145px;
      height: 20px;
      background: ${theme.blue100};
      color: white;
      text-align: center;
      transform: rotate(41.94deg);
      z-index: 2;
   }
   .box-prix {
      position: absolute;
      left: 16px;
      bottom: 5px;
   }
  .box-text {
      background: white;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: 12px 16px 23px;
   }
   a {
      color: black;
      text-decoration: none;
   }
   h3, p {
      margin: 0;
      padding: 0;
   }
   .description {
      padding: 5px 0;
      font-size: 14px;
      font-weight: 600;
      color: ${theme.grey100};
      text-transform: capitalize;
   }
   .prix {
      padding-bottom: 7px;
      font-size: 26px;
      font-weight: 700;
      letter-spacing: -0.04em;
   }
   .prix-barre {
      padding: 10px 0 0 0;
      text-align: right;
      float: none;
      text-decoration: line-through;
      font-size: 16px;
   }
   .button-isnew {
      position: absolute;
      bottom: 20px;
      float: left;
   }
   ${medias.min(1400)} {
      &.small-width {
         min-height: 366px;
         .box-text {
            height: auto;
         }
         .prix-barre {
            padding: 10px 10px 5px 0;
            float: right;
         }
         .prix {
            padding-bottom: 0;
         }
      }
   }
   ${medias.min(750)} {
      &.small-width {
         max-width: 335px;
      }
   }
   @media (max-width: 750px) {
      &.small-width {
         .box-text {
            height: 150px;
         }
         .prix {
            padding-bottom: 0;
         }
         .prix-barre {
            padding: 10px 10px 0 0;
            float: right;
         }
      }
   }
`