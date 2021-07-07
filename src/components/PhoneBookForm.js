import React, { useEffect } from "react";
import { db } from "../Firebase";
import { UseForm } from "../hooks/UseForm";
import "./style.css";

const PhoneBookForm = (props) => {
  //Destructuring Props
  const { currentId, addOrEditContact } = props;

  const initialStateValue = {
    name: "",
    phone: "",
    url: "",
  };

  const {
    values,
    handleInputChange,
    handleInputBlurname,
    handleSubmit,
    setValues,
    nameInputIsInvalid,
    handleInputBlurPhone,
    phoneInputIsInvalid,
    phoneInputClasses,
    nameInputClasses,
    formIsValid,
  } = UseForm(initialStateValue, addOrEditContact);

  const getConctactById = async (id) => {
    const doc = await db.collection("conctact").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValue });
    } else {
      getConctactById(currentId);
    }
  }, [currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">account_circle</i>
        </div>

        <input
          className={nameInputClasses}
          placeholder="Write Name"
          type="text"
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputBlurname}
          value={values.name}
        />
        {nameInputIsInvalid && (
          <p className="error-text flex-column">
            {" "}
            Name is Requerided please insert number
          </p>
        )}
      </div>

      <div className="form-group input-group mt-2">
        <div className="input-group-text bg-light">
          <i className="material-icons">contact_phone</i>
        </div>
        <input
          type="number"
          className={phoneInputClasses}
          name="phone"
          placeholder="Phone Number"
          onChange={handleInputChange}
          onBlur={handleInputBlurPhone}
          value={values.phone}
        />
        {phoneInputIsInvalid && (
          <p className="error-text">
            {" "}
            Phone is Requerided please insert number{" "}
          </p>
        )}
      </div>
      <div className="form-group input-group mt-2">
        <div className="input-group-text bg-light">
          <i className="material-icons">add_a_photo</i>
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
        disabled={!formIsValid}
        className="btn btn-primary btn-block mt-2"
      >
        {currentId === "" ? "Save" : "Update Contact"}
      </button>
    </form>
  );
};

export default PhoneBookForm;
