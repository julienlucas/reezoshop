import Link from 'next/link';
import NextImageLazy from '../utils/imgLazy';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../constants/theme';
import { useRouter } from 'next/router';

function CardCar({ data }) {
   const router = useRouter();

   // Ajout d'un espace tous les 3 chiffres
   const numberFormat = (num) => {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
   };

   return (
      <Card className={router.pathname !== '/' ? 'small-width' : ''}>
         <div className="thumbnail">
            {router.pathname !== '/' && <>
               <div className="promo">-20%</div>
               <div className="en-magasin">En magasin</div>
            </>}

            <Link href="/">
               <a>
                  <NextImageLazy
                     src={data.photos && data.photos[0]}
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
                  <a>{data.marque && data.marque} {data.modele && data.modele} {data.complementInfos && data.complementInfos}</a>
               </Link>
            </h3>
            <p className="description">{data.boite && data.boite + ' ·'} {data.energie && data.energie + ' ·'} {data.annee && data.annee + ' ·'} {data.kilometrage && numberFormat(data.kilometrage) + ' km'}</p>
            {router.pathname !== '/' && <button className="btn btn-neuf-occas">Neuf /0km</button>}
            <p className="prix">{data.prix && numberFormat(data.prix)} €</p>
            {router.pathname !== '/' && <p className="prix-barre">{data.prix && numberFormat(data.prix)} €</p>}
         </div>
      </Card>
   );
};

export default CardCar;

CardCar.propTypes = {
   data: PropTypes.Object
};

export const Card = styled.div`
   position: relative;
   height: 336px;
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
      width: 335px;
      .prix {
         text-align: right;
         float: right;
      }
   }
   .promo {
      position: absolute;
      padding-top: 3px;
      display: flex;
      align-item: center;
      margin-top: 15px;
      font-size: 17px;
      font-weight: 700;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      width: 45px;
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
  .box-text {
      background: white;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: 12px 16px 23px;
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
         color: ${theme.grey100}
      }
      .prix {
         font-size: 26px;
         font-weight: 700;
         letter-spacing: -0.04em;
      }
      .prix-barre {
         padding: 10px 10px 0 0;
         text-align: right;
         float: right;
         text-decoration: line-through;
         font-size: 16px;
      }
      .btn-neuf-occas {
         float: left;
         font-size: 14px;
         height: 26px;
         padding: 0 20px;
         background: white;
         border: 1px solid ${theme.blue100};
         color: ${theme.blue100};
      }
   }
`