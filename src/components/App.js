import React from 'react';
import '../styles/scss/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './../logic/calculate';

function App() {
  return (
    <div className="App">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
