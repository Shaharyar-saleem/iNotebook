import React from 'react';
import DeleteIcon from '../Icons/Delete';
import EditIcon from '../Icons/Edit';

export default function NoteItem(props) {
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
        <DeleteIcon width={30} height={30} />
        <EditIcon width={30} height={30} />
        </div>
    </div>
  )
}
