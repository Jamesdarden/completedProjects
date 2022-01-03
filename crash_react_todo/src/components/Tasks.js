import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle}) => {
    //sconst [tasks, setTasks] = useState() // name of state and function suestate default // use state is immutable one way
    return (
        <> 
            {tasks.map((task, index)=>(
                <Task key={index} task= {task} onDelete={onDelete} onToggle={onToggle} />  // task component
            ))}
        </>
    )
}

export default Tasks
