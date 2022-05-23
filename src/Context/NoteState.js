import AppContext from "./AppContext";
import {useState} from "react";

const sampleNotes = [
    {
      "_id": "625c46242ce0abbf2644d472",
      "user": "625982c91456b2af9126cc92",
      "title": "A2 language",
      "description": "German language course for learn the languae",
      "tag": "german",
      "time": "2022-04-17T16:53:07.689Z",
      "__v": 0
    },
    {
      "_id": "625c462a2ce0abbf2644d474",
      "user": "625982c91456b2af9126cc92",
      "title": "A1 language",
      "description": "German language course for learn the languae",
      "tag": "german",
      "time": "2022-04-17T16:53:07.689Z",
      "__v": 0
    },
    {
      "_id": "625c462f2ce0abbf2644d476",
      "user": "625982c91456b2af9126cc92",
      "title": "B1 language",
      "description": "German language course for learn the languae",
      "tag": "german",
      "time": "2022-04-17T16:53:07.689Z",
      "__v": 0
    },
    {
      "_id": "625c46322ce0abbf2644d478",
      "user": "625982c91456b2af9126cc92",
      "title": "B2 language",
      "description": "German language course for learn the languae",
      "tag": "german",
      "time": "2022-04-17T16:53:07.689Z",
      "__v": 0
    }
  ]


const NoteState = (props)=>{
    let [note, setNote] = useState(sampleNotes)
    return (
    <AppContext.Provider value={{note, setNote}}>
        {props.children}
    </AppContext.Provider>
    )
}

export default NoteState;