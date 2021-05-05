import React, { createContext, useContext } from 'react';

const useShop = () => {
   let shop = useContext(ShopContext);

   console.log('useShop', shop);

   return { ...shop };
};

export default useShop;

export const withShop = ({ children, shop }) => (
   <ShopContext.Provider value={{ ...shop }}>{children}</ShopContext.Provider>
);

withShop.getProps = ({ req, res }) => {
   let subdomain;
   try {
      subdomain = req.headers.host.split('.')[0];
      if (subdomain === 'localhost:3000') {
         subdomain = 'lille'
      }
   } catch (err) {
      res.status(500).json({ err });
   };

   return { shop: { subdomain } };
};

const ShopContext = createContext({
   subDomain: 'Marseille'
});