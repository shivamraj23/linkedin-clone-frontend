import React from "react";
import "./Userdetails.css";
import Avatar from "@mui/material/Avatar";

const Userdetails = () => {
  return (
    <div className="user-details-container">
      {/*<div className="user-pic"></div>*/}
      <Avatar
        alt="Remy Sharp"
        src="batman.jpeg"
        sx={{ width: 48, height: 48 }}
      />
      <div className="user-details">
        <h4>Batman</h4>
        <p>Dark Knight Vigilante |
Guardian of Gotham City</p>
        <p style={{ color: "gray" }}>1h</p>
      </div>
    </div>
  );
};

export default Userdetails;
