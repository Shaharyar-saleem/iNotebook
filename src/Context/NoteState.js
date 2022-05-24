import AppContext from "./AppContext";
import {useState} from "react";

const NoteState = (props)=>{
    let [note, setNote] = useState([])

    // Adding Note
    let addNote = (title, description, tag) => {
      console.log("data from addNote:", title, "description", description, "tag", tag)
      let notes= {
        title: title,
        description: description,
        tag: tag
      }
        setNote(note.concat(notes))
    }

    // Edit Note
    let editNote = () => {

    }

    // Delete Note
    let deleteNote = () => {

    }

    return (
    <AppContext.Provider value={{note, addNote, editNote, deleteNote}}>
        {props.children}
    </AppContext.Provider>
    )
}

export default NoteState;