import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/about" exact="true" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
