import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Technologies from './Technologies';
import Details from './Details/Details.js';
import NotFound from './NotFound';


import './App.css';

  fetch('/rest/shows')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Switch>
          <Route exact path='/' component={Technologies} /> 
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:technologyId' component={Details} />
          </Switch>

        </div>
      </Router>
         
    );
  }
}


export default App;
