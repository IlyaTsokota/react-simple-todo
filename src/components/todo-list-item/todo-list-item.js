import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important }) => {
    const style = {
        color: important ? 'tomato' : 'black',
    };

    return (
        <span className="todo-list-item d-flex align-items-center justify-content-between">
            <span
                className="todo-list-item-label"
                style={style}>
                {label}
            </span>
            <div>
                <button type="button"
                    className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
                </button>
                <button type="button"
                    className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
                </button>
            </div>
        </span>
    );
};

export default TodoListItem;