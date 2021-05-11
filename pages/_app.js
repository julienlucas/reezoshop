import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import hocs from '../hooks/hocs';
import SEO from '../next-seo.config';
import { GlobalStyles } from '../constants/global-styles';
import { theme } from '../constants/theme';

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
         <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
               <NextSeo {...SEO} />
               <Head />
               <Component hocProps={hocProps} {...pageProps} />
            </ThemeProvider>
         </>
      );

      return hocs.reduce((children, hoc) => hoc({ children, ...hocProps }), cpnt);
   }
}

export default RZSApp;

const getHocProps = (ctx) =>
   hocs.map(({ getProps }) => getProps && getProps(ctx)).reduce((a, b) => ({ ...a, ...b }), {});