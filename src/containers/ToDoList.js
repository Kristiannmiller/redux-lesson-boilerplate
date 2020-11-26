import React from 'react';
import ToDo from '../components/Todo'
import { connect } from 'react-redux';

const ToDoList = ({ todos }) => {
  const allTodos = todos.map(todo => {
    return (
      <ToDo
        todo={todo}
        key={todo.id}
      />
    )
  })
  return (
    <ul>
      {allTodos}
    </ul>
  )
}
const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);
