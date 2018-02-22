import React, { Component } from 'react';
import './App.css';
import GRecaptcha from './gRecaptcha'
import InvisibleCaptcha from './InvisibleCaptcha'
import MuiModal from './muiModal'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<GRecaptcha/>*/}
        {/*<InvisibleCaptcha/>*/}
        <MuiModal/>
      </div>
    );
  }
}

export default App;
