import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import noteContext from "../../Context/notes/noteContext";
import AddNotes from "../AddNotes";
import SingleNote from "./SingleNote";
const Notes = (props) => {
 const context = useContext(noteContext);
 let history = useHistory()
 const { notes, getAllNotes, editNote } = context;
 const [note, setNote] = useState({
  id: "",
  etitle: "",
  edescription: "",
  etags: "",
 });

 useEffect(() => {
   if(localStorage.getItem("token")){
  
     getAllNotes();
   }
   else{
     history.push("/login")
   }
  //eslint-disable-next-line
 }, []);

 const ref = useRef(null);
 const refClose = useRef(null);
 const updateNote = (currentNote) => {
  ref.current.click();
  setNote({
   id: currentNote._id,
   etitle: currentNote.title,
   edescription: currentNote.description,
   etags: currentNote.tags,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  editNote(note.id, note.etitle, note.edescription, note.etags);
  props.showAlert("Note Updated succesfully", "success")
  refClose.current.click();
 };
 const onChange = (e) => {
  setNote({ ...note, [e.target.name]: e.target.value });
 };
 return (
  <>
   <AddNotes showAlert={props.showAlert} />
   <button
    ref={ref}
    type="button"
    className="btn btn-primary d-none"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
   >
    Launch demo modal
   </button>

   <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
   >
    <div className="modal-dialog" role="document">
     <div className="modal-content">
      <div className="modal-header">
       <h5 className="modal-title" id="exampleModalLabel">
        Edit Note
       </h5>
       <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
       >
        <span aria-hidden="true">&times;</span>
       </button>
      </div>
      <div className="modal-body">
       <form>
        <div className="mb-7">
         <label htmlFor="title" className="form-label">
          Title
         </label>
         <input
          type="text"
          className="form-control"
          id="etitle"
          name="etitle"
          value={note.etitle}
          aria-describedby="emailHelp"
          onChange={onChange}
          minLength={5}
          required
         />
        </div>
        <div className="mb-3">
         <label htmlFor="description" className="form-label">
          Description
         </label>
         <input
          type="text"
          className="form-control"
          id="edescription"
          name="edescription"
          value={note.edescription}
          onChange={onChange}
          minLength={5}
          required
         />
        </div>
        <div className="mb-3">
         <label htmlFor="tags" className="form-label">
          Tags
         </label>
         <input
          type="text"
          className="form-control"
          id="etags"
          name="etags"
          value={note.etags}
          onChange={onChange}
         />
        </div>
       </form>
      </div>
      <div className="modal-footer">
       <button
        type="button"
        className="btn btn-secondary"
        data-bs-dismiss="modal"
        ref={refClose}
       >
        Close
       </button>
       <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={note.etitle.length <3 || note.edescription.length < 5}>
        Update note
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="row my-3">
    <h2 style={{ marginTop: 50 }}>Your notes:</h2>
    <div className="container my-2" style={{marginTop: 30}}>
      {notes.length === 0 && 'No notes to diplay.'}
    {notes.map((note) => {
      return <SingleNote key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>;
    })}
    </div>
   </div>
  </>
 );
};

export default Notes;
