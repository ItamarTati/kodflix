import React from 'react';
import './Animes.css';
import Posters from './posters/Posters';
import Loading from '../loading/Loading';


export default class Animes extends React.Component {

    constructor() {
        super();
        this.state = { shows: [] };
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => this.setState({ shows }));
    }


    render() {
        return (
            <div className='animes'>{
                this.state.shows.length ?
                    this.state.shows.map(show => {
                        return (
                            <Posters key={show.id} id={show.id} title={show.title} />
                        );
                    }) : 
                    <Loading />

            }
            </div>
        );
    }
}