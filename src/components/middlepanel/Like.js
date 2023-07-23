import React from "react";
import "./Like.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Like = () => {
  return (
    <div className="like-container">
      <div className="like-items">
        <ThumbUpOutlinedIcon />
        <p>Like</p>
      </div>
      <div className="like-items">
        <CommentOutlinedIcon />
        <p>Comment</p>
      </div>
      <div className="like-items">
        <RepeatOutlinedIcon></RepeatOutlinedIcon>
        <p>Repost</p>
      </div>
      <div className="like-items">
        <SendOutlinedIcon></SendOutlinedIcon>
        <p>Send</p>
      </div>
    </div>
  );
};

export default Like;
