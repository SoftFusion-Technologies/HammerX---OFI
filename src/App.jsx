import "./App.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import Clients from "./pages/Clients";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import OurValues from "./pages/OurValues";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
