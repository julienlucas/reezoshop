import GoogleMapReact from 'google-map-react';
import BoxGoogleMapAddress from '../BoxGoogleMapAddress';
import React, { useState, useEffect } from 'react';
import { SectionDComp } from './styles';

function Map({ data }) {
  const [tab, setTab] = useState(1);

  return (
    <SectionDComp>
      <h2 className="text-center">Comment s'y rendre ?</h2>

      <div className="box-address-mobile">
        <BoxGoogleMapAddress data={data} />
      </div>

      <ul className="tabs">
        <li onClick={(e) => setTab(1)} className={tab === 1 ? 'active' : ''}>Google Map</li>
        <li onClick={(e) => setTab(2)} className={tab === 2 ? 'active' : ''}>Horaires d'ouverture</li>
      </ul>

      <GoogleMap data={data} tab={tab} />
    </SectionDComp>
  );
};

export default Map;

function GoogleMap({ data, tab }) {
  const [mapURL, setMapURL] = useState('');
  const center = {lat: 43.9178047, lng: 4.8899898};
  const zoom = 15;

  const handleApiLoaded = (map, maps) => {
    setMapURL(map)
  };

  useEffect(() => {
    // fetch('/api')
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log('Looks like there was a problem: \n', err);
    //   })
  });

  useEffect(() => {
  }, [mapURL])

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
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >

      <div className="wrapper">
        <div className="container">
          <div className={`box-infos ${tab === 2 && window.innerWidth <= 990 ? 'active' : ''}`}>
            <BoxGoogleMapAddress data={data} />

            <div className="open-hours">
              <h3 className="big">Horaires d'ouverture</h3>
              <ul>
                {data?.horaires && Object.entries(data.horaires).map(([day, hours]) =>
                  <li><strong>{day} :</strong> {hours}</li>
                )}
              </ul>
            </div>
          </div>
          <a href={mapURL} rel="noopener noreferrer nofollow" target="_blank" title=""><button className="btn btn-secondary">Ouvrir sur Maps</button></a>
        </div>
      </div>

      </GoogleMapReact>
    </div>
  );
};
