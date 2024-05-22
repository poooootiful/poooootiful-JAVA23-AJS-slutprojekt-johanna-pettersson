import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const ToDoref = ref(db,'ToDo')
export const InProgessRef = ref (db, 'InProgress')
export const DoneRef = ref (db, 'Done')