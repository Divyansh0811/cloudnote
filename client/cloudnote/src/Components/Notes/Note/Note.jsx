import React from "react";
import './Note.css'
function Note() {
 return (
  <div className="note">
   <div className="note-info">
      <span className="note-title">This is my note title</span>
      <p className="note-description">note description</p>
      <span className="note-tag"> Tags</span>
      <hr />
      <span className="note-creation-time">
       time of creation
      </span>
   </div>
  </div>
 );
}

export default Note;
