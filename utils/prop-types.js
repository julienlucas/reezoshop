import PropTypes from 'prop-types';

export const typeOrArray = (type = PropTypes.object) =>
   PropTypes.oneOfType([type, PropTypes.arrayOf(PropTypes.oneOfType([type, PropTypes.bool]))]);
