import { TaskLabel } from "./TaskLabel";
import { CategoryLabel } from "./CategoryLabel";

function Todo () {
    return (
        <form>
            <h1>Todo</h1>
            <label>Task</label>
            <label>Catergory</label>
            <input type="text" defaultValue="Name"/>
            <input type="submit" value="Asssign"/>
        </form>
    )
}

export default Todo;