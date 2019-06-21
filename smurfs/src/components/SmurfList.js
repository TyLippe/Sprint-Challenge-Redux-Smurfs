import React from 'react';

import Smurf from "./Smurf";

const SmurfList = props => {
    return (
        <ul>
            {props.smurfs.map((smurf, index) => {
                return <Smurf 
                index={index} 
                key={index}
                smurf={smurf}
                height={smurf.height}
                age={smurf.age} />
            })}
        </ul>
    );
};

export default SmurfList;