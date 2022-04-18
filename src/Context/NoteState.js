import AppContext from "./AppContext";
import {useState} from "react";



const NoteState = (props)=>{

    const user = {
        name: "Shaharyar",
        age: "26"
    }

    const [userState, setUserState] = useState(user);

    const UpdateState = () => {
        setTimeout(() =>
        {
            setUserState({
            name: "Ali",
            age: "1000"})
    }
        ,1000)
    }

    return (
    <AppContext.Provider value={{userState, UpdateState}}>
        {props.children}
    </AppContext.Provider>
    )
}

export default NoteState;