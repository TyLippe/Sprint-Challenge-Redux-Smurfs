import React from 'react';
import axios from 'axios';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: {
                name: '',
                height: '',
                age: ''
    }};
}

    addSmurf = smurf => {
        axios.post("http://localhost:3333/smurfs", smurf)
            .then((res) => {
            this.setState({ smurfs: res.data})
            console.log('New Smurf', smurf)
        })
            .catch(err => alert("Smurf not added", err))
}

    handleAdd = e => {
        this.addSmurf(this.state.smurf);
        this.setState({
            smurf: {
                name: "",
                age: "",
                height: ""
        }
    })
}

    handleInputChange = e => {
    e.persist();
        let value = e.target.value;
        this.setState(prevState => ({
            smurf: {
                ...prevState.smurf,
                [e.target.name]: value
        }
    }));
};

    render() {
        return (
            <form onSubmit={this.handleAdd}>
        <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.props.smurf.name}
            name="name"
        />
        <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
        />
        <input
            type="text"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
        />
        <button type="submit">Add to the village</button>
        </form>
        )}
}

export default SmurfForm;