import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import EdadAntigua from "./pages/EdadAntigua";
import EdadMedia from "./pages/EdadMedia";
import EdadModerna from "./pages/EdadModerna";
import EdadContemporanea from "./pages/EdadContemporanea";
import GuillermoDeTiro from "./pages/edadMedia/GuillermoDeTiro";
import Ertugrul from "./pages/edadMedia/Ertugrul";
import HalimeHatunErtugrul from "./pages/edadMedia/HalimeHatunErtugrul";
import HaymeErtugrul from "./pages/edadMedia/HaymeErtugrul";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="edad-antigua" element={<EdadAntigua />} />
            <Route path="edad-media" element={<EdadMedia />} />
            <Route path="edad-moderna" element={<EdadModerna />} />
            <Route path="edad-contemporanea" element={<EdadContemporanea />} />
            <Route path="guillermo-de-tiro" element={<GuillermoDeTiro />} />
            <Route path="ertugrul-gazi" element={<Ertugrul />} />
            <Route path="halime-hatun-ertugrul" element={<HalimeHatunErtugrul />} />
            <Route path="hayme-ertugrul" element={<HaymeErtugrul />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
