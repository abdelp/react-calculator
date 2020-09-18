import React from 'react';
import PropType from 'prop-types';

const Display = ({ result = '0', id }) => (
  <div id={id}>
    {result}
  </div>
);

Display.propTypes = {
  result: PropType.string.isRequired,
  id: PropType.string.isRequired,
};

export default Display;
