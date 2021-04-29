import Image from 'next/image';
import Select from 'react-select';
import ArrowBottomIcon from '../../svgs/arrow-bottom.svg';
import SearchIcon from '../../svgs/search.svg';
import TelIcon from '../../svgs/tel.svg';
import React, { useEffect, useState } from 'react';
import { Wrapper, Nav, Hero } from './styles';

const NavComp = (props) => {
  const [scroll, setScroll] = useState(null);
  const [top, setTop] = useState(null);
  const [height, setHeight] = useState(null);
  const [overlayMobile, setOverlayMobile] = useState(false);

  const handleScroll = e => {
    setScroll(window.scrollY)
  };

  const handleChange = (agency) => {
    props.selectAgency(agency)
  };

  const addOverlayMobile = () => {
    if (window.innerWidth <= 768) setOverlayMobile(!overlayMobile);
  }

  useEffect(() => {
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
      <Nav className={`${scroll > top ? ' scroll' : null}`}>
        <div className={`overlay-mobile ${overlayMobile ? 'show' : 'hide'}`} />
        <div className="logo">
          <Image
            src="/images/logo-reezocar.svg"
            alt="reezocar"
            width={244}
            height={66}
            layout="fixed"
          />
        </div>

        <div className="select" onClick={(e) => addOverlayMobile(e)}>
          <Select
            instanceId={String}
            placeholder={props.nav[0].value}
            options={props.nav}
            styles={customStyles}
            components={{ DropdownIndicator:() => null, IndicatorSeparator }}
            onChange={(data) => handleChange(data.value)}
          />
        </div>

        <div className="mobile-menu">
          <div className="cross">
            <span/>
            <span/>
            <span/>
          </div>
        </div>
      </Nav>

      <button className="btn btn-primary btn-phone">
        <a href={`tel:${props.phone}`} rel="noopener noreferrer nofollow" target="_blank">
          <TelIcon className="icon" />{phoneFormated}
        </a>
      </button>

      <button className="btn btn-secondary btn-rdv">Prendre rendez-vous</button>
    </Wrapper>
  );
};

const HeroComp = ({ headline }) => {
  const [form, setForm] = useState('')

  const onChange = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  };

  const onSubmit = (e) => {
    e.preventDefault()
    alert('Recherche envoyée : ' + form.location + form.car)
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
  const selectAgency = (agency) => {
    props.selectAgency(agency)
  };

  return (
    <header>
      <NavComp nav={props.nav} phone={props.phone} selectAgency={(agency) => selectAgency(agency)}/>
      <HeroComp headline={props.headline}/>
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
  option: styles => ({
    ...styles,
    fontSize: '16px',
    borderTop: '1px solid #C1C1C1',
    background: 'white',
    color: '#313131',
    cursor: 'pointer',
  }),
  control: styles => ({
    height: 0,
    marginTop: '-35px',
    padding: '10px 0',
    fontSize: '20px',
    fontWeight: '600',
    color: '#C1C1C1',
    border: 'none',
    boxShadow: 'none',
    background: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer'
  }),
  menu: styles => ({
    ...styles,
    position: 'absolute',
    marginTop: '50px',
    marginLeft: '100px',
    border: 'none',
    boxShadow: 'none',
    width: '250px',
    borderRadius: '4px',
    zIndex: '-1'
  })
};