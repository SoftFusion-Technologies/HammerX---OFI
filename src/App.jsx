/*
 * Programador: Benjamin Orellana
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción:
 *  Este archivo (App.jsx) es el componente principal de la aplicación.
 *  Contiene la configuración de enrutamiento, carga de componentes asíncrona,
 *  y la lógica para mostrar un componente de carga durante la carga inicial.
 *  Además, incluye la estructura principal de la aplicación, como la barra de navegación,
 *  el pie de página y las diferentes rutas para las páginas de la aplicación.
 *
 * Tema: Configuración de la Aplicación Principal
 * Capa: Frontend
 * Contacto: benjamin.orellanaof@gmail.com || 3863531891
 */

import React, { lazy, Suspense, useState, useEffect , memo} from 'react';
import {
  BrowserRouter as Router,
  Routes as Rutas,
  Route as Ruta
} from 'react-router-dom';
import Navbar from './components/header/Navbar'; // Importa el componente de la barra de navegación
import Footer from './components/footer/Footer'; // Importa el componente del pie de página
import FormTestClass from './components/Forms/FormTestClass';

// Importa los diferentes componentes de las páginas usando lazy loading para mejorar el rendimiento
const HomePage = lazy(() => import('./pages/HomePage'));
const Clients = lazy(() => import('./pages/soycliente/Clients'));
const AboutUs = lazy(() => import('./pages/quieroconocerlos/AboutUs'));
const OurTeam = lazy(() => import('./pages/quieroconocerlos/OurTeam'));
const OurValues = lazy(() => import('./pages/quieroconocerlos/OurValues'));
const Sedeconcepcion = lazy(() => import('./pages/sedes/Concepcion'));
const Sedemonteros = lazy(() => import('./pages/sedes/Monteros'));
const Loading = lazy(() => import('./components/Loading')); // Importa el componente de carga
const Pautas = lazy(() => import('./pages/Pautas'));
const Legales = lazy(() => import('./pages/Legales'));
const Contacto = lazy(() => import('./pages/Contacto'));
const FormPostu = lazy(() => import('./components/Forms/FormPostulante'));

/**
 * Componente principal de la aplicación.
 * 
 * @returns {JSX.Element} Elemento JSX que representa la aplicación.
 */

const App = memo(() => {
  // Estado para controlar si se debe mostrar el componente de carga
  const [showLoading, setShowLoading] = useState(true);

  // Efecto para ocultar el componente de carga después de un cierto tiempo
  useEffect(() => {
    // Establece un temporizador para ocultar el componente de carga después de 2 segundos
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1700);

    // Limpia el temporizador al desmontar el componente para evitar fugas de memoria
    return () => clearTimeout(timer);
  }, []); // Este efecto se ejecuta solo una vez, al montar el componente

  // Renderizado del componente
  return (
    <Router>
      {/* Componente de Suspense para manejar la carga de componentes lazy */}
      <Suspense>
        {/* Condición para mostrar el componente de carga o el contenido de la aplicación */}
        {showLoading ? <Loading /> : (
          <>
            {/* Barra de navegación */}
            <Navbar />
            {/* Enrutamiento de las diferentes páginas */}
            <Rutas>
              <Ruta path="/" element={<HomePage />} /> {/* Página principal */}
              <Ruta path="/clientes" element={<Clients />} /> {/* Página de clientes */}
              <Ruta path="/nosotros" element={<AboutUs />} /> {/* Página "Nosotros" */}
              <Ruta path="/nosotros/quienessomos" element={<OurTeam />} /> {/* Página "Quiénes somos" */}
              <Ruta path="/nosotros/nuestrosvalores" element={<OurValues />} /> {/* Página "Nuestros valores" */}
              <Ruta path="/Sedes/Concepcion" element={<Sedeconcepcion />} /> {/* Página de la sede de Concepción */}
              <Ruta path="/Sedes/Monteros" element={<Sedemonteros />} /> {/* Página de la sede de Monteros */}
              <Ruta path="/pautas" element={<Pautas />} /> 
              <Ruta path="/legales" element={<Legales />} /> 
              <Ruta path="/contacto" element={<Contacto />} />
              <Ruta path="/form" element={<FormPostu />} /> {/* Rutas de prueba para testear funcionamiento */}
              <Ruta path="/probarclase" element={<FormTestClass/>} />  {/* Rutas de prueba para testear funcionamiento */}


            </Rutas>
            {/* Pie de página */}
            <Footer />
          </>
        )}
      </Suspense>
    </Router>
  );
});

export default App; // Exporta el componente de la aplicación
