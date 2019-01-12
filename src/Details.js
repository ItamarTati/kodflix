
import React, {Component} from 'react'
import { Link } from 'react-router-dom';

export default class Details extends Component {

    constructor() {
        super();
        debugger; 
        this.state = {
            welcomeMessage: 'Welcome to the details page, WIP :)'
        };



    }

        componentDidMount(){
            debugger;
            setTimeout(() => {
                debugger;
                this.setState({
                    welcomeMessage: 'The best is yet to come!'
                });
            }, 3000);
        }
            
    render() { 
        return (
            <div>
                <h1>{this.state.welcomeMessage}}</h1>
                <Link to= '/'>Back to home page</Link>
            </div>
        );
    }
}
  