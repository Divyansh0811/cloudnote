import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial =
    [
      {
        "_id": "614f2c028719f9fc8b8554d9",
        "user": "614db672842acc0508fca948",
        "title": "morning work",
        "description": "morning desc",
        "tags": "morning desc",
        "date": "2021-09-25T14:02:42.553Z",
        "__v": 0
      },
      {
        "_id": "614f2c088719f9fc8b8554db",
        "user": "614db672842acc0508fca948",
        "title": "morning work1",
        "description": "morning desc1",
        "tags": "morning desc1",
        "date": "2021-09-25T14:02:48.279Z",
        "__v": 0
      },
      {
        "_id": "614f2c108719f9fc8b8554df",
        "user": "614db672842acc0508fca948",
        "title": "morning work111",
        "description": "morning desc111",
        "tags": "morning desc111",
        "date": "2021-09-25T14:02:56.895Z",
        "__v": 0
      }
    ]
  const [notes, setNotes] = useState(notesInitial);

  return(
    <noteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;