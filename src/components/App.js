import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display id="display" />
      <ButtonPanel id="btn-panel" />
    </div>
  );
}

export default App;
