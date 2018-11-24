import React, {Component} from "react";
import './search.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onTermChange = (e) => {
        const {wordFilter = () => {}} = this.props;
        this.setState({
            term: e.target.value
        });

        wordFilter(e.target.value);
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   value={this.state.term}
                   onChange={ this.onTermChange } />
        );
    };
}