import { removetask } from "../utils/Firebase";

const {taskname, settaskname} = useState('')
const {id,setid} = useState ('')

function handleTaskName (event) {
    settaskname = (event.target.value)
    setid = getid(taskname);
}

function handleremove () {
    removetask (id)
}

function Done ({task}){
    
    return (
        <div>
            {task.map((task, index) => (
                <form key={index} onSubmit={handleremove}>
                    <label>{task.Task} onsubmit={handleTaskName}</label><br/>
                    <label>{task.Category}</label><br/>
                    <label>{task.Assignedto}</label><br/>
                    <input type="submit" value="Remove"/>
                </form>
            ))}
    </div>
    )
    
}
export default Done;