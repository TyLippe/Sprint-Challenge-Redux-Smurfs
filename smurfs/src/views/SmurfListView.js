import React from 'react';
import { connect } from 'react-redux';

import { SmurfList } from '../components';
import { SmurfForm } from '../components';
import { getSmurf } from '../actions';

class SmurfListView extends React.Component {

    componentDidMount() {
        this.props.getSmurf();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            console.log(this.props.smurfs)
        }
    return (    
        <div>
            <SmurfList smurfs={this.props.smurfs} />
            <SmurfForm smurf={this.props.smurfs} />
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfReducer.smurfs,
        fetchingSmurfs: state.smurfReducer.fetchingSmurfs
}
}

    export default connect(
        mapStateToProps,
        { getSmurf }
    )(SmurfListView);
