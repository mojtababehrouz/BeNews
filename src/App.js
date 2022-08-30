import "./App.css";
import { Articles } from "./Components/Articles/Articles";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/HomePage/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
