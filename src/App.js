import React, { Component } from 'react';
import './App.css';
import GRecaptcha from './gRecaptcha'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GRecaptcha/>
      </div>
    );
  }
}

export default App;
