import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { typeOrArray } from '../../utils/prop-types';

const List = React.forwardRef(({ children, ...props }, ref) => (
   <StyledList {...props} ref={ref}>
      {children}
   </StyledList>
));

List.displayName = 'List';

List.propTypes = {
   children: PropTypes.node.isRequired,
   styles: typeOrArray(PropTypes.object),
};

export default List;

const StyledList = styled.ul(({ styles = {} }) => ({
   listStyle: 'none',
   marginBottom: 0,
   marginLeft: 0,
   marginRight: 0,
   marginTop: 0,
   paddingBottom: 0,
   paddingLeft: 0,
   paddingRight: 0,
   paddingTop: 0,
   ...styles,
}));
