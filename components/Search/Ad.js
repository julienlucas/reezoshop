import Image from 'next/image';
import styled from 'styled-components';

const SearchAd = () => {
   return (
      <Ad>
         <div className="box-text">
            <div>
            <p>Trouvez plus d'annonces sur reezocar.com</p>
            <button className="btn btn-secondary">Voir plus d'annonces</button>
            </div>
         </div>
         <Image
            src="/images/ad-voitures.png"
            width={300}
            height={235}
            layout="responsive"
         />
      </Ad>
   )
};

export default SearchAd;

export const Ad = styled.div`
   margin-top: 25px;
   border-radius: 4px;
   overflow: hidden;
   max-height: 240px;
   .box-text {
      position: absolute;
      width: 300px;
      height: 235px;
      display: flex;
      align-items: center;
      z-index: 2;
      .btn-secondary {
         margin: 0 36px;
         width: calc(100% - 72px);
         padding: 0;
         font-size: 14px;
      }
      p {
         width: 100%;
         padding: 0 10px 15px 10px;
         font-size: 24px;
         font-weight: 700;
         color: white;
         text-align: center;
      }
   }
}`