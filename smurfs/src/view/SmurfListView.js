import React from 'react';
import { connect } from 'react-redux';

import { SmurfList } from '../components";
import { getSmurfs } from '../actions';

class SmurfListView extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if (this.props.fetchingSmurfs) {
            console.log(this.props.smurfs)
        }
        return (
            <div className='SmurfList'>
                <SmurfList smurfs={this.props.smurfs} />
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
        { getSmurfs }
    )(SmurfListView);
