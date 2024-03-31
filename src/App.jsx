import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes as Rutas,
  Route as Ruta
} from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const Clients = lazy(() => import('./pages/soycliente/Clients'));
const AboutUs = lazy(() => import('./pages/quieroconocerlos/AboutUs'));
const OurTeam = lazy(() => import('./pages/quieroconocerlos/OurTeam'));
const OurValues = lazy(() => import('./pages/quieroconocerlos/OurValues'));
const Sedeconcepcion = lazy(() => import('./pages/sedes/Concepcion'));
const Sedemonteros = lazy(() => import('./pages/sedes/Monteros'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Rutas>
          <Ruta path="/" element={<HomePage />} />
          <Ruta path="/clientes" element={<Clients />} />
          <Ruta path="/nosotros" element={<AboutUs />} />
          <Ruta path="/nosotros/quienessomos" element={<OurTeam />} />
          <Ruta path="/nosotros/nuestrosvalores" element={<OurValues />} />
          <Ruta path="/Concepcion" element={<Sedeconcepcion />} />
          <Ruta path="/Monteros" element={<Sedemonteros />} />
        </Rutas>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
