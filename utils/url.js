import { defaultShopKey } from '../constants/shops';
import { __UAT__ } from '../constants/env';

export const getShopFromHost = (host) => domainToShop(host) || defaultShopKey;

// En uat les urls est composee comme cela : reezoshop-paris-dev
export const domainToShop = (host) => {
   const subDomain = (host || '').split('.')[0];
   return (subDomain || '').replace('reezoshop-', '').split('-')[0];
};

//
export const shopToDomain = ({ currentShopKey, host, shopKey }) =>
   (host || '').replace(currentShopKey, shopKey);

export const makeCarURL = ({ _id, brand, isNew, model, year }) => {
   brand = brand?.toLowerCase().trim().replace(/ /g,'')
   model = model?.toLowerCase().trim().replace(/ /g,'')
   year = year?.toLowerCase().trim()
   isNew = isNew === true ? 'neuve-' : isNew === false ? 'occasion-' : ''

   return `annonce-${isNew}${brand !== null && brand}-${model !== null && model}-${year !== null && year}-${_id}`;
};