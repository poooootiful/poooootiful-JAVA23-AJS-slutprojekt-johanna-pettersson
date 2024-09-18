import {updateToDone } from "../utils/Firebase.js";

function Inprogress ({task}) {

    function handleSubmit (event,key) {
        event.preventDefault();
        console.log('InProgress')
        updateToDone (key)
    }

    return (
        <div>
            {task.map((task) => (
                <form key={task.Id} onSubmit={event=>handleSubmit(event, task.Id)}>
                    <p >{task.Task}</p>
                    <p>{task.Category}</p>
                    <p>{task.Assignedto}</p>
                    <input type="submit" value="Done" />
                </form>
            ))}
        </div>
    )
}

export default Inprogress;