import React from "react";


const PhoneBookForm = (props) => {
  const initialStateValue = {
    name: "",
    phone: "",
    url: "",
  };
  

  return (
    <form >
      <div >
        <div >
          
        </div>

        <input
           placeholder="Write Name"
          type="text"
          name="name"
          
        />
     
     
      
      </div>

      <div >
        <div >
        
        </div>
        <input
          type="number"
          
          name="phone"
          placeholder="Phone Number"
         
        />
     
      </div>
      <div >
        <div >
          
        </div>
        <input
          type="url"
          name="url"
          placeholder="Insert Url"
          
        />
      </div>

      <button
     
      >Save
       
      </button>
    </form>
  );
};

export default PhoneBookForm;
