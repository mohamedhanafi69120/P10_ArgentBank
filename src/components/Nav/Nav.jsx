import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className="navLogo">
        <img src={Logo} alt="logo-agrentbank" className="logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <NavLink className="navSign">
        <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
        Sign in
      </NavLink>
    </nav>
  );
};

export default Nav;
