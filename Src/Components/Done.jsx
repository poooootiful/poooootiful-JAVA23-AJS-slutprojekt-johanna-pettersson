import { useState } from "react"
import { removetask } from "../utils/Firebase.js";

function Done ({task}){

    const [taskname, settaskname] = useState('')
    const [key, setkey] = useState ('')

    function handleTaskName (event) {
        settaskname = (event.target.value)
    }
    function handlekey (event) {
        setkey = (event.target.value)
    }

    function handleremove (event) {
        removetask (key)
    }
    
    return (
        <div>
            {task.map((task, index) => (
                <form key={task.Id} onchange = {handlekey} onSubmit={handleremove}>
                    <label>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <label>{task.Assignedto}</label><br/>
                    <input type="submit" value="Remove"/>
                </form>
            ))}
    </div>
    )
    
}
export default Done;