import React, {Component} from 'react';
import AppHeader from '../header/'
import TodoList from '../todo-list'
import Search from '../search/'
import ItemStatusFilter from '../item-status-filter'

import './app.css';

export default class App extends Component {

    state = {
        todoDate: [
            { label: 'item1', important: false, id:1},
            { label: 'item2', important: false, id:2},
            { label: 'item3', important: true, id:3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoDate}) => {
            const idx = todoDate.findIndex((el) => el.id === id);

            const newArray = [
                ...todoDate.slice(0, idx),
                ...todoDate.slice(idx + 1)
            ]

            return {
                todoDate: newArray
            };
        });
    };


    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <Search />
                    <ItemStatusFilter />
                </div>
                <TodoList items = {this.state.todoDate} onDeleted = {this.deleteItem}/>
            </div>
        );
    }

};