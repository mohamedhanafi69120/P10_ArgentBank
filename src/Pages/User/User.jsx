import React, { Fragment } from "react";
import Account from "../../components/Account/Account";
import AccountList from "../../datas/AccountList.json";

const User = () => {
  return (
    <main className="mainBg">
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
