import React from 'react'
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from './actions';
import NewTodo from './NewTodo.js'
import TodoItem from './TodoItem.js'
import './TodoStyle.css'
const Todo = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  return (
    <div className='list-cont'>
      <NewTodo />
      {
        todos.map((todo,i) =>
          <TodoItem 
          todo={todo}
          key={i}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}/>)
      }
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);