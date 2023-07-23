import React from "react";
import "./Navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";

const iconstyle = {
  width: "2rem",
  height: "2rem",
  marginLeft: "32px"
};

const LinkedIncolor={
  color:"#0077b5",
  width: "2rem",
  height: "2rem",
  marginLeft: "32px"
}

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <LinkedInIcon style={LinkedIncolor} />
        <label className="searchbox">
          <input type="text" placeholder="search"></input>
        </label>
      </div>
      <div className="nav-right">
        <div className="menu-items">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="menu-items">
          <PeopleIcon />
          <p>Connections</p>
        </div>
        <div className="menu-items">
          <WorkIcon />
          <p>Jobs</p>
        </div>
        <div className="menu-items">
          <EmailIcon />
          <p>Messaging</p>
        </div>
        <div className="menu-items">
          <NotificationsIcon />
          <p>Notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
