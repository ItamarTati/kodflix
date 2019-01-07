import React, { Component } from 'react';
import goWild from './images/GoWild.jpeg';
import infected from './images/Infected.jpg';
import letTheMusicGetDownInYourSoul from './images/LetTheMusicGetDownInYourSoul.jpg';
//import priest from './images/Priest.jpg';
//import theRain from './images/TheRain.jpg';
//import theWalkingDead from './images/TheWalkingDead';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <br /><br /><br />
      <div> className='container'>
        <div className='item'>
          <img src={goWild} alt='Go Wild' />
        </div>
        <div className='item'>
          <img src={infected} alt='Infected' />
        </div>
      <div className='item'>
      <img src={letTheMusicGetDownInYourSoul} alt='Let The Music Get Down In Your Soul' />
    </div>
    </div>
        


      </div>
    );
  }
}

export default App;
