// import React from "react";
// import { NavLink } from "react-router-dom";
// import Logo from "../../assets/img/argentBankLogo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleUser,
//   faRightFromBracket,
// } from "@fortawesome/free-solid-svg-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { logOut } from "../../redux/userSlice";

// const Nav = () => {
//   ///////////////récuperation des donnee utilisateurs et du token /////////////////////////////////
//   const userSet = useSelector((state) => {
//     state.userAuth.user;
//   });
//   const token = useSelector((state) => {
//     state.userAuth.token;
//   });
//   console.log("navtoken:", token);
//   console.log("navuser:", userSet);
//   const dispatch = useDispatch();
//   ////////////////////////c'est une fonction de déconnexion ///////////////////
//   const disconnect = () => {
//     dispatch(logOut());
//   };
//   return (
//     <nav>
//       <NavLink to="/" className="navLogo">
//         <img src={Logo} alt="logo-agrentbank" className="logo" />
//         <h1 className="sr-only">Argent Bank</h1>
//       </NavLink>

//       <div className="navConnect">
//         {token && userSet ? (
//           <>
//             <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
//             <NavLink to="/user" className="userName">
//               {userSet.username}
//             </NavLink>
//             <NavLink className="faSignOut" onClick={disconnect}>
//               <FontAwesomeIcon
//                 className="faSignouticon"
//                 icon={faRightFromBracket}
//               />
//               Sign out
//             </NavLink>
//           </>
//         ) : (
//           <NavLink to="SignIn" className="navSign">
//             <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
//             Sign in
//           </NavLink>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/userSlice";

const Nav = () => {
  const userSet = useSelector((state) => state.userAuth.user);
  const token = useSelector((state) => state.userAuth.token);
  const dispatch = useDispatch();

  const disconnect = () => {
    dispatch(logOut());
  };

  return (
    <nav>
      <NavLink to="/" className="navLogo">
        <img src={Logo} alt="logo-argentbank" className="logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div className="navConnect">
        {token && userSet ? (
          <>
            <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
            <NavLink to="/user" className="userName">
              {userSet.userName}
            </NavLink>
            <button className="faSignOut" onClick={disconnect}>
              <FontAwesomeIcon
                className="faSignouticon"
                icon={faRightFromBracket}
              />
              Sign out
            </button>
          </>
        ) : (
          <NavLink to="/SignIn" className="navSign">
            <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
            Sign in
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
