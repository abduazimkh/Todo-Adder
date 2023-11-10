import { useRef, useState } from "react";
import "./TodoEditForm.scss";
import { toast } from 'react-toastify';
import party from "../../assets/images/poper.gif" 


const TodoEditForm = ({id, isEditing, handleEditTask, todos, setTodos, todonameedit}) => {
    const [todoname, setTodoname] = useState(todonameedit);
    const editInput = useRef();

    const editTask = (e) => {
        e.preventDefault();
        setTodos(todos.map(todo => todo.id === id ? {...todo, todoname: todoname, isEditing: false} : todo))
        toast.warning(<div className="toast-message"> <img src={party} alt="" /> Task has been edited!</div>, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

  return (
    <div onClick={handleEditTask} className={`todo-edit-form ${isEditing && "todo-edit-form--active"} `}>
        <form onSubmit={editTask} className="edit__form">
            <div className="form__input-wrapper">
              <label htmlFor="todo-input" >Todo name</label>
              <input ref={editInput} type="text" id='todo-input' onChange={(e) => setTodoname(e.target.value.trim())} value={todoname}/>
            </div>
            <button className="edit__form-btn">Edit</button>
        </form>
    </div>
  )
}

export default TodoEditForm