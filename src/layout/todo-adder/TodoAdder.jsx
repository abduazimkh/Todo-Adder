import { useState } from "react";
import "./TodoAdder.scss"
import { FiPlus } from "react-icons/fi"
import PropTypes from 'prop-types';
import useRandom from "../../hooks/useRandom";

const TodoAdder = ({todos, setTodos}) => {
  const [todoname, setTodoname] = useState("");
  const id = useRandom();
  const handleCreateTodo = (e) => {
    const todo = {
      id: id,
      todoname: todoname,
      isCompleated: false,
      isEdited: false,
      isEditing: false,
      date: new Date(),
      alarm: new Date().getTime() + 200000
    }
    
    setTodos([...todos, todo ])
    e.preventDefault();
    setTodoname("")
   }

  return (
    <div className='todo-adder'>
      <h1 className='adder__title'>Todolist</h1>
      <form className='adder__form' onSubmit={handleCreateTodo}>
        <div className="form__input-wrapper">
          <label htmlFor="todo-input" >Todo name</label>
          <input type="text" id='todo-input' onChange={(e) => setTodoname(e.target.value.trim())} value={todoname}/>
        </div>
          <button type='submit'> <FiPlus/> Create</button>
      </form>
    </div>
  )
}

TodoAdder.proptypes = ({
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired
})

export default TodoAdder