import React, { Component } from 'react';
import Technologies from './Technologies'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Kodflix (Anime Divison)</h1>
        <br /><br /><br />
        <Technologies /> 
      </div>
         
    );
  }
}



export default App;
