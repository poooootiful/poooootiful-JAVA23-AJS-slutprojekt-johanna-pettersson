import { useState } from "react"
import { removetask } from "../utils/Firebase.js";

function Done ({task}){

    const [taskname, settaskname] = useState('')
    const [id,setid] = useState ('')

    function handleTaskName (event) {
        settaskname = (event.target.value)
        setid = getid(taskname);
    }

    function handleremove () {
        removetask (id)
    }
    
    return (
        <div>
            {task.map((task, index) => (
                <form key={index} onSubmit={handleremove}>
                    <label onChange={handleTaskName}>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <label>{task.Assignedto}</label><br/>
                    <input type="submit" value="Remove"/>
                </form>
            ))}
    </div>
    )
    
}
export default Done;