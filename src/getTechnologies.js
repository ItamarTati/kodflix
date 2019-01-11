import cowboyBebop from './images/cowboybebop.jpg';
import dragonBall from './images/dragonball.jpg';
import eva from './images/eva.jpg';
import ruruoniKenshin from './images/ruruonikenshin.jpg';
import schoolRumble from './images/schoolrumble.jpg';
import yuYuHakusho from './images/yuyuhakusho.jpg';

export default function getTechnologies() {
    return [
    { id: 'cowboybebop', name: 'Cowboy Bebop', logo: cowboyBebop},
    { id:'dragonball', name:'Dragon Ball', logo: dragonBall}, 
    { id: 'neongenesisevangelion', name:'Neon Genesis Evangelian', logo: eva},
    { id: 'ruruonikenshin', name: 'Ruruoni Kenshin', logo: ruruoniKenshin},
    { id: 'schoolrumble', name: 'School Rumble', logo: schoolRumble},
    { id: 'yuyuhakusho', name:'Yu Yu Hakusho', logo: yuYuHakusho}
    ];
}