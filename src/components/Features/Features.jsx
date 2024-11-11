import React from "react";
import FeaturesItem from "../FeaturesItem";
import FeatureList from "../../datas/FeaturesList.json";

const Features = () => {
  return (
    <section className="Features">
      {FeatureList.map((Features) => (
        <FeaturesItem
          key={Features.id}
          title={Features.title}
          text={Features.text}
          icon={Features.icon}
        />
      ))}
    </section>
  );
};

export default Features;
