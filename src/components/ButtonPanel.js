import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <>
    <div>
      <Button>AC</Button>
      <Button>+/</Button>
      <Button>%</Button>
      <Button>÷</Button>
    </div>
    <div>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>X</Button>
    </div>
    <div>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>-</Button>
    </div>
    <div>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>+</Button>
    </div>
    <div>
      <Button>0</Button>
      <Button>.</Button>
      <Button>=</Button>
    </div>
  </>
);

export default ButtonPanel;
