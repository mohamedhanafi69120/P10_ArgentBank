import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const EditName = () => {
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState(""); // Nouvel état pour le prénom
  const [lastName, setLastName] = useState(""); // Nouvel état pour le nom
  const userData = useSelector((state) => state.userAuth.user);
  const token = useSelector((state) => state.userAuth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || !userData) {
      return;
    }
    if (isEditingUser) {
      setUserName(userData.userName || "");
      setFirstName(""); // Laisser le prénom vide par défaut
      setLastName(""); // Laisser le nom vide par défaut
    }
  }, [userData, token, isEditingUser]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      userName,
      firstName, // Ajouter le prénom dans les données soumises
      lastName, // Ajouter le nom dans les données soumises
    };

    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        dispatch(setUserData(data.body));
        setIsEditingUser(false);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="EditInfos">
      {!isEditingUser && (
        <h1>
          Welcome back <br /> {userData.firstName} {userData.lastName}
        </h1>
      )}
      {isEditingUser && (
        <form className="EditInfos_form" onSubmit={handleSubmit}>
          <h2>Edit user info</h2>
          <div className="EditInfos_wrapper">
            <label htmlFor="userName" className="formLabel">
              User Name:
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="formInput"
              value={userName} //on a mis l'attribue value qui correspondre a ce qui est stocker dans V username    /
              onChange={(e) => setUserName(e.target.value)} //on va utuliser la fonction onchange qui va detecter le champs 
              // de saissie est rempli et qui va executer la fonction setusername pour mette a jour le contenu de variable username avec l'information saissie par litulisateur /
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
              value={firstName} // Vide par défaut
              onChange={(e) => setFirstName(e.target.value)} // Permettre de remplir
              disabled // Ajout de l'attribut pour désactiver le champ
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
              value={lastName} // Vide par défaut
              onChange={(e) => setLastName(e.target.value)} // Permettre de remplir
              disabled // Ajout de l'attribut pour désactiver le champ
            />
          </div>
          <div className="EditInfos_submit">
            <input
              type="submit"
              value="Enregistrer"
              className="EditInfos_submit-sub"
            />
            <button
              type="button"
              onClick={() => setIsEditingUser(false)}
              className="EditInfos_submit-cancel"
            >
              Annuler
            </button>
          </div>
        </form>
      )}
      <button className="EditButton" onClick={() => setIsEditingUser(true)}>
        Edit Name
      </button>
    </div>
  );
};

export default EditName;
