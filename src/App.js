import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Character from "./pages/Character";
import Locations from "./pages/Locations";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import Episode from "./pages/Episode";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/location/:id" element={<Location />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/episode/:id" element={<Episode />} />
    </Routes>
  );
}

export default App;
