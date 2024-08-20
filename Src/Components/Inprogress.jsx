import { getid, updateToDone } from "../utils/Firebase";

const {taskname, settaskname} = useState('')
const {id, setid} = useState ('')

function handleTaskName (event) {
    settaskname = (event.target.value)
    setid = getid(taskname);
}

function handleSubmit (event) {
    updateToDone (id)
}

function Inprogress ({task}) {
    
    return (
        <div>
            {task.map((task, index) => (
                <form key={index} onsubmit={handleSubmit}>
                    <label>{task.Task} onsubmit ={handleTaskName}</label><br/>
                    <label>{task.Category}</label><br/>
                    <label>{task.Assignedto}</label><br/>
                    <input type="submit" value="Done"/>
                </form>
            ))}
        </div>
    )
}

export default Inprogress;