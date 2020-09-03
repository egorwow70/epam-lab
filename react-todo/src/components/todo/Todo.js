import React from 'react';
import TodoHeader from './todo-header/TodoHeader';
import TodoList from './todo-list/TodoList';
import TodoAddButton from './todo-add-button/TodoAddButton';

export default function Todo(props) {
    const todoList = props.todoList;

    const isCanAddTodo = todoList.length < 6 
        ? true
        : false;

    return (
        <div className="-app-todo">
            <TodoHeader />
            { todoList.length ? (
                <TodoList 
                todoList = { todoList }
                onDoneChange = { props.onDoneChange }
                onRemoveChange = { props.onRemoveChange }/>
            ) : (
                <div className="-app-todo__no-todo">
                    <h1 className="-app-todo__no-todo-title">
                        No current todo
                    </h1>
                    <h3 className="-app-todo__no-todo-subtitle">
                        Add it if you need to make something
                    </h3>
                </div>
            )}
            <TodoAddButton 
                canAddTodo = { isCanAddTodo }
                onAddChange = { props.onAddChange }/>
        </div>
    )
}