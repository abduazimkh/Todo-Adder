import "./TodoContainer.scss";
import TodoAdder from "../todo-adder/TodoAdder";
import TodoList from "../todo-list/TodoList";
import { useEffect, useState } from "react";

const TodoContainer = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todo-tasks")) || [])
  console.log(todos);
  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo-container">
      <TodoAdder todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodoContainer