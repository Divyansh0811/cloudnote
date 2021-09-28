import React, {useContext} from "react";
import noteContext from "../../Context/notes/noteContext";
import SingleNote from "./singleNote";
const Notes = () => {
  const  context = useContext(noteContext)
  const {notes, setNotes} = context
 return (
  <div className="row my-3">
   <h2 style={{ marginTop: 50 }}>Your notes:</h2>
   {notes.map((note) => {
    return <SingleNote note={note} />
   })}
  </div>
 );
};

export default Notes;
