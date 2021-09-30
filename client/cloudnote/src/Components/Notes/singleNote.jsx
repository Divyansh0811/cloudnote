import React,{useContext} from 'react'
import noteContext from '../../Context/notes/noteContext'

const SingleNote = (props) => {
  const context = useContext(noteContext)
  const {deleteNote} = context
  const {note, updateNote} = props
  const d =  new Date(note.date).toDateString()
  return (
    <div className="col md-3">
     <div className="card">
      <div className="card-body">
       <h5 className="card-title">{note.title}</h5>
       <p className="card-text">{note.description}  </p>
       <p className="card-text" style={{fontStyle:"italic", color: "grey"}}>{note.tags}  </p>
       <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id);
       props.showAlert("Note Deleted succesfully", "success")}}></i>
       <i className="fas fa-edit mx-2" onClick={() => updateNote(note)}></i>
      </div>
       <span className="mx-3 my-3" style={{color: "grey"}}>{d}</span>
     </div>
    </div>
   )
}

export default SingleNote
