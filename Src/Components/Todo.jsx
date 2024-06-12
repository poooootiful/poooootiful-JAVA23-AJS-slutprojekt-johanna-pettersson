import { useEffect,useState } from "react";
import { updatetask } from "../utils/Firebase";


function Todo ({task, onSubmit}) {
    const [imput, setinput] = useState({})

    function handlechange (event,index) {
        setinput({
            imput, [index]: event.target.value
        })
    }

    function handleSubmit (event){
        const key = task.snapshot.getkey()
        const name = imput[index]
        console.log(key)
        updatetask (name, key)

        if(onSubmit){
            onSubmit ({})
        }
        setInputValues({
            ...inputValues,
            [index]: ''
        });
    }
    
    return (
        <div>
            {task.map((task, index) => (
                <form key={index} onSubmit={handleSubmit}>
                    <label>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <input type="text" value={imput[index] || ''} onChange={(event) => handlechange(event, index)} /><br/>
                    <input type="submit" value="Asssign"/>
                </form>
            ))}
        </div>
    )
}

export default Todo;