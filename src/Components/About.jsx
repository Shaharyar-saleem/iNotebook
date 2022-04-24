import React, {useContext, useEffect} from 'react';
import AppContext from "../Context/AppContext"

export default function About() {
  const user = useContext(AppContext)
  return (
    <div>
      <p>About Page</p>
    </div>
  )
}
