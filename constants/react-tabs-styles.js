import styled from 'styled-components';
import { theme } from './theme';

export const ReactTabsStyles = styled.div`
.react-tabs {
   -webkit-tap-highlight-color: transparent;
}
.react-tabs__tab-list {
   position: relative;
   margin: 0 auto;
   display: table;
   padding: 0 0 20px;
}
.react-tabs__tab {
   display: inline-block;
   border-bottom: 2px solid transparent;
   position: relative;
   font-size: 18px;
   Line-height: 114.5%;
   list-style: none;
   padding: 0 0 10px;
   margin: 0 25px;
   cursor: pointer;
}
.react-tabs__tab--selected {
   font-weight: 700;
   background: #fff;
   color: ${theme.blue100};
   border-color ${theme.blue100};
}
.react-tabs__tab {
   outline: none;
   &:hover, &:focus {
   color: ${theme.blue100};
   }
}
@media (min-width: 768px) {
   .react-tabs__tab {
   margin: 0 50px;
   font-size: 24px;
   }
}
`