import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, update, remove, ref, get } from "firebase/database";
import ErrorPage from "../Components/Errors";
import { useEffect,useState } from "react";
import Loading from "../Components/Loading";


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
      Loading
    }).catch((error) => {
      ErrorPage(error);
    })
}

export async function getid(taskname) {
    const db = getDatabase(app);
    const assignmentref = ref(db,'Assignments')

    try {
      const snapshot = await get (assignmentref)
      if (snapshot.exists()){
        const tasks = snapshot.val();
        for (const id in tasks) {
          if (tasks[id].name === taskname) {
            return id;
          }
        }
      }
    }catch (error) {
      ErrorPage(error)
    }
}

export function updateToInprogrees (name, id) {
  const db = getDatabase(app)
  const taskRef = ref(db, 'Assignments/'+id)

  update (taskRef, {
    Status:'InProgress',
    Assignedto:name
  }).then (()=>{
    Loading
  }).catch((error)=>{
    ErrorPage(error)
  })

}

export function updateToDone (id) {
  
  const db = getDatabase(app)
  const taskRef = ref(db, 'Assignments/'+id)

  update (taskRef, {
    Status:'Done'
  
  }).then (()=>{
    Loading
  }).catch((error)=>{
    ErrorPage(error)
  })
}

export function removetask (id) {
    const db = getDatabase(app)
    const removeRef= ref(db, 'Assignments/'+id)
  
    remove(removeRef)
}