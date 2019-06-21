import React from 'react';
import { deleteSmurf } from '../actions';

class Smurf extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return ( 
        <li>
        <h1>{this.props.smurf.name}</h1>
        <h2>{this.props.smurf.age} years old</h2>
        <h2>{this.props.smurf.height} tall</h2>
        <button onClick={() => deleteSmurf(this.props.index)}>
            Delete from Collection?
        </button>
    </li>
)}
};

export default Smurf;