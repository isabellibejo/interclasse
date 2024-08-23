import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Example from "./pages/Example";
import Futsal from "./pages/Futsal";
import Atletismo from "./pages/Atletismo";
import Basquete from "./pages/Basquete";
import Futmesa from "./pages/Futmesa";
import Handbol from "./pages/Handbol";
import Queimada from "./pages/Queimada";
import Volei from "./pages/Volei";
import Tenisdemesa from "./pages/Tenisdemesa";
import Sobrenos from "./pages/Sobrenos";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Example />} />
          <Route path="/futsal" element={<Futsal />} />
          <Route path="/atletismo" element={<Atletismo />} />
          <Route path="/basquete" element={<Basquete />} />
          <Route path="/futmesa" element={<Futmesa />} />
          <Route path="/handbol" element={<Handbol />} />
          <Route path="/queimada" element={<Queimada />} />
          <Route path="/volei" element={<Volei />} />
          <Route path="/tenisdemesa" element={<Tenisdemesa />} />
          <Route path="/sobrenos" element={<Sobrenos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
