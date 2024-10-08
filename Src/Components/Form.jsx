import { useState } from "react"
import { newtask } from "../utils/Firebase.js"

function SubmitForm ({onSubmit}){

    const [task, settask] = useState('')
    const [category, setcategory] = useState ('Backend')
    const [count, setcount] = useState('1')

    function handletxt (event){
        settask(event.target.value)
    }
    
    function handlecat (event) {
        setcategory (event.target.value)
    }

    //handles adding new tasks to the firabase database
    function handleSubmit (event){
        event.preventDefault();
        newtask(task,category,count)

        if(onSubmit){
            onSubmit ({task,category})
        }

        settask(' ')

    }

    return (
        //github pages is being dumb with this
        <form onSubmit={event=>handleSubmit(event)}>
            <label>Enter task:
                <input type="text" value={task} onChange= {handletxt}/>
            </label>
            <select name="Category" value={category} onChange={handlecat}>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Planing">Planing</option>
            </select>
            <input  type="submit" value="Add"/>
        </form>
    )
    
}

export default SubmitForm;