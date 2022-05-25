import React, {useContext} from 'react';
import DeleteIcon from '../Icons/Delete';
import EditIcon from '../Icons/Edit';
import AppContext from "../../Context/AppContext";

export default function NoteItem(props) {
  const notes = useContext(AppContext)
  const {deleteNote} = notes

  const noteBody = {
    backgroundColor: '#c0c0c052',
    borderLeft: '5px solid green',
    padding: '10px 25px',
    borderRadius: '5px',
  }

  return (
    <div className="my-2 position-relative" style={noteBody}>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.tag}</p>
        <div className="d-flex" style={{position: 'absolute', top: 15, right: 15}}>
        <div onClick={()=>{deleteNote(props.id)}}><DeleteIcon width={30} height={30} /></div>
        <EditIcon width={30} height={30} />
        </div>
    </div>
  )
}
