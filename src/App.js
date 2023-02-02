import "./App.css";
import RenderPhaser from "../src/components/RenderPhaser";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Instructions from "./components/Instructions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<HomePage />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/playgame" element={<RenderPhaser />} />
      <Route path="/instructions/:part" element={<Instructions />} />
    </Routes>
  );
}

export default App;
