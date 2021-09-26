import React from "react";
import Notes from "../Notes/Notes";
import Write from "../Write/Write";

function Home() {
 return (
  <div>
    <div className="Write-note">
      <Write />
    </div>
   <div className="all-posts">
    <Notes />
   </div>
  </div>
 );
}

export default Home;
