export function InprogressProsses(){

}

function Inprogress ({task}) {
    console.log(task)
    return (
        <div>
            {task.map((task, index) => (
                <form key={index}>
                    <label>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <label>{task.Assignedto}</label><br/>
                    <input type="submit" value="Done"/>
                </form>
            ))}
        </div>
    )
}

export default Inprogress;