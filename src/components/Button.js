import React from 'react';
import PropType from 'prop-types';

const Button = ({ buttonName, color, wide, onClick }) => (
  <button
    type="button"
    className={`btn btn-${color} ${wide ? 'btn-wide' : ''}`}
    color={color}
    onClick={() => onClick(buttonName)}
  >
    {buttonName}
  </button>
);

Button.propTypes = {
  buttonName: PropType.string.isRequired,
  color: PropType.string,
  wide: PropType.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};
export default Button;
