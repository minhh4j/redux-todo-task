import React, { useState } from 'react'
import { MdAddCircle } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeColor, deleteTodo } from './TodoSlice';
import "../App.css"

function TodoList() {
    const [text, setText] = useState("")
    const todo = useSelector((state) => state.todos.value)
    const dispatch = useDispatch()

    const handleAdd = () => {
        if(text.length){
            dispatch(addTodo(text))
            setText("")
        }
    }

    const handleColor = (id) => {
        dispatch(changeColor(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

  return (
    <div className='todo-container'>
        <h1 className='todo-title'>ToDo List</h1>
        <br />
        <input type="text" placeholder='Enter ToDo'  required onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={handleAdd}><MdAddCircle /></button>
        
        <div>
            <ul className='todo-list'>
                {todo.map((item) => (
                    <li className='todo-item ' key={item.id} style={{backgroundColor:item.color}}>  <span className="todo-text">{item.text}</span> <button onClick={() => handleColor(item.id)}>Done</button><button onClick={() => handleDelete(item.id)}>Delete</button></li>
                    
                ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoList