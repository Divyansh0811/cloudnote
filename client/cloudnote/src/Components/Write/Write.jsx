import React from "react";
import "./Write.css";
function Write() {
 return (
  <div>
   <form className="write-form">
    <div className="write-form-group">
     <input type="text" className="write-input" placeholder="Title.." />
    </div>
    <div className="write-form-group">
     <textarea
      placeholder="Add a note.."
      type="text"
      className="write-input write-text"
     ></textarea>
     <button className="write-submit" type="submit">
     Add
    </button>
    </div>
    
   </form>
  </div>
 );
}

export default Write;
