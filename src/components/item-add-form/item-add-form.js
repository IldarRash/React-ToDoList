import React, {Component} from 'react';

import "./item-add-form.css";

export default class ItemAddForm extends Component {



    render() {
        const {add} = this.props;
        return (
            <div className="item-add-form">
                <button onClick={() => add("Hello world")} className="btn btn-outline-secondary" >Add button</button>
            </div>
        );
    }

}