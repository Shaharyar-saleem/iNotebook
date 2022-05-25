import React, { useContext } from "react";
import AddNote from "./Notes/AddNote";
import NoteItem from "./Notes/NoteItem";
import AppContext from "../Context/AppContext";

export default function Home(props) {
  const notes = useContext(AppContext);
  const { note, addNote } = notes;
  return (
    <div className="row">
      <div className="col-md-6">
        <AddNote />
      </div>
      <div className="col-md-6 my-5">
        <h3 className="text-center">
          <i>View Notes</i>
        </h3>
        <div className="mt-4">
          {note.map((note, key) => {
            console.log("note:", note)
            return (
              <NoteItem
                title={note.title}
                description={note.description}
                tag={note.tag}
                key={key}
                id={note._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
