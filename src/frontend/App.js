import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Animes from './animes/Animes';
import Details from './details/Details';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Animes} />
            <Route exact path='/not-found' component={NotFound} />
            <Route exact path='/:showId' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;