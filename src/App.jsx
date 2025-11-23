import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EdadAntigua from "./pages/EdadAntigua";
import EdadMedia from "./pages/EdadMedia";
import EdadModerna from "./pages/EdadModerna";
import EdadContemporanea from "./pages/EdadContemporanea";
import GuillermoDeTiro from "./pages/GuillermoDeTiro";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="edad-antigua" element={<EdadAntigua />} />
          <Route path="edad-media" element={<EdadMedia />} />
          <Route path="edad-moderna" element={<EdadModerna />} />
          <Route path="edad-contemporanea" element={<EdadContemporanea />} />
          <Route path="guillermo-de-tiro" element={<GuillermoDeTiro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
