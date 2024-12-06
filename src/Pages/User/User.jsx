import React, { useEffect } from "react";
import Account from "../../components/Account/Account";
import AccountList from "../../datas/AccountList.json";
import EditName from "../../components/EditName/EditName";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const User = () => {
  const token = useSelector((state) => state.userAuth.token);
  const isConnected = useSelector((state) => state.userAuth.isConnected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    const fetchUserProfile = () => {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur lors de la requête");
          }
          return response.json();
        })
        .then((data) => {
          dispatch(setUserData(data.body));
        })
        .catch((error) => console.error("Erreur :", error));
    };

    fetchUserProfile();
  }, [token, dispatch]);

  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected, navigate]);

  return (
    <main className="mainBg">
      <EditName />
      {AccountList.map((account) => (
        <Account
          key={account.id}
          title={account.title}
          price={account.price}
          text={account.text}
        />
      ))}
    </main>
  );
};

export default User;
