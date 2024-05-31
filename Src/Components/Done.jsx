export function DoneProsses () {
    
}

function Done (Tasktext, Category, Assigned){
    return (
        <form>
            <h1>Done</h1>
            <label>Tasktext</label>
            <label>Category:</label>
            <label>Assigned:</label>
            <input type="submit" value="Remove"/>
        </form>
    )
    
}
export default Done;