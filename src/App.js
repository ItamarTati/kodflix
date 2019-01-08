import React, { Component } from 'react';
import cowboyBebop from './images/cowboybebop.jpg';
import dragonBall from './images/dragonball.jpg';
import eva from './images/eva.jpg';
import ruruoniKenshin from './images/ruruonikenshin.jpg';
import schoolRumble from './images/schoolrumble.jpg';
import yuYuHakusho from './images/yuyuhakusho.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Kodflix (Anime Divison)</h1>
      <br /><br /><br />
      
      <div className = 'container'>
        
        <div className = 'item'>
          <img src={cowboyBebop} alt='Cowboy Bebop'/>
        </div>
        
        <div className = 'item'>
          <img src={dragonBall} alt='Dragon Ball Z'/>
        </div>
        
        <div className = 'item'>
          <img src={eva} alt='Neon Genesis Evangelian'/>
        </div>
        
          </div>             
      
      <div className = 'container'>
        
        <div className = 'item'>
          <img src={ruruoniKenshin} alt='Ruruoni Kenshin'/>
        </div>
        
        <div className = 'item'>
          <img src={schoolRumble} alt='School Rumble'/>
        </div>
        
        <div className = 'item'>
          <img src={yuYuHakusho} alt='Yu Yu Hakusho'/>
        </div>
        
        </div>
        </div> 
    );
  }
}

export default App;
