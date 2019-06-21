import React from 'react';

import Smurf from "./Smurf";
import { sumrfReducer } from '../reducers';

const SmurfList = props => {
    return (
        <ul>
            {props.smurfs.map(smurf => {
                return <Smurf key={sumrf.name} smurf={smurf} />
            })}
        </ul>
    );
};

export default SmurfList;