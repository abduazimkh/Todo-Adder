import { useEffect, useRef, useState } from "react";
import formatdate from "../../helpers/formatdate";
import "./TodoItem.scss";
import party from "../../assets/images/poper.gif" 
import trash from "../../assets/images/trash.gif" 
import { toast } from 'react-toastify';
import TodoEditForm from "../todo-edit-form/TodoEditForm";


const TodoItem = ({id,todoname,isCompleated,isEdited,isEditing,date,alarm, todos, setTodos}) => {
  const [todoactions, setTodoactions] = useState(false)
  const [popper, setPopper] = useState(false)
  const todoItem = useRef();
  let timeout;
  const {hours, minutes} = formatdate(date)

    const handleToggleActions = (e) => {
      if(e.target.classList.contains("todo-item")){
        setTodoactions(!todoactions)
      }
    } 

    const handleCompleteTask = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleated: !todo.isCompleated} : todo))
      if(!isCompleated){
        setPopper(true)
        toast.success(<div className="toast-message"> <img src={party} alt="" /> Task has been completed!</div>, {
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
    }

    const handleDeleteTask = (id) => {
      timeout = setTimeout(() => {
        setTodos(todos.filter(todo => todo.id !==id && todo))
      }, 400)
      todoItem.current.classList.add("todo-tem--remove")
      toast.error(<div className="toast-message"> <img src={trash} alt="" /> Task has been deleted! <button className="undo" onClick={handleUndoDelete}>Undo</button> </div>, {
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

    const handleEditTask = (e) => {
      if(e.target.classList.contains("edit-btn") || e.target.classList.contains("todo-edit-form")){
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
      }
    }

    const handleUndoDelete = () => {
      clearTimeout(timeout)
      todoItem.current.classList.remove("todo-tem--remove")

    }


    // useEffect(() => {
    //   if(isCompleated){
    //     setPopper(true)
    //     toast.success(<div className="toast-message"> <img src={party} alt="" /> Task has been completed!</div>, {
    //       position: "top-right",
    //       autoClose: 4000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //     })
    //     setTimeout(() => {
    //       setPopper(false)
    //     }, 2000)
    //   }
    // }, [isCompleated])

    

    return (
      <>
        <div className="todo-item" ref={todoItem} onClick={handleToggleActions}>
        <div className={`item__content-wrapper ${isCompleated && "item__content-wrapper--active"}`}>
          <h3 className="item__name">{todoname}</h3>
          <p className="item__date">{`${hours}: ${minutes}`}</p>
        </div>
        <div  className={todoactions ? "item__actions item__actions--active" : "item__actions"}>
          <button onClick={() => handleCompleteTask(id)}> {popper && <img src={party} alt="" />} Complete</button>
          <button onClick={handleEditTask} className="edit-btn">Edit</button>
          <button onClick={() => handleDeleteTask(id)}>Delete</button>
        </div>
        {/* onClick={e => e.stopPropagation()} */}
        </div>
        <TodoEditForm todonameedit={todoname} id={id} todos={todos} setTodos={setTodos} isEditing={isEditing} handleEditTask={handleEditTask}/>
      </>
  )
}

export default TodoItem