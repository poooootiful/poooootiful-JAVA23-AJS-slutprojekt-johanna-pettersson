import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, update } from "firebase/database";
import ErrorPage from "../Components/Errors";
import { useEffect,useState } from "react";


//Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0dY0ACE-kSTBK51XCoR_dwibTg8t-kwo",
  authDomain: "ajs-prodjekct.firebaseapp.com",
  databaseURL: "https://ajs-prodjekct-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ajs-prodjekct",
  storageBucket: "ajs-prodjekct.appspot.com",
  messagingSenderId: "868382800850",
  appId: "1:868382800850:web:98b3afd9dcbda19262e60b"
};  


const app = initializeApp(firebaseConfig);

export default app;

export function newtask (task, category) {
  
    console.log(task)
    console.log(category)
    
    const db = getDatabase(app);
    const assignmentref= ref(db,'Assignments')
    const newassignref = push(assignmentref);

    set(newassignref, {
      Task: task,
      Category: category,
      Status : 'Todo',
      Assignedto: 'none'
    }).then(()=>{

    }).catch((error) => {
      ErrorPage(error);
    })
}

export function updatetask (name,key) {
  console.log(name)
  console.log(key)
  const db = getDatabase(app)
  const taskref = ref(db,'Assignments/'+key)
  console.log(taskref)

  update(taskref, {
    Status:'InProgress',
    Assignedto: name

  }).then(() => {
    console.log('Task updated successfully');
  }).catch((error) => {
    ErrorPage(error)
  });
}