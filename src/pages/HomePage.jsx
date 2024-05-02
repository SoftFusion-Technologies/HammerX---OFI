/*
 * Programador: Lucas Albornoz
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción: Página principal que contiene los componentes principales.
 *  
 *
 *  Tema: Página Principal
 *  Capa: Frontend
 */

import Hero from "../components/hero/Hero";
import Navbar from "../components/header/Navbar";
import Servicios from "../components/main/Servicios";
import About from "../components/main/About";
import MobileApp from "../components/main/MobileApp";

const HomePage = () => {
  return (
    <>
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Servicios />
      <About />
      <MobileApp />
    </div>
    </>
  );
};

export default HomePage;
