import "./TodoContainer.scss";
import TodoAdder from "../todo-adder/TodoAdder";
import TodoList from "../todo-list/TodoList";
import { useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState([])
  return (
    <div className="todo-container">
      <TodoAdder todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  )
}

export default TodoContainer