import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';

import useShop from '../hooks/useShop';

import ReezocarLogo from '../svgs/logo-header.svg';

import requireStatic from '../utils/require-static';

const HomePage = ({ shop }) => {
   const shopFromContext = useShop();

   console.log('shopFromContext', shopFromContext);

   return (
      <div>
         <div>{`From getInitialProps : ${shop.subDomain}`}</div>
         <div>{`From useShop(Context) : ${shopFromContext.subDomain}`}</div>
         <ReezocarLogo />
         <Image height={1512} width={5760} src={requireStatic('img/not-found.png')} />
      </div>
   );
};

HomePage.getInitialProps = ({ shop }) => {
   console.log('shop', shop);

   return { shop };
};

HomePage.propTypes = {
   shop: PropTypes.object.isRequired,
};

export default HomePage;
