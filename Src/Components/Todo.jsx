import { useEffect,useState } from "react";
import {database} from "firebase.js"
import { get, ref } from "firebase/database";
import Inprogress from "./Inprogress";
import { getid, updateToInprogrees } from "../utils/Firebase";

const {taskname, settaskname} = useState('')
const {name, setname} = useState ('')
const {id,setid} = useState ('')

function handleTaskName (event) {
    settaskname = (event.target.value)
    setid = getid(taskname);
}

function handleInput (event) {
    setname = (event.target.value)
}

function handleSubmit (event) {
    updateToInprogrees (name, id)
}


function Todo ({task}) {   
    return (
        <div>
            {task.map((task, index) => (
                <form key={index} onsubmit={handleSubmit}>
                    <label>{task.Task} onsubmit={handleTaskName}</label><br/>
                    <label>{task.Category}</label><br/>
                    <input type="text" onsubmit={handleInput}/><br/>
                    <input type="submit" value="Assign"/>
                </form>
            ))}
        </div>
    )
}

export default Todo;