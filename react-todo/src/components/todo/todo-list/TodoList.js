import React from 'react';
import TodoItem from './todo-item/TodoItem';

export default function TodoList(props) {
    const todoList = props.todoList;

    return ( 
        <ul className = "-app-todo__list" > 
            { todoList.map((todoItem) => {
                return <TodoItem 
                    todoItem = { todoItem }
                    key = { todoItem.id }
                    onDoneChange = { props.onDoneChange }
                    onRemoveChange = { props.onRemoveChange }
                />
            }) } 
        </ul>
    )
}