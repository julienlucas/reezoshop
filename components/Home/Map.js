import GoogleMapReact from 'google-map-react';
import BoxGoogleRating from '../BoxGoogleRating';
import MarkerIcon from '../../svgs/marker-b.svg';
import React, { useState } from 'react';
import { SectionDComp } from './styles';

const Map = ({ data }) => {
  const [tab, setTab] = useState(1);
  const [mapURL, setMapURL] = useState('');

  const onMapURL = url => {
    setMapURL(url);
  };

  return (
    <SectionDComp>
      <h2 className="text-center">Comment s'y rendre ?</h2>

      <BoxGoogleRating
        className="box-address-mobile"
        address={data.address}
        headline={data.headline}
        googleAvis={data.googleAvis}
        googleNote={data.googleNote}
      />

      <ul className="tabs">
        <li className={tab === 1 ? 'active' : ''}><button onClick={() => setTab(1)}>Google Map</button></li>
        <li className={tab === 2 ? 'active' : ''}><button onClick={() => setTab(2)}>Horaires d'ouverture</button></li>
      </ul>

      <GoogleMap data={data} tab={tab} mapURL={url => onMapURL(url)} />

      <div className="wrapper">
        <div className="container">
          <div className={`box-infos ${tab === 2 && window.innerWidth <= 990 ? 'active' : ''}`}>
            <BoxGoogleRating
              address={data.address}
              headline={data.headline}
              googleAvis={data.googleAvis}
              googleNote={data.googleNote}
            />

            <div className="open-hours">
              <h3 className="big">Horaires d'ouverture</h3>
              <ul>
                {data?.horaires && Object.entries(data.horaires).map(([day, hours], i) =>
                  <li key={i}><strong>{day} :</strong> {hours}</li>
                )}
              </ul>
            </div>
          </div>
          <a href={mapURL} rel="noopener noreferrer nofollow" target="_blank" title=""><button className="btn btn-secondary">Ouvrir sur Maps</button></a>
        </div>
      </div>
    </SectionDComp>
  );
};

export default Map;

const GoogleMap = ({ mapURL }) => {
  const center = {lat: 43.9178047, lng: 4.8899898};
  const zoom = 18;

  const handleApiLoaded = (map) => {
    mapURL(map)
  };

  const Marker = () => <div><MarkerIcon /></div>;

  return (
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDMts3UNSnNeHy09kR0X75SgW75KVMIuWY' }} // Clé test de dev, donc à changer une clé prod
        defaultCenter={center}
        defaultZoom={zoom}
        scrollwheel={false}
        navigationControl={false}
        mapTypeControl={false}
        scaleControl={false}
        draggable={false}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
        />
      </GoogleMapReact>
    </div>
  );
};