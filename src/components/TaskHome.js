import React, {useState} from 'react';
import ShowTask from './ShowTask';

const TaskHome = () => {

  const [tasks, setTasks] = useState([]);
  const [cnt, setCnt] = useState(1)
  const [task, setTask] = useState({
    name: '',
    status: '',
    id:0
  });


  const handleOnChange = (e)=> {
    e.preventDefault()
    setTask({...task, [e.target.name]: e.target.value})
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    setCnt(cnt+1)
    setTask({...task, id:task.name+cnt})
    setTasks((tsk)=>[...tsk, task]);
  }

  const removeTask = (i)=>{
    let tsks = tasks.filter((task)=>{
      if(task.id===i){
        return null
      }
      return task
    })
    setTasks(tsks)
  }

  const updateTask = (i)=>{
    let tsks = tasks.filter((task)=>{
      if(task.id===i){
        return task
      }
      return null
    })
    console.log(tsks[0])
  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={formSubmit}>
            <input type="text" name="name" value={task.name} onChange={handleOnChange} placeholder="Task"/><br/>
            <input type="text" name="status" value={task.status} onChange={handleOnChange} placeholder="Status"/><br/>
            <button>Submit</button>
          </form>
        </div>
      </div>
      {
        tasks.map((task, index)=>{
          return <ShowTask key={task.id} task={task} removeTask={removeTask} updateTask={updateTask}/>
        })
      }
    </>
  )
}

export default TaskHome