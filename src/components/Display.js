import React from 'react';
import PropType from 'prop-types';

const Display = ({ result = '0' }) => (
  <div className="display">
    {result}
  </div>
);

Display.propTypes = {
  result: PropType.string.isRequired,
};

export default Display;
