import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Locations from "./pages/Locations";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import Episode from "./pages/Episode";
import { EntryPage } from "./pages/EntryPage";

import "./App.css";

import "./fonts.css";

function App() {
  return (
    <Routes>
      <Route index element={<EntryPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episode/:id" element={<Episode />} />
      </Route>
    </Routes>
  );
}

export default App;
