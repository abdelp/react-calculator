import React from 'react';
import PropType from 'prop-types';

const Button = ({ children }) => (
  <button type="button">{children}</button>
);

Button.propTypes = { children: PropType.string.isRequired };

export default Button;
