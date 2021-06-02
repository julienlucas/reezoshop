import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { medias, theme } from '../../constants/theme';

import useShop from '../../hooks/useShop';

const Footer = () => {
  const { shop } = useShop();

  return (
    <FooterStyled>
      <div className="container">
        <div className="row">
          <div className="col col-1">
            <p className="title">Plan de site</p>
            <ul>
              <li><span>Agence {shop?.headline}</span></li>
              <li><span><Link href="/plan-de-site/occasion"><a>Marques d’occasion</a></Link></span></li>
              <li><span><Link href="/plan-de-site/neuf"><a>Marques neuves/0km</a></Link></span></li>
            </ul>
          </div>
          <div className="col col-2">
            <ul>
              <li><span><Link href="/comment-venir"><a>Comment venir ?</a></Link></span></li>
              <li><span><Link href="/faq"><a>Foire Aux Questions</a></Link></span></li>
              <li><span><a href="https://www.reezocar.com" target="_blank" rel="noopener">Consulter le site reezocar.com</a></span></li>
            </ul>
          </div>
          <div className="col col-3">
            <ul>
              <li><strong>{shop?.headline}</strong>
              <br/>{shop?.address}, {shop?.postalCode} {shop?.locality}
              <br/>{shop?.phoneFormated}</li>
            </ul>
          </div>
        </div>

        <div className="logo">
          <Link href="/">
            <a>
              <Image
                src="/images/logo-reezocar.svg"
                alt="reezocar"
                width={211}
                height={57}
                layout="fixed"
              />
            </a>
          </Link>
        </div>

        <p className="copyright text-center">Reezocar {new Date().getFullYear()} - Tous droits réservés</p>
      </div>
    </FooterStyled>
  )
}

export default Footer;

export const FooterStyled = styled.footer`
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
      a {
        cursor: pointer;
        color: ${theme.black};
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