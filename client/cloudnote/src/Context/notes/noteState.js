import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
 const notesInitial = [];
 const [notes, setNotes] = useState(notesInitial);

 //FETCH ALL NOTES
 const getAllNotes = async () => {
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
     "content-type": "application/json",
     "auth-token" : localStorage.getItem('token')
    },
   });
   const res = await response.json();
  
  setNotes(res);
 };

 //ADD A NOTE
 const addNote = async (title, description, tags) => {
  const response = await fetch(`${host}/api/notes/addanote`, {
    method: "POST",
    headers: {
     "content-type": "application/json",
     "auth-token" : localStorage.getItem('token')
    },
    body: JSON.stringify({ title, description, tags}),
   });
   const note = await response.json();
  
  setNotes(notes.concat(note));
 };

 //DELETE A NOTE
 const deleteNote = async (id) => {
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: 'DELETE',
    headers: {
     "content-type": "application/json",
     "auth-token" : localStorage.getItem('token')
    },
   });
   const res = response.json();
   console.log(res)
  const newNote = notes.filter((note) => {
   return note._id !== id;
  });
  setNotes(newNote);
 };
 //EDIT A NOTE
 const editNote = async (id, title, description, tags) => {
  const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
   method: 'PUT',
   headers: {
    "content-type": "application/json",
    "auth-token" : localStorage.getItem('token')
   },
   body: JSON.stringify({title, description, tags}),
  });
  const res = response.json(); 
  console.log(res)
 let updatedNote = JSON.parse(JSON.stringify(notes))
  for (let index = 0; index < updatedNote.length; index++) {
    const element = updatedNote[index];
    if (element._id === id) {
      updatedNote[index].title = title;
      updatedNote[index].description = description;
      updatedNote[index].tags = tags;
      break;
    }
  }
  setNotes(updatedNote)
 };

 
 return (
  <noteContext.Provider
   value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNotes}}
  >
   {props.children}
  </noteContext.Provider>
 );
};

export default NoteState;
