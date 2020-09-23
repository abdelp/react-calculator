import React from 'react';
import '../styles/scss/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

class App extends React.Component {
  constructor() {
    super();
    this.state = {total: null,
                  next: null,
                  operation: null};
  }

  render () {
    return <div className="App">
      <Display result="0" />
      <ButtonPanel />
    </div>;
  }
}

export default App;
