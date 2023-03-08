import React, {useState} from 'react';
import ShowTask from './ShowTask';
import './task.css';

const TaskHome = () => {

  const [tasks, setTasks] = useState([]);
  const [cnt, setCnt] = useState(1)
  const [task, setTask] = useState({
    name: '',
    summary: '',
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
      <div className='task-container'>
        <h2>React ToDo</h2>
        <div className='task-form'>
          <form onSubmit={formSubmit}>
            <input type="text" name="name" value={task.name} onChange={handleOnChange} placeholder="Task"/>
            <input type="text" name="summary" value={task.status} onChange={handleOnChange} placeholder="Summary"/>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <div className='show-container'>
        {/* <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Summary</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

          </tbody>

        </table> */}
          {
            tasks.map((task, index)=>{
              return <ShowTask key={task.id} task={task} removeTask={removeTask} updateTask={updateTask}/>
            })
          }
      </div>

    </>
  )
}

export default TaskHome