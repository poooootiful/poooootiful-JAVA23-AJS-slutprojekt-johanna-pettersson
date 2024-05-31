import { TaskLabel } from "./TaskLabel";
import { CategoryLabel } from "./CategoryLabel";

function Todo ({task}) {

    const {Task,Category}=task

    return (
        <form>
            <h1>Todo</h1>
            <TaskLabel Task ={Task}/>
            <CategoryLabel Category = {Category}/>
            <input type="text" defaultValue="Name"/>
            <input type="submit" value="Asssign"/>
        </form>
    )
}

export default Todo;