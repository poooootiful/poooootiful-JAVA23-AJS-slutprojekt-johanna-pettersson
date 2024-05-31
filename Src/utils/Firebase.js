import { initializeApp } from "firebase/app";



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


export const app = initializeApp(firebaseConfig);