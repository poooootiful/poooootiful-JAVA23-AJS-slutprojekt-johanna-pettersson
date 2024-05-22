import { db,ToDoref, DoneRef, InProgessRef } from "./Modules/Firebase";
import { onValue, ref, update, push} from "firebase/database";
import {createRoot} from 'react-dom/client';

onValue (ToDoref, snapshot => {
    const tasks = snapshot.val();
    console.log(tasks)
})
onValue (InProgessRef, snapshot => {
    const wip = snapshot.val();
    console.log(wip)
})

onValue (DoneRef, snapshot => {
    const done = snapshot.val();
    console.log(done)
})

