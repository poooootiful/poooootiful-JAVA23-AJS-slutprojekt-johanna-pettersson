import { removetask } from "../utils/Firebase.js";

function Done ({task}){

    function handleSubmit (event,key) {
        event.preventDefault();
        removetask (key)
    }
    
    return (
        <div>
            {task.map((task) => (
                <form key={task.Id} onSubmit={event=>handleSubmit(event, task.Id)}>
                    <p>{task.Task}</p>
                    <p>{task.Category}</p>
                    <p>{task.Assignedto}</p>
                    <input type="submit" value="Remove"/>
                </form>
            ))}
    </div>
    )
    
}
export default Done;