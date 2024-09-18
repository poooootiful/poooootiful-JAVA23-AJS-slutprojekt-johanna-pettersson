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

    function handleSubmit (event){
        newtask(task,category,count)

        if(onSubmit){
            onSubmit ({task,category})
        }

        settask(' ')

    }

    return (
        <form onSubmit={handleSubmit}>
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