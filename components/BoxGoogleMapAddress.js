import MarkerIcon from '../svgs/marker.svg';
import styled from 'styled-components';
import { theme } from '../constants/theme';

function BoxGoogleMapAddress({ data }) {
   return (
      <div className="box-address">
         <MarkerIcon className="indicator" />
         <div className="address">
            <h3 className="big">{data.headline}</h3>
            <p>{data.adresse}</p>

            <RatingStars>
               <span>4,2</span>
               <div className={data.googleNote > '1' ? 'active' : ''}>★</div>
               <div className={data.googleNote > '2' ? 'active' : ''}>★</div>
               <div className={data.googleNote > '3' ? 'active' : ''}>★</div>
               <div className={data.googleNote > '4' ? 'active' : ''}>★</div>
               <div className={data.googleNote > '5' ? 'active' : ''}>★</div>
               <span>sur {data.googleAvis} avis Google</span>
            </RatingStars>

         </div>
      </div>
   );
};

export default BoxGoogleMapAddress;

export const RatingStars = styled.div`
   color: ${theme.grey100};
   font-size: 16px;
   font-weight: 600;
   * {
      display: inline-block;
   }
   div {
      top: 1px;
      color: ${theme.grey400};
      transition: color .4s;
      cursor: pointer;
      &.active, &:hover, &:hover ~ div, &:focus, &:focus ~ div	{
         color: orange;
      }
   }
`