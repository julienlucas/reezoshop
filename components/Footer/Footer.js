import Image from 'next/image';
import React from 'react';
import { FooterComp } from './styles';

const Footer = () => {
  return (
    <FooterComp>
      <div className="container">
        <div className="row">
          <div className="col col-1">
            <p className="title">Plan de site</p>
            <ul>
              <li><span>Agence Reezocar Lille-Seclin</span></li>
              <li><span>Marques d’occasion</span></li>
              <li><span>Marques neuves/0km</span></li>
            </ul>
          </div>
          <div className="col col-2">
            <ul>
              <li><span>Comment venir ?</span></li>
              <li><span>Foire Aux Questions</span></li>
              <li><span>Consulter le site reezocar.com</span></li>
            </ul>
          </div>
          <div className="col col-3">
            <ul>
              <li><strong>Reezocar Lille - Seclin</strong>
              <br/>11 Rue du Clauwiers, 59113 Seclin
              <br/>01 42 53 65 29</li>
            </ul>
          </div>
        </div>

        <div className="logo">
          <Image
            src="/images/logo-reezocar.svg"
            alt="reezocar"
            width={211}
            height={57}
            layout="fixed"
          />
        </div>

        <p className="copyright text-center">Reezocar {new Date().getFullYear()} - Tous droits réservés</p>
      </div>
    </FooterComp>
  )
}

export default Footer;
