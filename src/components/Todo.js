import React from 'react';
import { updateToDo } from '../actions';
import { connect } from 'react-redux';



const ToDo = ({ todo, key, updateToDo }) => {
  const handleClick = (todo) => {
    updateToDo(todo)
  }
  let classNameText = "";
  if(todo.completed) {
    classNameText = "completed"
  } else {
    classNameText = "not-completed"
  }
  return (
    <li
      className={classNameText}
      onClick={() => handleClick(todo)}>
      {todo.todo}
    </li>
  )
}
const mapDispatchToProps = dispatch => ({
  updateToDo: todo => dispatch(updateToDo(todo))
})

export default connect(null, mapDispatchToProps)(ToDo);
