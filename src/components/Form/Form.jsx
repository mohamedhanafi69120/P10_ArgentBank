import React, { useState, useEffect } from "react";
/**Pour exécuter des actions après le rendu du composant redirection après connexion). */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

/**************import redux ********************/

import { useDispatch, useSelector } from "react-redux";
/**accéder à une partie spécifique de l’état global */
import { startLogin, succesLogin, loginFailed } from "../../redux/userSlice";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const dispatch = useDispatch(); /**Permet de déclencher des actions Redux. */
  const navigate =
    useNavigate(); /**Utilisé pour rediriger l’utilisateur après connexion. */
  const isConnected = useSelector((state) => state.userAuth.isConnected);
  /** Vérifie si l’utilisateur est connecté (via Redux). */
  // Mise à jour des champs email et mot de passe
  const handleEmailUpdate = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordUpdate = (event) => {
    setPassword(event.target.value);
  };

  // Gestion de la soumission du formulaire
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
          throw new Error("Erreur lors de la requête");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(succesLogin(data.body.token));
        setLoginMessage("Connexion réussie !");
      })
      .catch((error) => {
        dispatch(loginFailed());
        setLoginMessage(
          "Échec de la connexion, veuillez vérifier vos identifiants."
        );
      });
  };

  // Utilisation de useEffect pour gérer la redirection
  useEffect(() => {
    if (isConnected) {
      navigate("/User");
    }
  }, [isConnected, navigate]);

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
            value={email} /*dans l'attribue value on utilise le contenu de la variable email comme valeur de champ de saissie  */
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
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="submitbutton" onClick={handleuserAuth}>
          Sign In
        </button>
        <p className="messageConnexion">{loginMessage}</p>
      </form>
    </section>
  );
};

export default Form;
