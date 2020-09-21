import React from 'react';
import PropType from 'prop-types';

const Display = ({ result }) => (
  <div className="display">
    {result}
  </div>
);

Display.propTypes = {
  result: PropType.string,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
