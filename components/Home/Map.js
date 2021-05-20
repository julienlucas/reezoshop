import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import BoxGoogleRating from '../BoxGoogleRating';
import MarkerIcon from '../../svgs/marker-b.svg';

import configs from '../../configs';
import { medias, theme } from '../../constants/theme';

const { googleMapKey } = configs;

const Map = ({ shop }) => {
  const [tab, setTab] = useState(1);
  const [mapURL, setMapURL] = useState('');

  const onMapURL = url => {
    setMapURL(url);
  };

  return (
    <StyledMap>
      <h2 className="text-center">Comment s'y rendre ?</h2>

      <BoxGoogleRating
        className="box-address-mobile"
        address={`${shop.address} ${shop.locality} ${shop.postalCode}`}
        headline={shop.headline}
        googleAvis={shop.google.avis}
        googleNote={shop.google.note}
      />

      <ul className="tabs">
        <li className={tab === 1 ? 'active' : ''}><button onClick={() => setTab(1)} type="button">Google Map</button></li>
        <li className={tab === 2 ? 'active' : ''}><button onClick={() => setTab(2)} type="button">Horaires d'ouverture</button></li>
      </ul>

      <GoogleMap shop={shop} tab={tab} onMapURL={url => onMapURL(url)} />

      <div className="wrapper">
        <div className="container">
          <div className={`box-infos ${tab === 2 && window.innerWidth <= 990 ? 'active' : ''}`}>
            <BoxGoogleRating
              address={`${shop.address} ${shop.locality} ${shop.postalCode}`}
              headline={shop.headline}
              googleAvis={shop.google.avis}
              googleNote={shop.google.note}
            />

            <div className="open-hours">
              <h3 className="big">Horaires d'ouverture</h3>
              <ul>
                {shop?.horaires && Object.entries(shop.horaires).map(([day, hours], i) =>
                  <li key={i}><strong>{day} :</strong> {hours}</li>
                )}
              </ul>
            </div>
          </div>
          <Button secondary className="small-size"><a href={mapURL} rel="noopener noreferrer nofollow" target="_blank" title="">Ouvrir sur Maps</a></Button>
        </div>
      </div>
    </StyledMap>
  );
};

Map.propTypes = {
  shop: PropTypes.object.isRequired
};

export default Map;

const GoogleMap = ({ shop, onMapURL }) => {
  const center = { lat: shop.geo.lat, lng: shop.geo.lng };
  const zoom = 18;

  const Marker = () => <div><MarkerIcon /></div>;

  useEffect(() => {
    onMapURL(`https://maps.google.com/maps?ll=${shop.geo.lat},${shop.geo.lng}&z=${zoom}`)
  }, [])

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        scrollwheel={false}
        navigationControl={false}
        mapTypeControl={false}
        scaleControl={false}
        draggable={false}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  shop: PropTypes.object.isRequired,
  onMapURL: PropTypes.func
};

export const StyledMap = styled.section`
  position: relative;
  padding: 30px 0 10px;
  h2 {
    position: relative;
    margin-bottom: 20px;
  }
  .google-map {
    height: 320px;
    width: 100%;
    outline: 0;
    user-select: none;
    * {
      cursor: auto;
      outline: 0;
      user-select: none;
    }
    a[href^="http://maps.google.com/maps"]{display:none !important}
    a[href^="https://maps.google.com/maps"]{display:none !important}
    .gmnoprint a, .gmnoprint span, .gm-style-cc, .gm-fullscreen-control, .gmnoprint {
      display:none;
    }
    .gmnoprint div {
      background:none !important;
    }
  }
  .marker {
    * {
      height: 873px;
    }
  }
  .wrapper {
    position: absolute;
    top: 315px;
    height: 360px;
    width: 100vw;
    z-index: 1;
    ul {
      top: -40px;
    }
  }
  .container {
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
  }
  .box-infos {
    position: relative;
    background: white;
    box-shadow: none;
    border-radius: 4px;
    padding: 0 37px;
    max-width: auto;
    width: 100%;
    display: none;
    z-index: 3;
    cursor: auto;
    &.active {
      display: block;
    }
    .box-address {
      display: none;
    }
  }
  .open-hours {
    position: relative;
    margin: 70px auto 0;
    display: table;
    width: 100%;
    max-width: 400px;
    > h3 {
      display: none;
    }
  }
  ul:not(.tabs) {
    padding: 0;
    position: relative;
    margin: 0 auto;
    display: table;
    columns: 1;
    li {
      list-style: none;
      padding: 0;
      margin: 0 0 25px;
      font-size: 16px;
      * {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  ul.tabs {
    position: relative;
    margin: 0 auto;
    display: table;
    width: auto;
    li {
      position: relative;
      padding-bottom: 10px;
      margin-right: 20px;
      display: inline-block;
      list-style: none;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      button {
        position: relative;
        font-size: 18px;
        border: 0;
        color: ${theme.black};
        background: transparent;
        cursor: pointer;
      }
      &.active {
        border-color: ${theme.blue100};
        button {
          font-weight: 700;
          color: ${theme.blue100};
        }
      }
    }
  }
  button.small-size {
    position: absolute;
    right: 20px;
    bottom: 70px;
    z-index: 2;
  }
  ${medias.min990} {
    h2 {
      margin-bottom: 50px;
    }
    .open-hours {
      > h3 {
        display: block;
      }
    }
    .google-map {
      height: 660px;
    }
    .container {
      padding: 0 40px;
    }
    .wrapper {
      top: 295px;
      left: 0;
      height: 360px;
      ul {
        top: auto;
      }
    }
    .box-infos {
      max-width: 507px;
      padding: 57px 37px;
      display: block;
      box-shadow: 1px 2px 13px rgba(0, 0, 0, 0.15);
      .box-address {
        display: block;
      }
    }
    ul.tabs {
      display: none;
    }
    ul:not(.tabs) {
      margin: 0;
      columns: 2;
      display: block;
    }
    button.small-size {
      right: 0px;
      bottom: -90px;
    }
  }
`