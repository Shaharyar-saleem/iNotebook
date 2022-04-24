import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import NoteState from "./Context/NoteState";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NoteState>
      <Navbar />
      <div className="container">
      <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/about" exact="true" element={<About />} />
      </Routes>
      </div>
      </NoteState>
    </div>
  );
}

export default App;
