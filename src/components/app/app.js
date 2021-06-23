import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
    const todoData = [
        { label: 'Drink', id: 1, },
        { label: 'Coffee', important: true, id: 2, },
        { label: '1', id: 3, },
    ];

    return (
        <div className="app">
            <AppHeader />
            <div className="d-flex w-100 justify-content-between mb-4 flex-wrap">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    )
};

export default App;