import React,{useContext, useState} from "react";
import noteContext from "../Context/notes/noteContext";
const AddNotes = () => {
  const  context = useContext(noteContext)
  const {addNote} = context
  const [note, setNote] = useState({title:"", description: "", tags: ""})
  
  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tags)
  }
 return (
  <div style={{ marginTop: 50 }}>
   <form>
    <div className="mb-7">
     <label htmlFor="title" className="form-label">
      Title 
     </label>
     <input
      type="text"
      className="form-control"
      id="title"
      name="title"
      aria-describedby="emailHelp"
      onChange={onChange}
     />
    </div>
    <div className="mb-3">
     <label htmlFor="description" className="form-label">
      Description
     </label>
     <input type="text" className="form-control" id="description" name="description" onChange={onChange} />
    </div>
    <div className="mb-3">
     <label htmlFor="tags" className="form-label">
      Tags
     </label>
     <input type="text" className="form-control" id="tags" name="tags" onChange={onChange} />
    </div>
    
    <button
     type="submit"
     className="btn btn-primary"
     style={{ color: "black", background: "white" }}
     onClick={handleSubmit}
    >
     Add note
    </button>
   </form>
  </div>
 );
};

export default AddNotes;
