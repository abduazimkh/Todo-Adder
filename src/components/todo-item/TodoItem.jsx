import "./TodoItem.scss";

const TodoItem = ({key,todoname,isCompleated,isEdited,isEditing,date,alarm}) => {
  return (
    <div className="todo-item">
        <h3>{todoname}</h3>
    </div>
  )
}

export default TodoItem