import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Technologies from './Technologies';
import Details from './Details';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
        
          <Route exact path='/' component={Technologies} /> 
          <Route exact path='/:technologyId' component={Details} />
        
        </div>
      </Router>
         
    );
  }
}



export default App;
