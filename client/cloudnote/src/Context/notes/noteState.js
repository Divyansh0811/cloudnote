import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
 const notesInitial = [
  {
   _id: "614f2c028719f9fc8b8554d9",
   user: "614db672842acc0508fca948",
   title: "morning work",
   description: "morning desc",
   tags: "morning desc",
   date: "2021-09-25T14:02:42.553Z",
   __v: 0,
  },
  {
   _id: "614f2c088719f9fc8b8554db",
   user: "614db672842acc0508fca948",
   title: "morning work1",
   description: "morning desc1",
   tags: "morning desc1",
   date: "2021-09-25T14:02:48.279Z",
   __v: 0,
  },
  {
   _id: "614f2c108719f9fc8b8554df",
   user: "614db672842acc0508fca948",
   title: "morning work111",
   description: "morning desc111",
   tags: "morning desc111",
   date: "2021-09-25T14:02:56.895Z",
   __v: 0,
  },
 ];
 const [notes, setNotes] = useState(notesInitial);

 //FETCH ALL NOTES
 const getAllNotes = async () => {
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
     "content-type": "application/json",
     "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGI2NzI4NDJhY2MwNTA4ZmNhOTQ4In0sImlhdCI6MTYzMjU0MTk1N30.Odl6Tp9rzNlHY0mmb3cTGyWqHW0e0PY00I-xeNAg2sg"
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
     "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGI2NzI4NDJhY2MwNTA4ZmNhOTQ4In0sImlhdCI6MTYzMjU0MTk1N30.Odl6Tp9rzNlHY0mmb3cTGyWqHW0e0PY00I-xeNAg2sg"
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
     "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGI2NzI4NDJhY2MwNTA4ZmNhOTQ4In0sImlhdCI6MTYzMjU0MTk1N30.Odl6Tp9rzNlHY0mmb3cTGyWqHW0e0PY00I-xeNAg2sg"
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
    "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0ZGI2NzI4NDJhY2MwNTA4ZmNhOTQ4In0sImlhdCI6MTYzMjU0MTk1N30.Odl6Tp9rzNlHY0mmb3cTGyWqHW0e0PY00I-xeNAg2sg"
   },
   body: JSON.stringify({title, description, tags}),
  });
  const res = response.json(); 
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
