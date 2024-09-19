import { useState } from "react"
import {updateToInprogrees } from "../utils/Firebase.js";


function Todo ({task}) {   
    const [name, setname] = useState('')

    function handleInput (event) {
        setname (event.target.value)
    }

    function handleSubmit (event, key) {
        event.preventDefault();
        updateToInprogrees (name, key)
    }

    return (
        <div>
            {task.map((task) => (
                <form key={task.Id} onSubmit={event=>handleSubmit(event, task.Id)} >
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