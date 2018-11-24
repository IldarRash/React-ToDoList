import React, {Component} from 'react';
import AppHeader from '../header/';
import TodoList from '../todo-list';
import Search from '../search/';
import ItemStatusFilter from '../item-status-filter';
import ItemAddButton from '../item-add-form';
import './app.css';

export default class App extends Component {
    maxid = 0;
    state = {
        todoData: [
            this.createTodoItem('item1'),
            this.createTodoItem('item2'),
            this.createTodoItem('item3')
        ],
        copy: [
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxid++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (label) => {
        const  newItem  = this.createTodoItem(label)
        this.setState(({todoData}) => {

              const newArray = [
                  ...todoData,
                  newItem
              ];

              return {
                  todoData: newArray
              };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {...oldItem,
            [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onFilter = (word) => {
        this.setState(({todoData}) => {
            const newArray = todoData.filter((el) => el.label === word)

            return {
                copy : newArray
            };
        });
    };

    render() {
        const doneCount = this.state.todoData.filter((el) => el.done).length;

        const importantCount = this.state.todoData.filter((el) => el.important).length

        return (
            <div className="todo-app">
                <AppHeader toDo={importantCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <Search wordFilter={this.onFilter}/>
                    <ItemStatusFilter />
                </div>
                <TodoList
                    items = {this.state.copy}
                    onDeleted = {this.deleteItem}
                    onDone = {this.onToggleDone}
                    onImportant = {this.onToggleImportant}
                />
                <ItemAddButton add = {this.addItem}/>
            </div>
        );
    }

};


