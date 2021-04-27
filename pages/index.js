import React from 'react';
import Image from 'next/image';

import ReezocarLogo from '../svgs/logo-header.svg';

import requireStatic from '../utils/require-static';

const HomePage = () => (
   <div>
      <ReezocarLogo />
      <Image height={1512} width={5760} src={requireStatic('img/not-found.png')} />
   </div>
);

export default HomePage;
