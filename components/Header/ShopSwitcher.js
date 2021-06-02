import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import Button from '../Buttons/Button';
import List from '../_main/List';

import ArrowBottomIcon from '../../svgs/arrow-bottom.svg';

import useShop from '../../hooks/useShop';

import { shopToDomain } from '../../utils/url';

import { theme, radius } from '../../constants/theme';

const ShopSwitcher = () => {
   const [opened, setOpened] = useState(false);
   const { host, shops, shopKey: currentShopKey } = useShop();
   const list = useRef();

   useEffect(() => {
      if (opened) document.addEventListener('click', handleClick);

      return () => {
         if (opened) document.removeEventListener('click', handleClick);
      };
   }, [opened]);

   const handleClick = (e) => {
      if (opened && list.current && !list.current.contains(e.target)) setOpened(false);
   };

   return (
      <StyledShopSwitcher>
         <Button onClick={() => setOpened(true)} styles={buttonStyles}>
            {shops[currentShopKey].name}
            <ArrowBottomIcon className="arrow-bottom-icon" />
         </Button>
         {opened ? (
            <List styles={listStyles(opened)} ref={list}>
               {Object.keys(shops).map((shopKey, key) => (
                  <li key={key}>
                     <a
                        className="shop-switcher-link"
                        href={`http://${shopToDomain({
                           currentShopKey,
                           host,
                           shopKey,
                        })}`} //! http temporaire... En attendant d'ajouter express pour récupérer req.protocol dans useUrl
                     >
                        {shops[shopKey].headline}
                     </a>
                  </li>
               ))}
            </List>
         ) : null}
      </StyledShopSwitcher>
   );
};

export default ShopSwitcher;

export const StyledShopSwitcher = styled.div(({ theme }) => {
   return {
      position: 'relative',
      '.arrow-bottom-icon': {
         height: 11,
         marginLeft: 7,
         width: 19,
      },
      li: {
         borderTop: `1px solid ${theme.colors.grey200}`,
         '&:first-child': {
            borderTop: 0,
         },
      },
      'li > .shop-switcher-link': {
         alignItems: 'center',
         display: 'flex',
         height: 48,
         paddingLeft: 20,
      },
   };
});

const buttonStyles = {
   alignItems: 'center',
   backgroundColor: 'transparent',
   color: theme.colors.black,
   display: 'flex',
   fontSize: 20,
   fontWeight: theme.fontWeights.semiBold,
   height: 36,
   left: 240,
   marginLeft: 0,
   marginRight: 0,
   paddingLeft: 5,
   paddingRight: 35,
   position: 'absolute',
   top: 30,
   hover: {
      backgroundColor: 'transparent',
   },
};

const listStyles = (opened) => ({
   backgroundColor: '#FFF',
   borderRadius: radius.normal,
   boxShadow: 'rgb(0 0 0 / 15%) 1px 2px 13px',
   display: opened ? 'block' : 'none',
   left: 240,
   position: 'absolute',
   top: 70,
   width: 270,
});
