import "./App.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import Clients from "./pages/soycliente/Clients";
import AboutUs from "./pages/quieroconocerlos/AboutUs";
import OurTeam from "./pages/quieroconocerlos/OurTeam";
import OurValues from "./pages/quieroconocerlos/OurValues";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sedeconcepcion from "./pages/sedes/Concepcion";
import Sedemonteros from "./pages/sedes/Monteros";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/nosotros/quienessomos" element={<OurTeam />} />
          <Route path="/nosotros/nuestrosvalores" element={<OurValues />} />
          <Route path="/Concepcion" element={<Sedeconcepcion />} />
          <Route path="/Monteros" element={<Sedemonteros />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
