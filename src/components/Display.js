import React from 'react';
import PropType from 'prop-types';

const Display = ({ result = '0' }) => (
  <>
    {result}
  </>
);

Display.propTypes = { result: PropType.string.isRequired };

export default Display;
