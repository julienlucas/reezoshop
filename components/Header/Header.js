import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

import ButtonPhone from '../Buttons/ButtonPhone';
import Menu from './Menu';
import Select from '../Select';

import requireStatic from '../../utils/require-static';
import useShop from '../../hooks/useShop';
import { medias, theme } from '../../constants/theme';

const Header = ({ path }) => {
  const { onChangeShop, shops, shop, shopKey } = useShop();
  const [scroll, setScroll] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const openOverlay = () => {
    if (window.innerWidth <= 990) setOverlay(!overlay);
  };

  const onMenu = (boolean) => {
    if (window.innerWidth <= 990) setMenu(boolean)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <StyledHeader>
      <StyledNav
        className={`${scroll ? 'scroll' : ''} ${
          path !== '/' ? 'bottomShadow' :
          menu ? 'menu-open' : ''
        }`}
      >
        <div
          className={`overlay-mobile ${overlay && !menu ? 'show' : 'hide'}`}
          onClick={() => setOverlay(false)}
        />
        <div className={`logo ${menu ? 'menu-open' : ''}`}>
          <Link href="/">
              <a>
                <Image
                  src={requireStatic('images/logo-reezocar.svg')}
                  alt="reezocar"
                  width={244}
                  height={66}
                  layout="responsive"
                />
              </a>
          </Link>
        </div>

        <Select
          agencies
          className={menu ? 'menu-open' : ''}
          defaultValue={shopKey}
          onChange={onChangeShop}
          onClick={openOverlay}
          options={Object.keys(shops).map((shopKey) => ({
            label: shops[shopKey].headline,
            value: shopKey
          }))}
        />
      </StyledNav>

      <Menu headline={shop?.headline} onIsVisible={onMenu} phone={shop?.phone} phoneFormated={shop?.phoneFormated} />

      {path === '/' && (
        <div className="bottom-buttons-nav">
          <ButtonPhone className="button-phone">
            <a href={`tel:${shop?.phone}`} rel="noopener noreferrer nofollow" target="_blank">
              <span>{shop?.phoneFormated}</span>
            </a>
          </ButtonPhone>
        {/* <Button secondary className="button-rdv">Prendre rendez-vous</Button> */}
      </div>)}
    </StyledHeader>
  );
};

Header.propTypes = {
  path: PropTypes.string,
};

export default Header;

export const StyledHeader = styled.header`
  .bottom-buttons-nav {
    position: fixed;
    bottom: 0;
    z-index: 6;
    height: 87px;
    background: white;
    padding: 20px;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
    .button-phone {
      float: none;
      margin: auto;
      width: 100%;
      z-index: 8;
    }
    .button-rdv {
      position: absolute;
      display: block;
      bottom: 20px;
      left: 20px;
      width: calc(50vw - 26px);
      padding: 0;
    }
  }
  ${medias.min990} {
    .bottom-buttons-nav {
      right: 0;
      bottom: auto;
      background: transparent;
      box-shadow: 0px -4px 10px rgba(0, 0, 0, 0);
      .button-phone {
        margin: 4px 75px 0 0;
        width: auto;
        float: right;
      }
      .button-rdv {
        display: none;
      }
    }
  }
  @media (max-width: 990px) {
    .bottom-buttons-nav {
      width: 100%
    }
  }
`

export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 58px;
  top: 0;
  z-index: 8;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: all .3s ease-out;
  .overlay-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: '';
    z-index: 6;
    &.show {
      visibility: visible;
      background: rgba(0, 0, 0, 0.3);
    }
    &.hide {
      visibility: hidden;
      background: rgba(0, 0, 0, 0);
    }
  }
  &.scroll {
    background: white;
    box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.12);
  }
  &.bottomShadow {
    border: 1px solid ${theme.grey700};
    box-shadow: 1px 2px 13px rgba(0, 0, 0, 0);
  }
  &.menu-open {
    box-shadow: none;
    background: transparent;
  }
  .logo {
    position: relative;
    top: 8px;
    float: left;
    cursor: pointer;
    * {
      width: 163px;
      height: 44px;
    }
  }
  ${medias.min990} {
    z-index: 6;
    &.bottomShadow {
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.12);
    }
  }
  @media (max-width: 780px) {
    .logo.menu-open {
      * {
        filter: grayscale(1) brightness(300%);
      }
    }
  }
  ${medias.min768} {
    height: 92px;
    .logo {
      top: 16px;
      * {
        width: 244px;
        height: 66px;
      }
    }
  }
`;