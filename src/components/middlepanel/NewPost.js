import React from "react";
import "./NewPost.css";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Avatar from '@mui/material/Avatar';

const NewPost = () => {
  return (
    <div className="newpost-container">
      <div className="createpost">
        <Avatar
        alt="Remy Sharp"
        src="batman.jpeg"
        sx={{ width: 48, height: 48 }}
      />
        <input
          type="text"
          placeholder="start a new post"
          
        ></input>
      </div>

      <div className="post-icons">
        <div className="single-icons">
          <InsertPhotoOutlinedIcon style={{color:'orange'}}/>
          <p>Photo</p>
        </div>
        <div className="single-icons">
          <SmartDisplayOutlinedIcon style={{color:'skyblue'}}/>
          <p>Video</p>
        </div>
        <div className="single-icons">
          <EventNoteOutlinedIcon style={{color:'greenyellow'}}/>
          <p>Event</p>
        </div>
        <div className="single-icons">
          <ArticleOutlinedIcon style={{color:'brown'}}/>
          <p>Write article</p>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
