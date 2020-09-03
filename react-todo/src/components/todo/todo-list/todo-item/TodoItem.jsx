import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItem: props.todoItem,
            todoItemInputClasses: ['-app-todo__item-input'],
        }
    }

    handleChange(event) {
        const todoItemIdAfterChange = this.state.todoItem.id;
        const todoItemTitleAfterChange = event.target.value;
        const todoItemIsDoneAfterChange = this.state.todoItem.isDone;
        let todoItemAfterChange = {
            id: todoItemIdAfterChange,
            title: todoItemTitleAfterChange,
            isDone: todoItemIsDoneAfterChange
        }

        this.setState(state => ({
            ...state,
            todoItem: todoItemAfterChange
        }));
    }

    toggleDoneEffection(todoId) {
        const todos = document.querySelectorAll('.-app-todo__item-input');
        todos.forEach(todo => {
            if (todo.id === todoId) {
                if (todo.classList.contains('-app-todo__item-input_done')) {
                    todo.classList.remove('-app-todo__item-input_done');
                } else {
                    todo.classList.add('-app-todo__item-input_done');
                }
            }
        })
    }

    doneTodo(todoId) {
        this.toggleDoneEffection(todoId);
        this.props.onDoneChange(todoId);
    }

    editTodo(todoId) {
        const todos = document.querySelectorAll('.-app-todo__item-input');
        todos.forEach(todo => {
            if (todo.id === todoId) {
                todo.focus();
            }
        })
    }

    removeTodo(todoId) {
        this.props.onRemoveChange(todoId);
    }

    render() {
        return (
            <li className="-app-todo__list-item">
                <button
                    className="-app-todo__item-done-button"
                    onClick={() => this.doneTodo(this.state.todoItem.id)}>
                </button>
                <input
                    className={this.state.todoItemInputClasses.join(' ')}
                    id={this.state.todoItem.id}
                    type="text"
                    value={this.state.todoItem.title}
                    onChange={event => this.handleChange(event)} />
                <button
                    className="-app-todo__item-edit-button"
                    onClick={() => this.editTodo(this.state.todoItem.id)}>
                </button>
                <button
                    className="-app-todo__item-delete-button"
                    onClick={() => this.removeTodo(this.state.todoItem.id)}>
                </button>
            </li>
        )
    }
}