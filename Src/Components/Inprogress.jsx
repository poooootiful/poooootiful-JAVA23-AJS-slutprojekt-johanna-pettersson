import { useState } from "react"
import { getid, updateToDone } from "../utils/Firebase.js";

function Inprogress ({task}) {

    const [taskname, settaskname] = useState('')
    const [key, setkey] = useState ('')

    function handleTaskName (event) {
        settaskname = (event.target.value)
    }

    function handlekey (event) {
        setkey = (event.target.value)
    }

    function handleSubmit (event) {
        updateToDone (key)
    }

    return (
        <div>
            {task.map((task) => (
                <form key={task.Id} onchange = {handlekey} onsubmit={handleSubmit}>
                    <label >{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <label>{task.Assignedto}</label><br/>
                    <input type="submit" value="Done"/>
                </form>
            ))}
        </div>
    )
}

export default Inprogress;