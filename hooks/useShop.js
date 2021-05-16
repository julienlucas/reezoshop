import React, { createContext, useContext } from 'react';

import { shops } from '../constants/shops';
import { getShopFromHost, shopToDomain } from '../utils/url';

const useShop = () => {
   const shop = useContext(ShopContext);

   const onChangeShop = (shopKey) => {
      const domain = shopToDomain({ currentShopKey: shop.shopKey, host: shop.host, shopKey });
      window.location.href = `http://${domain}/`;
   };

   return { ...shop, onChangeShop };
};

export default useShop;

export const withShop = ({ children, shop }) => (
   <ShopContext.Provider value={{ ...shop }}>{children}</ShopContext.Provider>
);

withShop.getProps = ({ req, shop }) => {
   if (req) {
      let { host } = req.headers;

      // if (host === 'localhost:3000') host = 'lille';
           host = 'lille';
      const shopKey = getShopFromHost(host);
      const currentShop = shops[shopKey];

      return { shop: { host, shop: currentShop, shopKey, shops } };
   }

   if (!shop) {
      let { hostname: host } = window.location;
      // if (host === 'localhost:3000') host = 'lille';
      host = 'lille';
      const shopKey = getShopFromHost(host);
      const currentShop = shops[shopKey];

      return { shop: { host, shop: currentShop, shopKey, shops } };
   }

   return { shop };
};

const ShopContext = createContext({
   currentShop: shops.lille,
   shops,
});