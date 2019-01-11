import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Technologies from './Technologies'
import Details from './Details'


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <h1>Kodflix (Anime Divison)</h1>
        <br /><br /><br />
        <Route exact path='/' component={Technologies} /> 
        <Route exact path='/:details' component={Details} />
      
      </div>
      </Router>
         
    );
  }
}



export default App;
