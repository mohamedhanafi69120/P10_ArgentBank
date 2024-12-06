import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**************import redux ******************* */

import { useDispatch, useSelector } from "react-redux";
import { startLogin, succesLogin, loginFailed } from "../../redux/userSlice";

const Form = () => {
  /*********Ajout des etas pour les donnee utilisateur et les messages d'erreurs ********** */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setloginMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isConnected = useSelector((state) => state.userAuth.isConnected);

  /************fonction pour la mise a jour des etas des champs de saissie (input)*************** */
  const handleEmailUpdate = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const handlePasswordUpdate = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  /*******ajout de la fonction pour envoyer les donnee d'authentification a la Api avec la valeur acruelle des etas********/
  const handleuserAuth = (event) => {
    event.preventDefault();
    dispatch(startLogin());
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("erreur lors de la requette");
        }
        return response.json();
      })
      .then((data) => {
        console.log("reponse api :", data);
        dispatch(succesLogin(data.body.token));
        setloginMessage("connexion reussi");
        navigate("/User");
      })
      .catch((error) => {
        console.log("error while SignIn:", error);
        dispatch(loginFailed());
        setloginMessage(
          "echec de la connexion, veuillez verifier vos identifiants"
        );
      });
  };
  /****************redirection de l'utilisateur vers la page User si ce dernier est deja connecté************/
  if (isConnected) {
    navigate("/User");
  }

  return (
    <section className="form">
      <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
      <h1>Sign In</h1>
      <form>
        <div className="inputWapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={handleEmailUpdate}
          />
        </div>
        <div className="inputWapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordUpdate}
          />
        </div>
        <div className="inputRemember">
          <label htmlFor="remember">Remenber me </label>
          <input type="checkbox" id="remember" />
        </div>
        <button className="submitbutton" onClick={handleuserAuth}>
          Sign In
        </button>
        {/*****message de connexion ****/}
        <p className="messageConnexion">{loginMessage}</p>
      </form>
    </section>
  );
};

export default Form;

//////////////////new/////////////////

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { startLogin, succesLogin, loginFailed } from "../../redux/userSlice";
// import { useEffect } from "react";

// const Form = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginMessage, setloginMessage] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isConnected = useSelector((state) => state.userAuth.isConnected);

//   const handleEmailUpdate = (event) => setEmail(event.target.value);
//   const handlePasswordUpdate = (event) => setPassword(event.target.value);

//   const handleuserAuth = (event) => {
//     event.preventDefault();
//     dispatch(startLogin());
//     fetch("http://localhost:3001/api/v1/user/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Erreur lors de la requête");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("API response:", data);
//         dispatch(succesLogin(data.body.token));
//         setloginMessage("Connexion réussie");
//         navigate("/User");
//       })
//       .catch((error) => {
//         console.log("Error while SignIn:", error);
//         dispatch(loginFailed());
//         setloginMessage(
//           "Échec de la connexion, veuillez vérifier vos identifiants"
//         );
//       });
//   };

//   useEffect(() => {
//     if (isConnected) {
//       navigate("/User");
//     }
//   }, [isConnected, navigate]);

//   return (
//     <section className="form">
//       <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
//       <h1>Sign In</h1>
//       <form onSubmit={handleuserAuth}>
//         <div className="inputWapper">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={email}
//             onChange={handleEmailUpdate}
//           />
//         </div>
//         <div className="inputWapper">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordUpdate}
//           />
//         </div>
//         <div className="inputRemember">
//           <label htmlFor="remember">Remember me </label>
//           <input type="checkbox" id="remember" />
//         </div>
//         <button className="submitbutton" type="submit" onClick={handleuserAuth}>
//           Sign In
//         </button>
//         <p className="messageConnexion">{loginMessage}</p>
//       </form>
//     </section>
//   );
// };

// export default Form;
