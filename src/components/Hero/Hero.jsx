import React from "react";
import Banktree from "../../assets/img/bank-tree.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={Banktree} // Utilisez la variable Banktree ici
        className="heroBanner"
      />
      <div className="heroTxt">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </div>
    </section>
  );
};

export default Hero;
