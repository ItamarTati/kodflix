import React, {
    Component
} from 'react'
import {
    Link, Redirect 
} from 'react-router-dom';
import getTechnologies from '../frontend/getTechnologies'
import './Details.css';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            technology: {}
        };



    }

    componentDidMount() {
        let technologyId = this.props.match.params.technologyId;
        let technology = getTechnologies()
            .find((technology) => technology.id === technologyId);
        this.setState({
            technology
        });
    }

    render() {
        if(this.state.technology === undefined){
            return <Redirect to='/not-found' />;
        }
        else {

        return ( 
        <div className = 'Details'>
            <h1>{this.state.technology.name}</h1> 
            
                <div className='content'>
                <div className='text'> 
                    {this.state.technology.details}</div> 
                <img
                    className = 'image' 
                    src={this.state.technology.logo}
                    alt={this.state.technology.name} /> 
                <div className='link'>
                <Link to = '/' >Back to home page </Link> 
                </div>
                </div>
        </div>
            );
        }
    }
}