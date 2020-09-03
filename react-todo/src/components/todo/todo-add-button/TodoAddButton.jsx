import React from 'react';

export default function TodoAddButton(props) {
    const isCanAddTodo = props.canAddTodo;
    const addButtonTitle = isCanAddTodo
        ? 'click to add new todo'
        : 'before adding todo, please do current todos or delete some of them';

    return (
        <div className="-app-todo__add-button-wrapper">
            <button
                className="-app-todo__add-button"
                onClick={() => props.onAddChange()}
                title={addButtonTitle}
                disabled={!isCanAddTodo}>
                add todo
            </button>
        </div>
    )
}