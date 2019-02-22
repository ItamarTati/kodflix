import React from 'react';
import { Link } from 'react-router-dom';
import './Posters.css';

export default class Posters extends React.Component {

    render() {
        let { id, title } = this.props;
        return (
            <Link to={`/${id}`} className='posters'>
                <img src={require(`../../images/${id}.jpg`)} alt={title} />
                <div className='posters-overlay'><h1>{title}</h1></div>
            </Link>
        )
    }
}