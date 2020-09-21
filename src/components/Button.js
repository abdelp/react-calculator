import React from 'react';
import PropType from 'prop-types';

const Button = ({ buttonName }) => (
  <button type="button" className="btn">{buttonName}</button>
);

Button.propTypes = { buttonName: PropType.string.isRequired };

export default Button;
