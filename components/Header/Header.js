import ArrowBottomIcon from '../../svgs/arrow-bottom.svg';
import Image from 'next/image';
import Link from 'next/link';
import ReactSelect from 'react-select';
import Mobile from './Mobile';
import SearchIcon from '../../svgs/search.svg';
import styled from 'styled-components';
import TelIcon from '../../svgs/tel.svg';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { theme } from '../../constants/theme';

let widthSelect = '20px';

const NavComp = (props) => {
  const router = useRouter();
  const [scroll, setScroll] = useState(null);
  const [top, setTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [overlayMobile, setOverlayMobile] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.nav[0]);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleChange = (agency) => {
    props.selectAgency(agency.value);
    widthSelect = agency.value;
    setSelectedOption(agency);
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
  const phoneFormated = props.phone.toString().replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1 ');

  return (
    <Wrapper>
      <Nav className={`${scroll > top ? ' scroll' : null} ${router.pathname !== '/' ? 'bottomShadow' : ''}`}>
        <div className={`overlay-mobile ${overlayMobile ? 'show' : 'hide'}`} onClick={(e) => setOverlayMobile(false)} />
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo-reezocar.svg"
              alt="reezocar"
              width={244}
              height={66}
              layout="responsive"
            />
          </Link>
        </div>

        <div className="select" onClick={(e) => addOverlayMobile(e)}>
          <ReactSelect
            instanceId={String}
            placeholder={props.nav[0].label}
            options={props.nav}
            styles={customStyles}
            components={{ DropdownIndicator:() => null, IndicatorSeparator }}
            onChange={(agency) => handleChange(agency)}
            defaultValue={{ label: props.nav[0].value, value: props.nav[0].label }}
            value={{ label: selectedOption.value, value: selectedOption.label }}
          />
        </div>

        {router.pathname === '/recherche' && <input type="text" className="search" placeholder="Marque, Modèle" name="search"/>}

        <Mobile data={props} />
      </Nav>

      {(router.pathname === '/' || router.pathname === '/recherche') &&
        <BottomNavMobile>
          <div className={`wrapper-header-buttons ${router.pathname === '/recherche' ? 'search-page' : ''}`}>
            <button className="btn btn-primary btn-phone">
              <a href={`tel:${props.phone}`} rel="noopener noreferrer nofollow" target="_blank">
                <TelIcon className="icon" />{phoneFormated}
              </a>
            </button>

            <button className="btn btn-secondary btn-rdv">Prendre rendez-vous</button>
          </div>
        </BottomNavMobile>}
    </Wrapper>
  );
};

const HeroComp = ({ headline }) => {
  const [form, setForm] = useState('');

  const onChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  };

  return (
    <Hero>
      <div className="container">
        <div>
          <h1>{headline}</h1>
          <h2 className="sub-headline">Voiture d'occasion et neuves à vendre dans notre agence</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="col col-1">
                <input
                  name="car"
                  type="text"
                  className={form ? 'active' : null}
                  placeholder="Marque, Modèle"
                  value={form}
                  onChange={onChange}
                />
                <SearchIcon className="icon" />
              </div>

              <div className="col col-2">ou</div>

              <div className="col col-3">
                <button className="btn btn-primary btn-green" >Voir tous les véhicules</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Hero>
  );
};

const Header = (props) => {
  const router = useRouter();

  const selectAgency = (agency) => {
    props.selectAgency(agency)
  };

  return (
    <header>
      <NavComp nav={props.nav} phone={props.phone} selectAgency={(agency) => selectAgency(agency)}/>
      {router.pathname === '/' && <HeroComp headline={props.headline}/>}
    </header>
  );
};

export default Header;

// React Select : Indicator icon
const IndicatorSeparator = () => {
  return <ArrowBottomIcon className="icon" />
};

// React Select : Styles
const customStyles = {
  option: (styles, state) => ({
    ...styles,
    fontSize: '16px',
    borderTop: '1px solid #C1C1C1',
    background: state.isSelected ? 'white' : 'white',
    color: '#313131',
    textTransform: 'Capitalize',
    cursor: 'pointer',
    "&:focus": {
      background: 'white'
    },
    "&:hover": {
      background: 'white'
    },
    "&:active": {
      background: 'white'
    }
  }),
  singleValue: (styles) => ({
    ...styles
  }),
  control: styles => ({
    ...styles,
    width: `${widthSelect.length + 120}px`,
    float: 'left',
    fontSize: '20px',
    fontWeight: '600',
    color: '#C1C1C1',
    border: 'none',
    boxShadow: 'none',
    background: 'transparent',
    textTransform: 'Capitalize',
    cursor: 'pointer',
  }),
  menu: styles => ({
    ...styles,
    position: 'absolute',
    marginTop: '50px',
    marginLeft: '100px',
    border: 'none',
    boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
    width: '240px',
    borderRadius: '4px',
    textTransform: 'Capitalize',
    zIndex: '10'
  })
};

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
    position: relative;
    top: auto;
    margin-right: 0;
    float: right;
    right: 20px;
    width: calc(50vw - 26px);
    padding: 0 0 0 16px;
    z-index: 3;
    .icon {
      position: absolute;
      height: 25px;
    }
    a {
      display: block;
      color: white;
      text-decoration: none;
    }
  }
  .btn-rdv {
    position: relative;
    display: block;
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

export const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 58px;
  top: 0;
  z-index: 9;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: all .3s ease-out;
  .overlay-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: '';
    z-index: 10;
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
  .select {
    position: relative;
    top: 8px;
    *:first-child {
      border-top: none;
    }
    .icon {
      * {
        width: 15px;
      }
    }
  }
  .search {
    display: none;
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
    .search {
      display: block;
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
    .select {
      top: 27px;
    }
  }
`;

export const BottomNavMobile = styled.div`
  position: fixed;
  z-index: 8;
  width: 100%;
  background: white;
  bottom: 0;
  padding: 20px 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
  @media (min-width: 990px) {
    background: transparent;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0);
  }
`

export const Hero = styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 630px;
  display: table;
  background: url('/images/header-home.png');
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
  input[type="text"] {
    position: relative;
    padding: 0 14px;
    font-size: 16px;
    width: 100%;
    height: 47px;
    border-radius: 4px;
    border: 1px solid white;
    outline: 0;
    user-select: none;
    color: ${theme.grey100};
    &.active, &:focus, &:hover {
      border: 1px solid ${theme.black};
      color: ${theme.black};
      &::placeholder {
        color: ${theme.black};
      }
    }
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
    margin-top: -3px;
    font-size: 26px;
    color: ${theme.black};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 780px) {
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