import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import NextImageLazy from '../utils/imgLazy';
import requireStatic from '../utils/require-static';

const CardBrand = ({ brand, ...cardProps }) => {
  return (
    <StyledCardBrand {...cardProps}>
      <div className="logo">
        <NextImageLazy
          src={requireStatic(brand.picture)}
          alt=""
          width={50}
          height={50}
          layout="fixed"
        />
      </div>
      <div className="box-text">
        <strong>{brand.nom}</strong>
        <p className="prix">à partir de 5000€</p>
      </div>
    </StyledCardBrand>
  );
};

CardBrand.propTypes = {
  brand: PropTypes.object.isRequired
};
export default CardBrand;

const StyledCardBrand = styled.div(({ styles = {}, theme, ...props }) => {
  return {
    padding: '13px 37px',
    height: 154,
    width: 'auto',
    userSelect: 'none',
    outline: 0,
    cursor: 'pointer',
    border: `0.867528px solid ${theme.grey200}`,
    borderRadius: 3.47011,
    'p, strong': {
      position: 'relative',
      margin: '0 auto',
      display: 'table',
      padding: 0,
      textAlign: 'center',
      width: '100%',
      fontSize: 14,
      lineHeight: 1,
      color: theme.black
    },
    'strong': {
      marginBottom: 3,
      fontWeight: '600',
      fontSize: 18
    },
    '.logo': {
      height: 80,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      'img': {
        width: '100%',
        maxHeight: 50,
        maxWidth: 95,
        objectFit: 'fill'
      }
    },
    ...(props.gridBigWidth ? cardFormat('gridBigWidth', theme) : {}),
    ...styles,
   }
});

const cardFormat = (format) => ({
  gridBigWidth: {
    position: 'relative',
    padding: '15px 20px',
    width: 'auto',
    maxHeight: 215,
    height: '100%',
    '.prix': {
      display: 'none'
    },
    '.logo': {
      padding: '35px 0 45px',
      div: {
        width: '100%',
        height: 80,
        display: 'flex',
        justifyContent: 'center'
      },
      img: {
        width: '100%',
        maxHeight: 50,
        maxWidth: 95,
        objectFit: 'fill'
      }
    },
    '.logo, .box-text': {
      position: 'relative',
      left: 0,
      right: 0,
      margin: '0 auto'
    },
    '.box-text': {
      position: 'absolute',
      bottom: 30
    },
    '@media screen and (min-width: 768px)': {
      padding: '13px 0',
      width: 'auto',
      maxHeight: 215,
      height: '100%'
    },
    '@media screen and (min-width: 640px)': {
      '.logo': {
        padding: '40px 0 90px',
        'img': {
          height: '100%',
          maxHeight: 80,
          maxWidth: 140
        }
      }
    }
  }
}[format])