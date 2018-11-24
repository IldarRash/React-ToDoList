import React from "react";
import './search.css';

const Search = ({wordFilter}) => {
    const onChangeFilter = (event) => wordFilter(event.target.value);

    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               onChange={onChangeFilter}
        />
    );
}

export default Search;