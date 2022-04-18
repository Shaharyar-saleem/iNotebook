import React, {useContext, useEffect} from 'react';
import AppContext from "../Context/AppContext"

export default function About() {
  const user = useContext(AppContext)
  useEffect(()=>{
    user.UpdateState()
  }, [])
  return (
    <div>
      <h1>Hello {user.userState.name} you are {user.userState.age} years old</h1>
    </div>
  )
}
