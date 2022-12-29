import React from 'react'
import './TodoItemStyle.css'
const TodoItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div className='todo-item-container'>
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted
                ? null
                : <button
                    onClick={() => onCompletedPressed(todo.text)}
                    className="completed-button">Mark As Completed</button>}
            <button
                onClick={() => onRemovePressed(todo.text)}
                className="remove-button">Remove</button>
        </div>
    </div>
  )
};

export default TodoItem