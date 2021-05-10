import Autocomplete from '../Autocomplete';
import Image from 'next/image';
import Link from 'next/link';
import Mobile from './Mobile';
import PropTypes from 'prop-types';
import requireStatic from '../../utils/require-static';
import Select from '../Select';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { theme } from '../../constants/theme';

const Nav = ({ cityShop, nav, phone, selectAgency }) => {
  const router = useRouter();
  const [scroll, setScroll] = useState(null);
  const [top, setTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [overlayMobile, setOverlayMobile] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const onChangeAgency = agency => {
    selectAgency(agency);
  };

  const addOverlayMobile = () => {
    if (window.innerWidth <= 768) setOverlayMobile(!overlayMobile);
  };

  useEffect(() => {
    // Au scroll changement du style de la nav
    const el = document.querySelector('nav')
    setTop(el.offsetTop)
    setHeight(el.offsetHeight)
    window.addEventListener('scroll', handleScroll)

		scroll > top ?
			document.body.style.paddingTop = `${height}px` :
      document.body.style.paddingTop = 0

  }, [height,top,scroll])

  // Ajout d'un espace tous les 2 caractères
  const phoneFormated = phone.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1 ');

  return (
    <Wrapper>
      <NavStyles className={`${scroll > top ? ' scroll' : null} ${router.pathname !== '/' ? 'bottomShadow' : ''}`}>
        <div className={`overlay-mobile ${overlayMobile ? 'show' : 'hide'}`} onClick={() => setOverlayMobile(false)} />
        <div className="logo">
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

        <div onClick={e => addOverlayMobile(e)}>
          <Select
            className="select-agency"
            defaultValue={cityShop}
            options={nav}
            onChange={onChangeAgency}
          />
        </div>
      </NavStyles>

      <Mobile phone={phone} />

      {router.pathname === '/' &&
        <BottomNavMobile>
          <button className="btn btn-primary btn-phone">
            <a href={`tel:${phone}`} rel="noopener noreferrer nofollow" target="_blank">
              <span>{phoneFormated}</span>
            </a>
          </button>

          <button className="btn btn-secondary btn-rdv">Prendre rendez-vous</button>
        </BottomNavMobile>}
    </Wrapper>
  );
};

const Hero = ({ headline }) => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const seeAllCars = () => {
    router.push(`/recherche`);
  };

  const onSearch = e => {
    e.preventDefault();
    const keyCode = e.keyCode;
    const match = e.target.value;
    if (keyCode === 13) router.push(`/recherche?match=${match}`);
  };

  return (
    <HeroStyles style={{ background: 'url(' + requireStatic('images/header-home.png') + ')', backgroundSize: 'cover' }}>
      <div className="container">
        <div>
          <h1>{headline}</h1>
          <h2 className="sub-headline">Voiture d'occasion et neuves à vendre dans notre agence</h2>

          <div className="row">
            <div className="col col-1">
              <Autocomplete suggestions={["Oranges", "Apples", "Banana", "Kiwi", "Mango"]} />
            </div>

            <div className="col col-2">ou</div>

            <div className="col col-3">
              <button className="btn btn-primary" onClick={seeAllCars}>Voir tous les véhicules</button>
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
};

const Header = ({ cityShop, headline, nav, phone, selectAgency }) => {
  const router = useRouter();

  return (
    <header>
      <Nav cityShop={cityShop} nav={nav} phone={phone} selectAgency={agency => selectAgency(agency)}/>
      {router.pathname === '/' && <Hero headline={headline}/>}
    </header>
  );
};

Header.propTypes = {
  cityShop: PropTypes.string.isRequired,
  nav: PropTypes.array.isRequired,
  phone: PropTypes.string.isRequired
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
    z-index: 8;
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
  @media (min-width: 990px) {
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
  z-index: 8;
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

export const HeroStyles = styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 630px;
  display: table;
  background-position: 0% 0%;
  background-size: cover;
  z-index: 1;
  .container {
    position: absolute;
    top: calc(50% - 30px);
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    max-width: 820px;
    div {
      width: 100%;
    }
  }
  .btn {
    position: relative;
    margin: 0 auto;
    display: table;
    min-width: 270px;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  .icon {
    position: absolute;
    margin: 15px 0 0 -30px;
  }
  .row {
    position: relative;
    padding-top: 10px;
    display: block;
    grid-gap: 20px;
    max-width: 720px;
    width: 100%;
  }
  .col-2 {
    height: 50px;
    margin-top: -15px;
    font-size: 26px;
    color: ${theme.black};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 800px) {
    top: auto;
    height: 640px;
    input[type="text"] {
      width: 395px;
    }
    .row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .col-2 {
      display: block;
      margin-top: 3px;
      color: white;
    }
  }
`;