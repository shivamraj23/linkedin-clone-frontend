import React from "react";
import "./Post.css";
import Userdetails from "./Userdetails";
import Like from "./Like";

const Post = (props) => {
  return (
    <div className="post">
      <Userdetails></Userdetails>
      <div className="content">
      <p>
        {props.thecontent}
      </p>
    </div>

     
      <Like></Like>
    </div>
  );
};

export default Post;
