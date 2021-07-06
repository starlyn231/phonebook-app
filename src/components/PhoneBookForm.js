import { useState } from "react";

const PhoneBookForm = (props) => {
  const initialStateValue = {
    name: "",
    phone: "",
    url: "",
  };

  const [values, setValues] = useState(initialStateValue);
 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...initialStateValue });
  };


  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
        </div>

        <input
          className="form-control"
          placeholder="Write Name"
          type="text"
          name="name"
          onChange={handleInputChange}
       
          value={values.name}
        />
    
     
      </div>

      <div className="form-group input-group mt-2">
        <div className="input-group-text bg-light">
          <i className="material-icons">contact_phone</i>
        </div>
        <input
          type="number"
          className="form-control"
          name="phone"
          placeholder="Phone Number"
          onChange={handleInputChange}
  
          value={values.phone}
        />
     
      </div>
      <div className="form-group input-group mt-2">
        <div className="input-group-text bg-light">
          
        </div>
        <input
          type="url"
          className="form-control"
          name="url"
          placeholder="Insert Url"
          onChange={handleInputChange}
          value={values.url}
        />
      </div>

      <button
        
        className="btn btn-primary btn-block mt-2"
      >
        Save
      </button>
    </form>
  );
};

export default PhoneBookForm;
