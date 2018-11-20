import React, {Component} from 'react';
import './App.css';

import AppHeader from './components/app-header'
import TodoList from './components/todo-list'
import Search from './components/search'
import ReactDOM from "react-dom";


const Index = () => {
    const todoDate = [
        { label: 'item1', important: false, id:1},
        { label: 'item2', important: false, id:2},
        { label: 'item3', important: true, id:3}
    ];

    return (
        <div className="page">
            <AppHeader/>
            <Search/>
            <TodoList items = {todoDate}/>
        </div>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));
if (module.hot) {
    module.hot.accept();
}



