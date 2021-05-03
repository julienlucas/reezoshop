import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../constants/theme';

function Breadcrumb() {
  const [crumbs, setCrumbs] = useState(['Home', 'Category', 'Sub Category']);

  const selected = crumb => {
    console.log(crumb);
  };

  const isLast = (index) => {
    return index === crumbs.length - 1;
  };

  return (
    <NavBreadCrumb>
      <div className="container">
         <ul>
         {crumbs.map((crumb, i) => {
            const disabled = isLast(i) ? 'disabled' : '';

            return (
            <li key={crumb+i}>
               <button className={`btn btn-link ${disabled}`} onClick={() => selected(crumb)}>
                  {crumb}
               </button>
            </li>
            );
         })}
         </ul>
      </div>
    </NavBreadCrumb>
  );
};

export default Breadcrumb;

export const NavBreadCrumb = styled.div`
   border-top: 1px solid ${theme.grey700};
   .container {
      padding: 0;
   }
   li {
      margin-right: 13px;
      display: inline-block;
      list-style: none;
      &::after {
         position: absolute;
         margin-left: 3px;
         top: 50%;
         transform: translateY(-50%);
         content: '>'
      }
      &:last-child .btn {
         font-weight: 600;
      }
      &:last-child::after {
         display: none;
      }
   }
   .btn {
      font-weight: 400;
      padding: 0;
      background: transparent;
   }
`