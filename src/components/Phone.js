import React,{useEffect} from 'react'
import { db } from "../Firebase";
import PhoneBookForm from './PhoneBookForm';


const Phone = () => {

    const addOrEditContact = async (conctactOject) => {
 
        await db.collection("conctact").doc().set(conctactOject);
        console.log("New Contact Added");
    };

    const getContact = async () => {
      const querySnapshot = await db.collection("conctact").get();
        querySnapshot.forEach((doc) => {
  console.log(doc.data());
        });
      
    };
  
  
    useEffect(() => {
      getContact();
    }, []);
  



    return (
        <div>
             <PhoneBookForm addOrEditContact={addOrEditContact}/>
           <h1>Visualizacion</h1>
        </div>
    )
}

export default Phone
