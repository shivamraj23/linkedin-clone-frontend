import React from "react";
import "./LeftCard.css";
import { Avatar } from "@mui/material";

const avatarstyle={
  zIndex: '2',
  position: 'absolute',
  top: '2rem',
  right: '5rem'
}

const LeftCard = (props) => {
  return (
    <div className="card-container">
      <div className="card-top"></div>

      
        <Avatar
          alt="Remy Sharp"
          src="batman.jpeg"
          sx={{ width: 72, height: 72 }}
          style={avatarstyle}
        />
      
      <div className="card-bottom">
        <div className="name">
          <p style={{ fontSize: "14px", fontWeight: "700" }}>{props.name}</p>
          <p style={{ fontSize: "12px", fontWeight: "500", color:'gray' }}>{props.role}</p>
        </div>
        <div className="who-viewed">
          <div className="who-viewed-profile">
            <p>Who's viewed your profile</p>
            <p>20</p>
          </div>
          <div className="who-viewed-profile">
            <p>Connections</p>
            <p>322</p>
          </div>
          <p style={{ color: "black", fontSize: "11px", padding: "2px 1rem", fontWeight:'600' }}>
            Connect with alumni
          </p>
        </div>
        <p className="try-premium">Try premium for free</p>
        <div className="my-items">
          <p>My items</p>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
