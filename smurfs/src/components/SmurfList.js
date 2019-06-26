import React from 'react';

import Smurf from "./Smurf";

const SmurfList = props => {
    return (
        <ul>
            {props.smurfs.map(smurf => {
                return <Smurf 
                    key={smurf.id}
                    smurf={smurf}
                    height={smurf.height}
                    age={smurf.age} />
            })}
        </ul>
    );
};

export default SmurfList;