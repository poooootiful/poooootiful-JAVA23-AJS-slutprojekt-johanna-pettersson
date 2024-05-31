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

    useEffect(() => {
        const db = getDatabase(app)

        const collectionref = ref(db,'Assignments')

        const fetchData = () =>{
            onValue(collectionref, (snapshot)=>{
                const data = snapshot.val();

                if(data) {
                    const item = Object.values(data)
                    setdata(item)
                }
            });
        };
        fetchData();
    },[]);
    

    console.log(data)

    return (
        <>
            <SubmitForm/> 
            <Todo/>
            <Inprogress/>
            <Done/>      
        </>
    )
}

export default App;