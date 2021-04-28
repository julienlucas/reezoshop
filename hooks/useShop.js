import React, { createContext, useContext } from 'react';

const useShop = () => {
   const shop = useContext(ShopContext);

   console.log('useShop', shop);
   // Faire ce que l'on veut du subDomain

   return { ...shop };
};

export default useShop;

export const withShop = ({ children, shop }) => (
   <ShopContext.Provider value={{ ...shop }}>{children}</ShopContext.Provider>
);

withShop.getProps = ({ req }) => {
   console.log('req.hostname', req.hostname);

   // Récupérer le subDomain

   // return { shop: { subDomain: 'bordeaux' } };
   return { shop: { subDomain: 'lille' } };
};

const ShopContext = createContext({
   subDomain: 'lille',
});
