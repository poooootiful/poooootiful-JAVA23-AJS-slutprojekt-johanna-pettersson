import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set, update, remove, get } from "firebase/database";
import ErrorPage from "../Components/Errors";
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

//Add new task works perfecly
export function newtask (task, category) {
  
    console.log(task)
    console.log(category)
    
    const db = getDatabase(app);
    const assignmentref= ref(db,'Assignments/')
    const newassignref = push(assignmentref);
    const taskkey = newassignref.key

    set(newassignref, {
      Id:taskkey,
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

//update status to InProgress and add a name to Assignedto in task
export function updateToInprogrees (name, key) {
  const db = getDatabase(app)
  const taskRef = ref(db, 'Assignments/'+ key)

  update (taskRef, {
    Status:'InProgress',
    Assignedto:name
  }).then (()=>{
    Loading
  }).catch((error)=>{
    ErrorPage(error)
  })

}

//update status in a task to done
export function updateToDone (key) {
  const db = getDatabase(app)
  const taskRef = ref(db, 'Assignments/'+key)

  update (taskRef, {
    Status:'Done'
  
  }).then (()=>{
    Loading
  }).catch((error)=>{
    ErrorPage(error)
  })
}

//removes a task from the database
export function removetask (key) {
    const db = getDatabase(app)
    const removeRef= ref(db, 'Assignments/'+key)
  
    remove(removeRef)
    .then (()=>{
      Loading
    })
    .catch((error)=>{
      ErrorPage(error)
    })
}