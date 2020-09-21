import React from 'react';
import './../styles/scss/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display id="display" result="" />
      <ButtonPanel id="btn-panel" />
    </div>
  );
}

export default App;
