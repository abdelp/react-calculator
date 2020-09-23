import React from 'react';
import PropType from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const btnProps = {
    0: [{ name: 'AC', color: 'lightgray' },
      { name: '+/-', color: 'lightgray' },
      { name: '%', color: 'lightgray' },
      { name: '÷' }],
    1: [{ name: '7', color: 'lightgray' },
      { name: '8', color: 'lightgray' },
      { name: '9', color: 'lightgray' },
      { name: 'X' }],
    2: [{ name: '4', color: 'lightgray' },
      { name: '5', color: 'lightgray' },
      { name: '6', color: 'lightgray' },
      { name: '-' }],
    3: [{ name: '1', color: 'lightgray' },
      { name: '2', color: 'lightgray' },
      { name: '3', color: 'lightgray' },
      { name: '+' }],
    4: [{ name: '0', color: 'lightgray', wide: true },
      { name: '.', color: 'lightgray' },
      { name: '=' }],
  };

  const renderedButtons = [];
  Object
    .keys(btnProps)
    .forEach(rowKey => {
      renderedButtons.push(
        <div key={rowKey} className="btn-group">
          { btnProps[rowKey].map(btnProp => (
            <Button
              key={btnProp.name}
              buttonName={btnProp.name}
              color={btnProp.color}
              wide={btnProp.wide}
              onClick={clickHandler}
            />
          )) }
        </div>,
      );
    });

  return (
    <div className="btn-panel">
      { renderedButtons }
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropType.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
