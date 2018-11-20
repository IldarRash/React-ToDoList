import React from "react";

const ListItem = ({label, important = false}) => {
    const liStyle = {
        color: important ? 'tomato' : 'black'
    };
    return <span style={liStyle}>{label}</span>
}

export default ListItem;