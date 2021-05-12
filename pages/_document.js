import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
   static async getInitialProps(ctx) {
   const sheet = new ServerStyleSheet();
   const originalRenderPage = ctx.renderPage;

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

         const initialProps = await Document.getInitialProps(ctx);

         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#f29301" name="theme-color" />
          <meta content="#f29301" name="msapplication-TileColor" />
          <meta
            content="/favicons/browserconfig.xml"
            name="msapplication-config"
          />
          <link rel="icon" href="/favicon.ico" />
          <link href="/favicons/favicon-16x16.png" rel="shortcut icon" />
          <link href="/favicons/site.webmanifest" rel="manifest" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:wght@400,500,600,700,800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin=""
          />
          <link
            href="/favicons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="192x192"
          />
          <link
            href="/favicons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/favicons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#f29301"
            href="/favicons/safari-pinned-tab.png"
            rel="mask-icon"
          />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  };
};

export default MyDocument;
