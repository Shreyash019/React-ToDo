import React from 'react';
import './task.css';
import {FaRegCheckSquare, FaTrashAlt} from "react-icons/fa";

const ShowTask = ({task, removeTask}) => {

  const taskOnClick = (e) =>{
    e.preventDefault();
  }

  const taskToCompleted = (e)=>{
    e.preventDefault();
    removeTask(task.id);
    alert('Task completed.')
  }

  const taskToRemove = (e)=>{
    e.preventDefault();
    removeTask(task.id);
  }

  return (
    <div className='show-task-details' onClick={taskOnClick}>
        <h5>{task.name}</h5>
        <textarea value={task.summary} readOnly>{task.summary}</textarea>
        <p><button onClick={taskToCompleted} style={{backgroundColor:"green"}}><FaRegCheckSquare class="icon-style" style={{backgroundColor:"green", color: "white"}}/></button></p>
        <p><button onClick={taskToRemove} style={{backgroundColor:"red"}}><FaTrashAlt class="icon-style" style={{backgroundColor:"red", color: "white"}}/></button></p>
    </div>
  )
}

export default ShowTask