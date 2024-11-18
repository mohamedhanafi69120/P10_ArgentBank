import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <section className="form">
      <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
      <h1>Sign In</h1>
      <form>
        <div className="inputWapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="inputWapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="inputRemember">
          <label htmlFor="remember">Remenber me </label>
          <input type="checkbox" id="remember" />
        </div>
        <button className="submitbutton">SignIn</button>
      </form>
    </section>
  );
};

export default Form;
