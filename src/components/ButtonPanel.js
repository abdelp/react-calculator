import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttonNames = {
    0: ['AC', '+/', '%', '÷'],
    1: ['7', '8', '9', 'X'],
    2: ['4', '5', '6', '-'],
    3: ['1', '2', '3', '+'],
    4: ['0', '.', '='],
  };

  const renderedButtons = [];
  Object
    .keys(buttonNames)
    .forEach(rowKey => {
      renderedButtons.push(
        <div key={rowKey}>
          { buttonNames[rowKey].map(btnName => <Button key={btnName} buttonName={btnName} />) }
        </div>,
      );
    });

  return (
    <div>
      { renderedButtons }
    </div>
  );
};

export default ButtonPanel;
