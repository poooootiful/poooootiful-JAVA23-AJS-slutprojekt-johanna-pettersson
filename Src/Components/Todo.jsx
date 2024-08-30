import { useState } from "react"
import { getid, updateToInprogrees } from "../utils/Firebase.js";


function Todo ({task}) {   
    const [taskname, settaskname] = useState('')
    const [name, setname] = useState ('')
    const [id,setid] = useState ('')

    function handleTaskName (event) {
        const tasknamevalue = event.target.value;
        settaskname (tasknamevalue)
        const idvalue = getid (tasknamevalue)
        setid (idvalue);
    }

    function handleInput (event) {
        setname (event.target.value)
    }

    async function handleSubmit (event) {
        updateToInprogrees (name, id)
    }

    return (
        <div>
            {task.map((task, index) => (
                <form key={index} onSubmit={handleSubmit}>
                    <label onChange={handleTaskName}>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <input type="text" onChange={handleInput}/><br/>
                    <input type="submit" value="Assign"/>
                </form>
            ))}
        </div>
    )
}

export default Todo;