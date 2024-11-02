import './App.css';
import { useState, useEffect, useRef } from 'react';
import { TodoBox } from './components/todoBox';
function App() {
  const [todoList, setTodoList] = useState([])

  const input = useRef();

  const addNewTodoItem = ()=>{
    setTodoList(    
         [...todoList, input.current.value]
    )
    input.current.value = "";
  }

  return (
      <div className='container'>
        <div className='todolist-box'>
          <div className='todolist-header'>
            <input type = "text" ref = {input} placeholder='چه کاری میخواهی انجام بدی؟'/>
            <button onClick={addNewTodoItem}>
              افزودن به لیست
            </button>
          </div>
          <div className='todobox-container'>
          {
            todoList.map((value, index)=>{
              return (<TodoBox key = {index} title = {value}/>)
            })
          }
          </div>
        </div>
      </div>
  )
}

export default App;
