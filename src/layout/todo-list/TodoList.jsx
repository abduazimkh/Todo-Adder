import React from 'react'
import "./TodoList.scss"
import PropTypes from "prop-types";
import TodoItem from '../../components/todo-item/TodoItem';

const TodoList = ({todos, setTodos}) => {
  return (
    <div className='todo-list'>
      {
        todos.map(({id, todoname, isCompleated, isEdited, isEditing, date, alarm}) => 
          <TodoItem 
            key={id} 
            id={id}
            todoname={todoname}
            isCompleated={isCompleated}
            isEdited={isEdited}
            isEditing={isEditing}
            date={date}
            alarm={alarm}
            todos={todos}
            setTodos={setTodos}
          />
        )
      }
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    todoname: PropTypes.string,
    isCompleated: PropTypes.bool,
    isEdited: PropTypes.bool,
    isEditing: PropTypes.bool,
    date: PropTypes.object,
    alarm: PropTypes.number
  })),
  setTodos: PropTypes.func.isRequired
}

export default TodoList