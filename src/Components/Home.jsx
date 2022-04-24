import React from 'react';
import AddNote from './Notes/AddNote';
import ViewNotes from './Notes/ViewNotes';

export default function Home() {
  return (
    <div className="row">
        <div className="col-md-6">
            <AddNote />
        </div>
        <div className="col-md-6">
            <ViewNotes />
        </div>
    </div>
  )
}
