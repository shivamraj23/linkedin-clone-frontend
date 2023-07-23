import React from "react";
import "./Mainrow.css";
import LeftPanel from "./leftpanel/Leftpanel";
import Middlepanel from "./middlepanel/Middlepanel";
import Rightpanel from "./rightpanel/Rightpanel";

const Mainrow = () => {
  return (
    <div className="mainrow-container">
      <LeftPanel></LeftPanel>
      <Middlepanel></Middlepanel>
      <Rightpanel></Rightpanel>
    </div>
  );
};

export default Mainrow;
