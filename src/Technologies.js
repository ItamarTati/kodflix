import React from 'react'
import Stack from './Stack'
import cowboyBebop from './images/cowboybebop.jpg';
import dragonBall from './images/dragonball.jpg';
import eva from './images/eva.jpg';
import ruruoniKenshin from './images/ruruonikenshin.jpg';
import schoolRumble from './images/schoolrumble.jpg';
import yuYuHakusho from './images/yuyuhakusho.jpg';


export default function Technologies() {
    return (
        <div>
            <div className = 'container'>
                <Stack name='Cowboy Bebop' logo={cowboyBebop}/>
                <Stack name='Dragon Ball' logo={dragonBall}/>
                <Stack name='Neon Genesis Evangelian' logo={eva}/>
            </div> 
            <div className = 'container'>
                <Stack name='Ruruoni Kenshin' logo={ruruoniKenshin}/>
                <Stack name='School Rumble' logo={schoolRumble}/>
                <Stack name='Yu Yu Hakusho' logo={yuYuHakusho}/>
            </div>
        </div>
)
}