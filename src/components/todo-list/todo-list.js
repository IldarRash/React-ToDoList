import React from "react";
import ListItem from '../list-item/list-item';

import './todo-list.css';

const TodoList = ({items, onDeleted, onDone, onImportant}) => {

    const elements = items.map((item) => {
        const {id, ...itemProps} = item;
        return (
          <li className="list-group-item" key={id}>
              <ListItem {...itemProps}
                        onDeleted={() => onDeleted(id)}
                        onDone={() => onDone(id)}
                        onImportant = {() => onImportant(id)}
              />
          </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default TodoList;