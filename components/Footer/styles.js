import styled from 'styled-components'
import { theme } from '../../constants/theme'

export const FooterComp = styled.footer`
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
  @media (min-width: 480px) {
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