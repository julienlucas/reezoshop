import PropTypes from 'prop-types';
import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children, nav, path }) => {
   const preventDragHandler = (e) => {
      e.preventDefault();
   };

   return (
      <div onDragStart={(e) => preventDragHandler(e)}>
         <Header path={path} nav={nav}/>
         <main>{children}</main>
         <Footer />
      </div>
   );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  nav: PropTypes.array.isRequired,
  path: PropTypes.string
};

export default Layout;