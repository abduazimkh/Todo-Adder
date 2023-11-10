import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoContainer from "./layout/todo-container/TodoContainer";

function App() {

  return (
    <>
      <TodoContainer/>
      <ToastContainer/> 
    </>
  )
}

export default App
