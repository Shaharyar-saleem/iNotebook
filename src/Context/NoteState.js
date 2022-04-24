import AppContext from "./AppContext";
import {useState} from "react";



const NoteState = (props)=>{
    return (
    <AppContext.Provider value={{}}>
        {props.children}
    </AppContext.Provider>
    )
}

export default NoteState;