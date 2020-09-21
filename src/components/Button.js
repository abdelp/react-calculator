import React from 'react';
import PropType from 'prop-types';

const Button = ({ buttonName, color = 'orange' }) => (
  <button type="button" className={`btn btn-${color}`} color={color}>{buttonName}</button>
);

Button.propTypes = { buttonName: PropType.string.isRequired };

export default Button;
