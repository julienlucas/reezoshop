import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { makeCarURL } from '../utils/url';
import NextImageLazy from '../utils/imgLazy';
import { medias, theme } from '../constants/theme';

const CardCar = ({ _id, className, brand, energy, isNew, gearbox, model, mileage, thumbnail, price, year }) => {
   const url = makeCarURL({ _id, brand, isNew, model, year })
   thumbnail = "https://picsum.photos/480/270";

   // Ajout d'un espace tous les 3 chiffres
   const numberFormat = num => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
   };

   return (
      <Card className={className}>
         <div className="thumbnail">
            {className === 'small-width' && <>
               <div className="promo">-20%</div>
               <div className="en-magasin">En magasin</div>
            </>}

            <Link href={`annonce/${url}`}>
               <a>
                  <NextImageLazy
                     src={thumbnail}
                     width={367}
                     height={205}
                     layout="responsive"
                     alt=""
                  />
               </a>
            </Link>
         </div>
         <div className="box-text">
            <h3>
               <Link href="/">
                  <a>{brand && brand} {model && model}</a>
               </Link>
            </h3>

            <p className="description">{gearbox && `${gearbox} ·`} {energy && `${energy} ·`} {year && `${year} ·`} {mileage && `${numberFormat(mileage)} km`}</p>
            {isNew && <button className="btn btn-neuf-occas" type="button">Neuf /0km</button>}

            <div className="box-prix">
               <p className="prix">{price && numberFormat(price)} €</p>
               {className === 'small-width' && <p className="prix-barre">{price && numberFormat(price)} €</p>}
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
   thumbnail: PropTypes.string,
   year: PropTypes.string
};

export default CardCar;

export const Card = styled.div`
   position: relative;
   min-height: 336px;
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
      .box-text {
         height: 150px;
      }
      .prix {
         text-align: right;
         float: right;
      }
   }
   .promo {
      position: absolute;
      padding: 3px 0 0 3px;
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
      right: 16px;
      bottom: 20px;
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
   .btn-neuf-occas {
      position: absolute;
      bottom: 20px;
      float: left;
      font-size: 14px;
      height: 26px;
      background: white;
      border: 1px solid ${theme.blue100};
      color: ${theme.blue100};
      padding: 0 5px;
   }
   ${medias.min(1400)} {
      &.small-width {
         min-height: 336px;
         .box-text {
            height: auto;
         }
         .prix-barre {
            padding: 10px 10px 0 0;
            float: right;
         }
         .prix {
            padding-bottom: 0;
         }
      }
   }
   ${medias.min(1100)} {
      .btn-neuf-occas {
         padding: 0 20px;
      }
   }
   @media (max-width: 990px) {
      .btn-neuf-occas {
         padding: 0 20px;
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