import React from 'react';
import PropTypes from 'prop-types';

import { LocalBusinessJsonLd, NextSeo } from 'next-seo';

import requireStatic from '../utils/require-static';

const InjectSEO = ({ path, shop, shopKey }) => {

   let title;
   let description;
   if (path === '/') {
      title = `${`Agence ` + shop.headline} vente de voitures neuves et d'occasion - ${shop.name} Métropole` //eslint-disable-line
      description = `Trouvez et achetez votre voiture d’occasion à l’agence ${shop.headline} métropole. Rencontrez nos conseillers, choisissez votre nouveau véhicule en ligne, prenez rendez-vous et venez simplement découvrir les réductions sur les prix des modèles neufs et d’occasion`
   }

   return (
      <>
         <NextSeo
            canonical={`https://${shopKey}.reezocar.com${path}`}
            description={description}
            title={title}
            openGraph={{
               type: 'website',
               locale: 'fr_FR',
               url: 'https://www.reezoshop.com',
               title,
               description,
               images: [{
                  url: requireStatic('images/header-home.png'),
                  width: 900,
                  height: 800,
                  alt: description,
               }],
               site_name: 'reezoshop.com'
            }}
            twitter={{
               handle: '@Reezocar',
               site: '@Reezocar',
               cardType: 'summary_large_image'
            }}
            additionalLinkTags={[{
               href: 'https://fonts.gstatic.com/',
               rel: 'preconnect',
               crossOrigin: ''
            },
            {
               href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:wght@400,500,600,700,800&display=swap',
               rel: 'stylesheet'
            },
            {
               href: requireStatic('favicons/apple-touch-icon.png'),
               rel: 'apple-touch-icon',
               sizes: '192x192',
            },
            {
               href: requireStatic('favicons/favicon-32x32.png'),
               rel: 'icon',
               sizes: '32x32',
               type: 'image/png'
            },
            {
               href: requireStatic('favicons/favicon-16x16.png'),
               rel: 'icon',
               sizes: '16x16',
               type: 'image/png'
            },
            {
               href: requireStatic('favicons/favicon-16x16.png'),
               rel: 'shortcut icon'
            },
            {
               href: requireStatic('favicons/favicon.ico'),
               rel: 'icon',
            },
            {
               href: requireStatic('favicons/safari-pinned-tab.png'),
               color: '#f29301',
               type: 'mask-icon'
            }]}
            additionalMetaTags={[{
               content: 'width=device-width, initial-scale=1',
               name: 'viewport'
            },
            {
               content: 'IE=edge',
               httpEquiv: 'X-UA-Compatible'
            }, {
               name: 'msapplication-TileImage',
               content: requireStatic('favicons/mstile-150x150.png'),
            }, {
               name: 'msapplication-TileColor',
               content: '#f29301'
            }, {
               name: 'theme-color',
               content: '#f29301'
            }]}
         />

         <LocalBusinessJsonLd
            type="AutoDealer"
            brand="Reezocar"
            legalName="Reezocorp"
            name={shop.headline}
            url={`https://${shopKey}.reezocar.com`}
            sameAs={[
               "https://www.reezocar.com",
               "https://www.reezocar.be"
            ]}
            image={requireStatic('favicons/favicon-32x32.png')}
            potentialAction={{
               type:"SearchAction",
               target:"https://www.reezocar.com/search/{search Term}.html",
               "query-input":"required name=searchTerm"
            }}
            description={`Vente de véhicules d'occasion et neuf/0km. Trouvez et achetez votre nouvelle voiture à l’agence ${shop.headline} Métropole`}
            address={{
               type: "PostalAddress",
               streetAddress: shop.address,
               addressLocality: shop.locality,
               addressRegion: shop.region,
               postalCode: shop.postalCode,
               addressCountry: shop.country
            }}
            email={shop.email}
            geo={{
               type: "GeoCoordinates",
               latitude: shop.geo.lat,
               longitude: shop.geo.lng
            }}
            hasMap={`https://www.google.com/maps/d/u/0/viewer?mid=1Ql7qoPBR_ofjnjThNR3PNzCMySs_Y2Uq&hl=fr&ll=50 ${shop.geo.lat}%2C${shop.geo.lng}4&z=13`}
            openingHours={[{
               opens: '09:00',
               closes: '18:00',
               dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
               ]
            }]}
            telephone={shop.phone}
            contactPoint={{
               type: "ContactPoint",
               telephone: shop.phone,
               contactType: "customer support",
               areaServed: ["FR","BE"],
               availableLanguage: ["English","French","Dutch","German"]
            }}
            priceRange="€"
            aggregateRating={{
               type: "AggregateRating",
               itemreviewe: "www.reezocar.com",
               sameAs: [
                  'https://www.google.com/search?q=reezocar&ie=UTF-8#lrd=0x47e67aefba2f290d:0x1588767f84358c4 5,1',
                  'https://www.facebook.com/pg/Reezocar/reviews/',
               ],
               bestRating: 5,
               ratingValue: shop.google.note,
               reviewCount: shop.google.avis
            }}
         />
      </>
   )
};

InjectSEO.propTypes = {
   path: PropTypes.string.isRequired,
   shop: PropTypes.object.isRequired,
   shopKey: PropTypes.string.isRequired
};

export default InjectSEO;