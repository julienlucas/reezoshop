import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import hocs from '../hooks/hocs';
import { GlobalStyles } from '../constants/global-styles';
import { theme } from '../constants/theme';

class RZSApp extends App {
   static async getInitialProps({ Component, ctx }) {
      // HOCs props
      const hocProps = getHocProps({ ...ctx });


      let pageProps = {};
      if (Component.getInitialProps) {
         pageProps = await Component.getInitialProps({ ...ctx, ...hocProps });
      }

      return { pageProps, hocProps };
   }

   render() {
      const { Component, hocProps, pageProps, router } = this.props;
      const { shop, shopKey } = hocProps.shop;
      const path = router.route;

      const cpnt = (
         <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
               <SEO path={path} shop={shop} shopKey={shopKey} />
               <Head />

               {path === '/_error' ? <Component hocProps={hocProps} {...pageProps} /> :
                  <Layout cityShop={hocProps.shop.host} path={pageProps.path}>
                     <Component hocProps={hocProps} {...pageProps} />
                  </Layout>}
            </ThemeProvider>
         </>
      );

      return hocs.reduce((children, hoc) => hoc({ children, ...hocProps }), cpnt);
   }
}

export default RZSApp;

const getHocProps = (ctx) =>
   hocs.map(({ getProps }) => getProps && getProps(ctx)).reduce((a, b) => ({ ...a, ...b }), {});