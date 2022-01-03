import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import React from 'react';
import Tasks from './components/Tasks'
import AddTask  from './components/AddTask'
import { useState, useEffect } from 'react'  // used when page loads
import { BrowserRouter as Router, Route} from 'react-router-dom'  // used when page loads

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    try {
      const getTasks = async () => {
       const tasksFromServer = await fetchTasks()
       setTasks(tasksFromServer)
     }

     getTasks()
    }catch (err){
      console.log(err)
    }
  }, [])

  // fetch tasks
  const fetchTasks = async () => {

     
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
     console.log(data)
    return data
   
  }

  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // add tasks
  const addTask =async (task) => {
    const res = await fetch(' http://localhost:5000/tasks', {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task), // turns a javascript object into a json string
    })
    // console.log(JSON.parse(res) )
    const data = await res.json() // because this is a promise //with out await does not add the data correctly
    // console.log(Object.values(task) +"tadd task")
    // console.log([...tasks, data]+" add task data")
    setTasks([...tasks, data])

    // const id = Math.round(Math.random()* 10000)+1
    // const newTask = {id, ...task}  // creating new object with randon id and copy of task
    
    // setTasks([...tasks, newTask])
}

// delete task
const deleteTask = async (id)=>{
  // console.log(id +" delete tasks")
  // console.log(task +"delete tasks task var")

  await fetch(`http://localhost:5000/tasks/${id}`, {method:'DELETE',})

  setTasks(tasks.filter((task) => task.id !== id))    // high order array method
}

// toggle reminder
const toggleReminder = async (id) => {
 // task.reminder = !task.reminder
 console.log(id+"toggle reminder")
  // setTasks(
  //   tasks.map((task) => task.id=== id? 
  //   {...task, reminder: !task.reminder}: task))
  const taskToToggle= await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'PUT',
    headers:{
      'content-type':'application/json',
    },
    body:JSON.stringify(updTask)
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) => 
      task.id === id ? {...task, reminder: data.reminder}: task 
    )
  )
}


  return (
    // <> </> is a fragment and thing can be returned with out a parent
    <Router>
    <div className="container">
     <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* shorter way of doing tinery if showAddTask true then show component/ if not show nothing */}
     
    <Route path='/' exact render={(props)=>(
      <>
        {showAddTask && <AddTask onAdd={addTask} />} 
        {tasks.length > 0? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No tasks to show')}
      </>
    )} />
    <Route path='/About' component={About} />
    <Footer />
    </div>
    </Router>
  );
}

// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;
