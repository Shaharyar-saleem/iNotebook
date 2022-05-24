import React, {useContext, useState} from "react";
import AppContext from "../../Context/AppContext";

export default function AddNote(props) {

  const notes = useContext(AppContext)
  const {addNote} = notes

  let [note, setNote] = useState({title:"", description:"",tag:""})

  let handleChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
        // console.log("Hanlde Change fn:", note)
  }

  let handleSubmit = (e) => {
      e.preventDefault()
      addNote(note.title, note.description, note.tag)
  }



  return (
    <div className="my-5">
        <h3 className="text-center"><i>Add Note</i></h3>
        <form>
        <div className="form-group my-2">
          <label>Note Title</label>
          <input type="text" className="form-control my-2" name="title" id="title" onChange={handleChange} />
        </div>
        <div className="form-group my-4">
          <label>Note Description</label>
          <textarea name="description" id="description" rows="10" className="form-control my-2" onChange={handleChange}></textarea>
        </div>
        <div className="form-group my-2">
          <label>Note Tag</label>
          <input type="text" name="tag" id="tag" className="form-control my-2" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary btn-lg my-2" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
