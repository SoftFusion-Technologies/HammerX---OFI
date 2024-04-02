import { useState } from 'react'
import { theme } from '../../images'
import Menu from "./Menu"
import Marcas from './Marcas'
import '../../styles/header/animacionlinks.css'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav
      data-aos="zoom-in-up" //Se reemplazo fade-down por el realentizamiento que aplicaba a la web, cambio aplicado por Benjamin Orellana - 27/03/24
      className="justify-between w-full dark:bg-gradient-to-r from-gray-600 to-gray-900  fixed z-50"
    >
      <div className="h-12 flex w-full bg-white justify-between items-center py-8 px-10 z-10 dark:bg-transparent ">
        <Marcas />

        <div className="hidden items-center font-tilt-neon text-black gap-10 lg:flex space-x-4 dark:text-white">
          <a href="/" className="link">
            Home
          </a>
          <a href="/nosotros/quienessomos" className="link" target="_blank">
            ¿Quiénes somos?
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=543863564651&text=Hola%21+necesito+info+de+la+sede+de+monteros&type=phone_number&app_absent=0"
            className="link"
          >
            Contacto
          </a>
          <a href="#" className="">
            <button className="bg-[#fc4b08] hover:bg-orange-500 text-white py-2 px-4 rounded transition-colors duration-100 z-10">
              ¡Probar una clase!
            </button>
          </a>

          <img
            onClick={toggleDarkMode}
            className="h-7 mt-2 cursor-pointer dark:invert"
            src={theme}
            alt="Theme"
          />
        </div>

        <div className="lg:hidden">
          <button
            id="menu-toggle"
            className=" relative"
            onClick={toggleMobileMenu}
          >
            <Menu /> {/* menú para mostrarse en dispositivos mobiles*/}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="h-auto absolute bg-[#fffc] text-black backdrop-filter backdrop-blur-lg pb-5 w-full z-15 lg:hidden px-8 z-50 dark:text-white dark:bg-[#90939ed7] dark:backdrop-filter dark:backdrop-blur-lg">
          <a href="/" className="block py-2 px-4 ">
            Home
          </a>
          <a href="/nosotros/quienessomos" className="block py-2 px-4 ">
            ¿Quiénes somos?
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=543863564651&text=Hola%21+necesito+info+de+la+sede+de+monteros&type=phone_number&app_absent=0"
            className="block py-2 px-4 "
          >
            Contacto
          </a>
          <a href="#testi" className="block py-2 px-4 ">
            Prueba una clase gratis
          </a>
          <div className="ml-4">
            <img
              onClick={toggleDarkMode}
              className="h-7 mt-2 cursor-pointer dark:invert"
              src={theme}
              alt="Theme"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
