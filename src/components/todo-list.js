import React from "react";
import ListItem from './list-item';

const TodoList = ({items}) => {

    const elements = items.map((item) => {
        return (
          <li key={item.id}>
              <ListItem {...item}/>
          </li>
        );
    });
    return (
        <ul>
            {elements}
        </ul>
    );
}

export default TodoList;