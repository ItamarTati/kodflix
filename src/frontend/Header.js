import React, { Component } from 'react'
import AnimeVideo from './Anime Mix - Legends Never Die [AMV].mp4';

export default class Header extends Component {
    render()
    {
        return (
                <header>
                 
                <div className='title'>
                
                    <video id='video-background' autoPlay loop muted>
                         <source src={AnimeVideo} type='video/mp4'/>
                    </video>
                    <div className="centered">
                        <h1>Welcome to the World of Animeflix</h1>
                        <a href="#technologies">
                            <button  className="myButton">Enter a realm of where your limitations are your imagination</button>
                        </a>
                    </div>   
                </div>
                
                </header>
        )
    }
}
