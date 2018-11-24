import React, {Component} from 'react';

import "./item-add-form.css";

export default class ItemAddForm extends Component {

    state = {
      label: ''
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                    onSubmit={this.onSubmit}>
                <input type="text"
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="Tap new item"
                        value={this.state.label}/>
                <button
                    className="btn btn-outline-secondary" >
                    Add button
                </button>
            </form>
        );
    }

    onSubmit = (event) => {
        this.props.add(this.state.label);
        this.setState({
            label: ''
        });
        event.preventDefault();
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };
}