// import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useRef, useEffect, useState } from 'react';

// important :
// Next/image donne une erreur 400 avec les images urls de l'API (de ce type: https://pict1.reezocar.com/images/480/autosuche.de/RZCASCDEB9A1BBBF01A7/VOLKSWAGEN-UP!-00.jpg)
// Ce qui n'est pas le cas avec d'autres urls externes.
// Le 'autosuche.de' posant peut-être problème.
//
// Composant à recréer avec next/image lorsque le bug chez Next/Vercel sera corrigé

const NextImageLazy = ({ alt, height, width, src, srcSet }) => {
   const domRef = useRef();
   const [smoothLoad, setSmoothLoad] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {

            if (entry.isIntersecting) {
               setSmoothLoad(true);
               observer.unobserve(domRef.current);
            }

         });
      });
      observer.observe(domRef.current);
  }, []);

   return (
      <NextImage className={smoothLoad ? 'smooth-load' : ''} ref={domRef}>
         <img
            alt={alt}
            width={width}
            height={height}
            src={src}
            srcSet={srcSet}
         />
      </NextImage>
   )
};

export default NextImageLazy;

NextImageLazy.propTypes = {
   alt: PropTypes.string,
   height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   src: PropTypes.string.isRequired,
   srcSet: PropTypes.string
};

export const NextImage = styled.div`
   opacity: 0;
   visibility: hidden;
   transition: all .5s ease-in-out;
   img {
      display: none;
      object-fit: cover;
   }
   &.smooth-load {
      opacity: 1;
      visibility: visible;
      img {
         display: block;
      }
   }
`
