import styled from 'styled-components'
import { theme } from '../../constants/theme'

export const Wrapper = styled.div`
  .btn-phone {
    position: relative;
    top: 635px;
    margin-right: 0;
    float: right;
    right: 20px;
    width: calc(50vw - 26px);
    a {
      display: block;
      color: white;
      text-decoration: none;
    }
  }
  .btn-rdv {
    position: relative;
    top: 635px;
    display: block;
    left: 20px;
    width: calc(50vw - 26px);
  }
  @media (min-width: 768px) {
    .btn-phone {
      position: fixed;
      top: 23px;
      margin-right: 95px;
      width: auto;
      z-index: 10;
    }
    .btn-rdv {
      display: none;
    }
  }
`

export const Nav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 92px;
  top: 0;
  z-index: 9;
  transition: all .3s ease-out;
  .overlay-mobile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: '';
    z-index: 10;
    pointer-events: none;
    &.show {
      background: rgba(0, 0, 0, 0.3);
    }
    &.hide {
      background: rgba(0, 0, 0, 0);
    }
  }
  &.scroll {
    background: white;
  }
  .select {
    margin-top: 52px;
    *:first-child {
      border-top: none;
    }
  }
  .logo {
    position: relative;
    top: 16px;
    float: left;
    cursor: pointer;
  }
  .mobile-menu {
    position: absolute;
    top: 38px;
    cursor: pointer;
    display: block;
    width: 100%;
    .cross {
      position: absolute;
      top: 0;
      right: 35px;
      float: right;
      width: 35px; height: 35px;
      display: block;
    }
    span {
      position: absolute;
      width: 29px; height: 3px;
      background: ${theme.black};
      border-radius: 1px;
      &:nth-child(1) {top: 0px}
      &:nth-child(2) {top: 8px}
      &:nth-child(3) {top: 16px}
    }
  }
`;

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