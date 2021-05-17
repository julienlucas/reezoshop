import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { medias, theme } from '../../constants/theme';
import requireStatic from '../../utils/require-static';

const Footer = () => {
  return (
    <StyledFooter>
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
            src={requireStatic('images/logo-reezocar.svg')}
            alt="reezocar"
            width={211}
            height={57}
            layout="fixed"
          />
        </div>

        <p className="copyright text-center">Reezocar {new Date().getFullYear()} - Tous droits réservés</p>
      </div>
    </StyledFooter>
  )
}

export default Footer;

export const StyledFooter = styled.footer`
  padding: 65px 20px 30px;
  background: ${theme.grey300};
  .row {
    display: block;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  .title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .copyright {
    margin-top: auto;
    font-size: 16px;
    color: ${theme.grey200}
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      margin-bottom: 20px;
      font-size: 16px;
      list-style: none;
      span {
        cursor: pointer;
        &:hover, &:focus {
          color: ${theme.orange100}
        }
      }
    }
    strong {
      font-size: 16px
    }
  }
  .col-2 {
    margin-top: auto;
  }
  .col-3 {
    margin-top: 45px;
  }
  .logo {
    position: relative;
    margin: 0 auto;
    display: table;
  }
  ${medias.min480} {
    padding: 80px 20px 30px;
    .row {
      display: grid;
    }
    .col-2, .col-3 {
      margin-top: 45px;
    }
    .copyright {
      margin-top: 100px;
    }
    .logo {
      display: none;
    }
  }
`
