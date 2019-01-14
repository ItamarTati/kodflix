import React, {
    Component
} from 'react'
import {
    Link
} from 'react-router-dom';
import getTechnologies from './getTechnologies'

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
        return ( 
        <div>
            <h1> {
                this.state.technology.name
                } 
                </h1> <Link to = '/' > Back to home page </Link> 
        </div>
        );
    }
}