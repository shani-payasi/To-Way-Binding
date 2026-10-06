import React from 'react'
import { useState } from 'react'

const App = () => {

  const [tasks, setTasks] = useState([{
    id: 1,
    name: 'Sample Task',
    completed: false
  }]);
  const [taskName, setTaskName] = useState('');
  const [completed, setCompleted] = useState(true);
  const [city,setCity] = useState("pune");

  return (
    <>
      <h1>Create tasks</h1>
      <form >
        <input onChange={
          (e) => {
            setTaskName(e.target.value)
            console.log(e.target.value)
          }
        } value={taskName} type="text" placeholder="Task name" />
        <br />
        <input
          checked={completed} onChange={(e) => {
            setCompleted(e.target.checked)
            console.log(e.target.checked)
          }} type="checkbox" />
        <br />

        <select onChange={(e)=>{
          setCity(e.target.value) 
        }} value={city} >
          <option value="delhi"> delhi </option>
          <option value="pune"> pune </option>
          <option value="indore"> indore </option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </>
  )
}

export default App