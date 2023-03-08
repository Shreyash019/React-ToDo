import React from 'react'

const ShowTask = ({task, updateTask, removeTask}) => {

  const taskOnClick = (e) =>{
    e.preventDefault();
  }

  const taskToRemove = (e)=>{
    e.preventDefault();
    removeTask(task.id);
  }
  
  const taskToUpdate = (e)=>{
    e.preventDefault();
    updateTask(task.id);
  }

  return (
    <div onClick={taskOnClick}>
      <ul>
        <li>{task.name}</li>
        <li>{task.status}</li>
        <button onClick={taskToUpdate}>Update Task</button>
        <button onClick={taskToRemove}>Remove</button>
      </ul>
    </div>
  )
}

export default ShowTask