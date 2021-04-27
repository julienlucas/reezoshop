import React from 'react';

import ReezocarLogo from '../svgs/logo-header.svg';

import requireStatic from '../utils/require-static';

const HomePage = () => (
   <div>
      <ReezocarLogo />
      <img src={requireStatic('img/not-found.png')} />
   </div>
);

export default HomePage;
