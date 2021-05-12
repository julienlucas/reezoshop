import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Hero from './Hero';
import Mobile from './Mobile';
import Select from '../Select';

import requireStatic from '../../utils/require-static';
import useShop from '../../hooks/useShop';
import { theme } from '../../constants/theme';

const Nav = ({ path }) => {
  const { onChangeShop, shops, shop, shopKey } = useShop();
  const router = useRouter();
  const [scroll, setScroll] = useState(null);
  const [top, setTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const openOverlay = () => {
    if (window.innerWidth <= 990) setOverlay(!overlay);
  };

  const onMobileMenu = (boolean) => {
    if (window.innerWidth <= 990) setMobileMenu(boolean)
  };

  useEffect(() => {
    // Au scroll changement du style de la nav
    const el = document.querySelector('nav')
    setTop(el.offsetTop)
    setHeight(el.offsetHeight)
    window.addEventListener('scroll', handleScroll)

		if (scroll > top) {
      document.body.style.paddingTop = `${height}px`;
    } else {
      document.body.style.paddingTop = 0;
    };

  }, [height,top,scroll])

  return (
      <Wrapper>
        <NavStyles
          className={`${scroll > top ? ' scroll' : null} ${
            router.pathname !== '/' ? 'bottomShadow' :
            mobileMenu ? 'mobile-menu-open' : ''
          }`}
        >
        <div
          className={`overlay-mobile ${overlay && !mobileMenu ? 'show' : 'hide'}`}
          onClick={() => setOverlay(false)}
        />
        <div className={`logo ${mobileMenu ? 'mobile-menu-open' : ''}`}>
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
          className={`select-agency ${mobileMenu ? 'mobile-menu-open' : ''}`}
          defaultValue={shopKey}
          onChange={onChangeShop}
          onClick={openOverlay}
          options={Object.keys(shops).map((shopKey) => ({
            label: shops[shopKey].headline,
            value: shopKey
          }))}
        />
      </NavStyles>

      <Mobile headline={shop.headline} onMobileMenu={onMobileMenu} phone={shop.phone} phoneFormated={shop.phoneFormated} />

      {path === '/' && (
        <BottomNavMobile>
          <button className="btn btn-primary btn-phone" type="button">
            <a href={`tel:${shop.phone}`} rel="noopener noreferrer nofollow" target="_blank">
              <span>{shop.phoneFormated}</span>
            </a>
          </button>
        <button className="btn btn-secondary btn-rdv" type="button">Prendre rendez-vous</button>
      </BottomNavMobile>)}
    </Wrapper>
  );
};

const Header = ({ path }) => {
  const { shop } = useShop();

  return (
    <header>
      <Nav path={path} />
      {path && <Hero headline={shop.headline} />}
    </header>
  );
};

Header.propTypes = {
  path: PropTypes.string,
};

Nav.propTypes = {
  path: PropTypes.string,
};

export default Header;

export const Wrapper = styled.div`
  .wrapper-header-buttons {
    &.search-page {
      .btn-phone {
        display: block;
      }
      .btn-rdv {
        display: none
      }
    }
  }
  .btn-phone {
    position: fixed;
    bottom: 20px;
    margin-right: 0;
    float: right;
    right: 20px;
    width: calc(50vw - 26px);
    padding: 0 0 0 16px;
    z-index: 8;
    span {
      padding: 0 20px 0 44px;
      width: auto;
      line-height: 47px;
      background: url(${requireStatic('icons/tel.svg')}) no-repeat;
      background-position: 15px 55%;
      background-size: 20px;
    }
    a {
      display: block;
      color: white;
      text-decoration: none;
    }
  }
  .btn-rdv {
    position: fixed;
    display: block;
    bottom: 20px;
    left: 20px;
    width: calc(50vw - 26px);
    padding: 0;
  }
  @media (min-width: 990px) {
    .wrapper-header-buttons {
      &.search-page {
        .btn-phone {
          display: none;
        }
      }
    }
    .btn-phone {
      position: fixed;
      top: 23px;
      right: 0;
      margin-right: 95px;
      padding: 0 26px 0 44px;
      width: auto;
    }
    .btn-rdv {
      display: none;
    }
  }
`

export const NavStyles = styled.nav`
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
  &.mobile-menu-open {
    box-shadow: none;
    background: transparent;
  }
  .logo {
    position: relative;
    top: 8px;
    float: left;
    cursor: pointer;
    &.mobile-menu-open {
      * {
        filter: grayscale(1) brightness(300%);
      }
    }
    * {
      width: 163px;
      height: 44px;
    }
  }
  @media (min-width: 990px) {
    z-index: 6;
    &.bottomShadow {
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.12);
    }
  }
  @media (min-width: 768px) {
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

export const BottomNavMobile = styled.div`
  position: fixed;
  z-index: 6;
  width: 100%;
  height: 87px;
  background: white;
  bottom: 0;
  padding: 20px 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  .btn.btn-primary {
    padding: 0;
  }
  @media (min-width: 990px) {
    background: transparent;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0);
  }
`