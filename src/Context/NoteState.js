import AppContext from "./AppContext";
import {useState} from "react";

const NoteState = (props)=>{
    let [note, setNote] = useState([])

    // Adding Note
    let addNote = (title, description, tag) => {
      console.log("data from addNote:", title, "description", description, "tag", tag)

      // Todo: This is the dummuy data template will be deleted actual data will come from the mongoDB
      let notes= {
        "_id": "61322f119553781a8ca8d0e08",
        "user": "6131dc5e3e4037cd4734a0664",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2021-09-03T14:20:09.668Z",
        "__v": 0
      }
        setNote(note.concat(notes))
    }

    // Edit Note
    let editNote = () => {

    }

    // Delete Note
    let deleteNote = (id) => {
       console.log("Delete Note is called with id:", id)
       let newNote = note.filter((note)=>{return note._id!==id})
       setNote(newNote)
    }

    return (
    <AppContext.Provider value={{note, addNote, editNote, deleteNote}}>
        {props.children}
    </AppContext.Provider>
    )
}

export default NoteState;