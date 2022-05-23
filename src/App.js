import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import NoteState from "./Context/NoteState";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Alert from "./Components/Alert";
import {useState} from "react";

function App() {

  let [alert, setAlert] = useState({})

  let triggerAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    })
  }
  return (
    <div className="App">
      <NoteState>
      <Navbar />
      <div className="container">
      <Alert alertContent={alert} />
      <Routes>
          <Route path="/" exact="true" element={<Home triggerAlert={triggerAlert} />} />
          <Route path="/about" exact="true" element={<About />} />
      </Routes>
      </div>
      </NoteState>
    </div>
  );
}

export default App;
