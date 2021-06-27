import { React, Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem('Coffee'),
            this.createTodoItem('Top'),
            this.createTodoItem('Cool'),
        ],
        term: '',
        filter: 'all', // active, all, done
    };

    onSearchChange = (term) => {
        this.setState({ term: term.trim().toLowerCase() });
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    search(data, term) {
        if (!term) {
            return data;
        }

        return data.filter(item => item.label.toLowerCase().includes(term))
    }

    filter(data, filter) {
        switch (filter) {
            case 'all':
                return data;
            case 'active':
                return data.filter(item => !item.done);
            case 'done':
                return data.filter(item => item.done);
            default:
                return data;
        }
    }

    // setFilterValue(text) {
    //     this.setState({ searchValue: target.value });
    // }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = this.findIndexByProp(todoData, 'id', id);
            const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return { todoData: newData };
        });
    };

    addItem = (label) => {
        this.setState(({ todoData }) => {
            const newData = [...todoData, this.createTodoItem(label)];

            return { todoData: newData };
        });
    };

    createTodoItem(label) {
        return { label, important: false, done: false, id: this.maxId++ };
    }

    onToggleImportant = (id) => {
        this.toggleProperty('important', id);
    };

    onToggleDone = (id) => {
        this.toggleProperty('done', id);
    };

    toggleProperty = (prop, id) => {
        this.setState(({ todoData }) => {
            const idx = this.findIndexByProp(todoData, 'id', id);
            const oldItem = todoData[idx];
            const newItem = { ...oldItem, [prop]: !oldItem[prop] };
            const newData = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

            return { todoData: newData };
        });
    };

    findIndexByProp(data, property, id) {
        return data.findIndex(el => el[property] === id)
    }

    render() {
        const { todoData, term, filter } = this.state;
        const doneCount = todoData
            .filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        const visibleData = this.filter(
            this.search(todoData, term),
            filter);

        return (
            <div className="app" >
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="d-flex w-100 justify-content-between mb-4 flex-wrap">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>
                <TodoList
                    todos={visibleData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone} />
                <ItemAddForm onAddItem={this.addItem} />
            </div>
        );
    }
};