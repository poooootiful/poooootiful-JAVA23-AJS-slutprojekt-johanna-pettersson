import { useEffect,useState } from "react";
import SubmitForm from "./Form";
import Todo from "./Todo";
import Inprogress from "./Inprogress";
import Done from "./Done";
import ErrorPage from "./Errors";
import {Loading} from "./Loading"
import {app} from "../utils/Firebase";
import { getDatabase, ref, onValue, push } from "firebase/database";
import { Todoprosses } from "./Todo";
import { InprogressProsses } from "./Inprogress";
import { DoneProsses } from "./Done";

console.log(app)
    const db = getDatabase (app);
    console.log(db)
    const Taskref = ref (db,'/Assignments')
    console.log(Taskref);

    let task1 = {}

onValue (Taskref, snapshot=>{
    const tasks = snapshot.val();
    console.log(tasks)
        task1 = {
            Task: tasks.Task,
            Category: tasks.Category,
            Status:tasks.Status,
            Assignedto:tasks.Assignedto
        }
    }
)




export function App(){

    return (
        <>
            <SubmitForm/> 
            <Todo task={task1}/>
            <Inprogress/>
            <Done/>      
        </>
    )
}

