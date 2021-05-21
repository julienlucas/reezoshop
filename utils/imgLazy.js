import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useState } from 'react';

const NextImageLazy = ({ alt, layout, width, height, src }) => {
   const [smoothLoad, setSmoothLoad] = useState(false);

   const isReady = () => {
      setSmoothLoad(true);
   };

   return (
      <NextImage className={smoothLoad ? 'smooth-load' : ''}>
         <Image
            alt={alt}
            height={height}
            width={width}
            layout={layout}
            onLoad={isReady}
            src={src}
         />
      </NextImage>
   )
};

NextImageLazy.propTypes = {
   alt: PropTypes.string,
   height: PropTypes.number,
   layout: PropTypes.string.isRequired,
   src: PropTypes.string.isRequired,
   width: PropTypes.number
};

export default NextImageLazy;

export const NextImage = styled.div`
   opacity: 0;
   visibility: hidden;
   transition: all .5s ease-in-out;
   &.smooth-load {
      opacity: 1;
      visibility: visible;
   }
`