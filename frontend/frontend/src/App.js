import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomeDrawing from "./pages/HomeDrawing";
import Email from "./pages/Email";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeDrawing />}/>
        <Route path='send-email' element={<Email />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='*' element={<HomeDrawing />}/>
      </Routes>
    </Router>
  );
}

export default App;
