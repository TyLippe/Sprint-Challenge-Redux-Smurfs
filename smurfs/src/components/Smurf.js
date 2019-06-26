import React from 'react';
import { deleteSmurf } from '../actions';
import { connect } from 'react-redux';

class Smurf extends React.Component {
    render() {
    return ( 
        <li>
        <h1>{this.props.smurf.name}</h1>
        <h2>{this.props.smurf.age} years old</h2>
        <h2>{this.props.smurf.height} tall</h2>
        <button onClick={() => this.props.deleteSmurf(this.props.smurf.id)}>
            Delete
        </button>
    </li>
)}
};

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps,
    { deleteSmurf }
)(Smurf);