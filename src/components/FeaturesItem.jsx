import React from "react";
import propTypes from "prop-types";

const FeaturesItem = ({ title, text, icon }) => {
  return (
    <div className="F-Items">
      <h2 className="sr-only">Features</h2>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

FeaturesItem.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};

export default FeaturesItem;
