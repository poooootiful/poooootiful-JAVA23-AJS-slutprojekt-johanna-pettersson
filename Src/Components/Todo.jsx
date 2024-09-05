import { useState } from "react"
import { getid, updateToInprogrees } from "../utils/Firebase.js";


function Todo ({task}) {   
    const [name, setname] = useState ('')
    const [taskkey, settaskkey] = useState ('')

    function handleInput (event) {
        setname (event.target.value)
    }

    function handlekey (event) {
        settaskkey = (event.target.value)
    }

    async function handleSubmit () {
        updateToInprogrees (name, taskkey)
    }

    return (
        <div>
            {task.map((task) => (
                <form key={task.Id} onchange = {handlekey} onSubmit={handleSubmit}>
                    <label>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <input type="text" onChange={handleInput}/><br/>
                    <input type="submit" value="Assign"/>
                </form>
            ))}
        </div>
    )
}

export default Todo;