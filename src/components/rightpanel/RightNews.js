import React from "react";

const RightNews = (props) => {
  return (
    <div className="right-news">
      <p style={{ fontSize: "13px", fontWeight: "600" }}>{props.heading}</p>
      <p style={{ fontSize: "11px", fontWeight: "500", color:'gray' }}>{props.description}</p>
    </div>
  );
};

export default RightNews;
