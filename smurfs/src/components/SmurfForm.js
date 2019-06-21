import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            height: '',
            age: ''
};
}

    handleAdd = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: "",
            age: "",
            height: ""
    })
}

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value })
};

    render() {
        return (
            <form onSubmit={this.handleAdd}>
        <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
        />
        <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
        />
        <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
        />
        <button type="submit">Add to the village</button>
        </form>
        )}
}

const mapStateToProps = () => {
    return {}
}

export default connect(
    mapStateToProps,
    { addSmurf }
)(SmurfForm);