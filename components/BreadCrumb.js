import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from './Buttons/Button';

import { theme } from '../constants/theme';

function BreadCrumb({ params }) {
   const [links, setLinks] = useState(['/vehicules-occasions', '', '']);
   const [crumbs, setCrumbs] = useState(['Occasion']);

   const isLast = (index) => {
      return index === crumbs.length - 1
   };

   useEffect(() => {
      if (params.onlyNew) {
         crumbs[0] = 'Neuf/0km';
         links[0] = '/vehicules-neufs'
      } else if (!params.onlyNew) {
         crumbs[0] = 'Occasion';
         links[0] = '/vehicules-occasions'
      }

      if (params.brand) {
         crumbs[1] = params.brand;
      }

      if (params.model) {
         crumbs[2] = params.model;
      }

      setCrumbs(prevState => [ ...prevState ]);
      setLinks(prevState => [ ...prevState ]);
   }, [params])

   return (
      <StyledBreadCrumb>
         <div className="container">
            <ul>
            {crumbs?.map((crumb, i) => {
               const disabled = isLast(i) ? 'disabled' : '';

               return (
               <li key={crumb+i}>
                  <Button breadcrumb className={disabled}>
                     <Link href={links[i]}>{crumb}</Link>
                  </Button>
               </li>
               );
            })}
            </ul>
         </div>
      </StyledBreadCrumb>
   );
};

BreadCrumb.propTypes = {
  params: PropTypes.object.isRequired
};

export default BreadCrumb;

export const StyledBreadCrumb = styled.nav`
   border-top: 1px solid ${theme.grey700};
   ul {
      padding: 20px 0;
   }
   li {
      position: relative;
      margin-right: 13px;
      display: inline-block;
      list-style: none;
      &::after {
         position: absolute;
         right: -11px;
         top: 50%;
         transform: translateY(-50%);
         content: '>'
      }
      &:last-child button {
         font-weight: 600;
      }
      &:last-child::after {
         display: none;
      }
      &:first-child::after {
         display: block
      }
   }
`