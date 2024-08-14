import { useEffect,useState } from "react";
import {database} from "firebase.js"
import { ref } from "firebase/database";
import Inprogress from "./Inprogress";



function Todo ({task}) {   
    return (
        <div>
            {task.map((task, index) => (
                <form key={index}>
                    <label>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <input type="text"/><br/>
                    <input type="submit" value="Assign"/>
                </form>
            ))}
        </div>
    )
}

export default Todo;