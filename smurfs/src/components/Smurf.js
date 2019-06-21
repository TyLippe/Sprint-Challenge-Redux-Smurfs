import React from 'react';

const Smurf = props => {
    return <li>
        <h1>{props.smurf.name}</h1>
        <h2>{props.smurf.age} years old</h2>
        <h2>{props.smurf.height} tall</h2>
    </li>
};

export default Smurf;