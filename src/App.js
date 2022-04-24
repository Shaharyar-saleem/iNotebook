import Navbar from './Components/Navbar';
import About from './Components/About';
import NoteState from "./Context/NoteState"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NoteState>
      <Navbar />
      <Routes>
          <Route path="/about" exact="true" element={<About />} />
      </Routes>
      </NoteState>
    </div>
  );
}

export default App;
