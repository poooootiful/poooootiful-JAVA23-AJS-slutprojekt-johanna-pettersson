import { useEffect,useState } from "react";
import { updatetask } from "../utils/Firebase";


function Todo ({task, onSubmit}) {
    const [name, setname]=useState(' ')

    function namechange (event) {
        setname(event.target.value)
    }

    function handleSubmit (event){
        const key = task.snapshot.getkey()
        updatetask (name, key)

        if(onSubmit){
            onSubmit ({})
        }
        setname(' ')
        setstatus (' ')
    }
    
    return (
        <div>
            {task.map((task, index) => (
                <form key={index} onSubmit={handleSubmit}>
                    <label>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <input type="text" value = {name} onChange={namechange}/><br/>
                    <input type="submit" value="Asssign"/>
                </form>
            ))}
        </div>
    )
}

export default Todo;