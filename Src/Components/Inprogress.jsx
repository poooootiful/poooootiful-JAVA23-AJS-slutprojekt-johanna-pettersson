import { useState } from "react"
import { getid, updateToDone } from "../utils/Firebase.js";

function Inprogress ({task}) {

    const [taskname, settaskname] = useState('')
    const [id, setid] = useState ('')

    function handleTaskName (event) {
        settaskname = (event.target.value)
        setid = getid(taskname);
    }

    function handleSubmit (event) {
        console.log(id)
        updateToDone (id)
    }

    return (
        <div>
            {task.map((task, index) => (
                <form key={index} onsubmit={handleSubmit}>
                    <label onChange ={handleTaskName}>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <label>{task.Assignedto}</label><br/>
                    <input type="submit" value="Done"/>
                </form>
            ))}
        </div>
    )
}

export default Inprogress;