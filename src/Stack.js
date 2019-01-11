import React from 'react'
import { Link } from 'react-router-dom';
 export default function Stack(props) {
    return (
      <Link to='/details' className = 'item'>
        <img src={props.logo} alt={`${props.name} logo`}/>
          <div className = 'overlay'>
            <h2>{props.name}</h2>
          </div>
      </Link>
    );
  }