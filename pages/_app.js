import React from 'react';
import App from 'next/app';

import hocs from '../hooks/hocs';

class RZSApp extends App {
   static async getInitialProps({ Component, ctx }) {
      // HOCs props
      const hocProps = getHocProps({ ...ctx });

      console.log('hocProps', hocProps);

      let pageProps = {};
      if (Component.getInitialProps) {
         pageProps = await Component.getInitialProps({ ...ctx, ...hocProps });
      }

      return { pageProps, hocProps };
   }

   render() {
      const { Component, hocProps, pageProps } = this.props;

      const cpnt = (
         // <Layout> // Peut-etre passer par ici pour le Layout
         <Component hocProps={hocProps} {...pageProps} />
         // </Layout>
      );

      return hocs.reduce((children, hoc) => hoc({ children, ...hocProps }), cpnt);
   }
}

export default RZSApp;

const getHocProps = (ctx) =>
   hocs.map(({ getProps }) => getProps && getProps(ctx)).reduce((a, b) => ({ ...a, ...b }), {});
