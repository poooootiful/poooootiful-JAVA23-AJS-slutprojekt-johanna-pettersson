import { useEffect,useState } from "react";
import SubmitForm from "./Form";
import Todo from "./Todo";
import Inprogress from "./Inprogress";
import Done from "./Done";
import ErrorPage from "./Errors";
import {Loading} from "./Loading"
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../utils/Firebase";


function App(){
    const [data, setdata] = useState([])
    const [todo, settodo] = useState([])
    const [inProgress, setinprogress] = useState([])
    const [done, setdone] = useState([])

    useEffect(() => {
        const db = getDatabase(app)

        const collectionref = ref(db,'Assignments')

        const fetchData = () =>{
            onValue(collectionref, (snapshot)=>{
                const data = snapshot.val();
                setdata(data)

                if(data) {
                    const items = Object.values(data)
                    const todo = items.filter(task => task.Status === 'Todo');
                    settodo(todo)
                    const inProgress = items.filter(task => task.Status === 'InProgress');
                    setinprogress(inProgress)
                    const done = items.filter(task => task.Status === 'Done');
                    setdone(done)
                }
            });
        };
        fetchData();
    },[]);
    
    return (
        <>
            <SubmitForm/> 
            <h1>Todo</h1>
            <Todo task={todo}/>
            <h1>InProgress</h1>
            <Inprogress task={inProgress}/>
            <h1>Done</h1>
            <Done task = {done}/>      
        </>
    )
}

export default App;