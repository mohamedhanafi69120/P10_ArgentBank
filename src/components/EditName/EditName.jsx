import React from "react";

const EditName = () => {
  return (
    <div className="EditInfos">
      <h1>
        Welcome Back <br /> Utilisateur
      </h1>
      <form className="EditInfos_form">
        <h2>Edit user info </h2>
        <div className="EditInfos_wrapper">
          <label htmlFor="userName" className="formLabel">
            User Name:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            className="formInput"
          />
        </div>
        <div className="EditInfos_wrapper">
          <label htmlFor="firstName" className="formLabel">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="formInput"
            disabled
          />
        </div>
        <div className="EditInfos_wrapper">
          <label htmlFor="lastName" className="formLabel">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="formInput"
            disabled
          />
        </div>
        <div className="EditInfos_submit">
          <input
            type="submit"
            value="Enregistrer"
            className="EditInfos_submit-sub"
          />
          <button type="button" className="EditInfos_submit-cancel">
            Annuler
          </button>
        </div>
      </form>
      <button className="EditButton">EditName</button>
      <h2 className="sr-only">Accounts</h2>
    </div>
  );
};

export default EditName;
