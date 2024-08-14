export function DoneProsses () {
    
}

function Done ({task}){
    
    return (
        <div>
            {task.map((task, index) => (
                <form key={index}>
                    <label>{task.Task}</label><br/>
                    <label>{task.Category}</label><br/>
                    <label>{task.Assignedto}</label><br/>
                    <input type="submit" value="Remove"/>
                </form>
            ))}
    </div>
    )
    
}
export default Done;