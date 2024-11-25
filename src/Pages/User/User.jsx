import React, { Fragment } from "react";
import Account from "../../components/Account/Account";
import AccountList from "../../datas/AccountList.json";
import EditName from "../../components/EditName/EditName";

const User = () => {
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
