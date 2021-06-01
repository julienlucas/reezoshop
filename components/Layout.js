import PropTypes from 'prop-types';
import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children, layoutProps, path }) => {
   const preventDragHandler = (e) => {
      e.preventDefault()
   };

   return (
      <div onDragStart={(e) => preventDragHandler(e)}>
         <Header path={path} headerProps={layoutProps?.headerProps} />
         <main>{children}</main>
         <Footer />
      </div>
   );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  layoutProps: PropTypes.object,
  path: PropTypes.string
};

export default Layout;