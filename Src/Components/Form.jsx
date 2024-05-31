import { root } from "../Main"
import {Error} from "./Errors"
import {Loading} from "./Loading"

function SubmitForm (){
    return (
        <form>
            <label>Enter task:
                <input type="text" />
            </label>
            <select name="Category" id="Category">
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="planing">Planing</option>
            </select>
            <input type="submit" value="Add"/>
        </form>
    )
    
}

export default SubmitForm;