import React from "react";
import LeftCard from "./LeftCard";
import Recent from "./Recent";

const Leftpanel = () => {
  return (
    <div className="leftpanel-container">
      <LeftCard
        name="Batman"
        role="Dark Knight Vigilante |
Guardian of Gotham City "
      ></LeftCard>
      <Recent></Recent>
    </div>
  );
};

export default Leftpanel;
