export function InprogressProsses(){
    
}

function Inprogress (Tasktext,Category,Assigned) {
    return (
        <form>
            <h1>In Progress</h1>
            <label>Tasktext</label>
            <label>Category:</label>
            <label>Assigned:</label>
            <input type="submit" value="Done"/>
        </form>
    )
}

export default Inprogress;