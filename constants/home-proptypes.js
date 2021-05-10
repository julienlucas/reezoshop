import PropTypes from 'prop-types';

export const homePropTypes = {
  oldCars: PropTypes.array.isRequired,
  newCars: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  shop: PropTypes.object.isRequired
};