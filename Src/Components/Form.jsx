import { useState } from "react"
import { root } from "../Main"
import {Error} from "./Errors"
import {Loading} from "./Loading"
import { newtask } from "../utils/Firebase"

function SubmitForm ({onSubmit}){

    const [task, settask] = useState('')
    const [category, setcategory] = useState ('Backend')

    function handletxt (event){
        settask(event.target.value)
    }
    
    function handlecat (event) {
        setcategory (event.target.value)
    }

    function handleSubmit (event){
        
        newtask(task,category)

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