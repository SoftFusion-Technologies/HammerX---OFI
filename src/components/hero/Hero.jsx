import { flecha1, flecha2, logo, hero2 } from "../../images/svg/index";
import FixedNavbar from "./FixedNavbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex">
      <div className="lg:w-1/2 md:w-2/3 max-md:w-full px-10 max-sm:px-6 dark:bg-gradient-to-r from-gray-600 to-gray-700" id="div1">
        <img src={logo} alt="logo" className="mt-24" />

        <div className="w-5/6 h-80 border-4 border-orange-600 rounded-xl mt-10 ml-5 max-md:mx-auto">
          <div>
            <p className="max-md:text-sm text-center px-6 pt-6 font-montserrat dark:text-white">
              Bienvenidos a nuestro sitio oficial.{" "}
            </p>
            <p className="max-md:text-sm text-center px-6 font-montserrat dark:text-white">
              Todo lo que necesitas saber para entrenar con nosotros en un solo
              lugar.
            </p>
          </div>

          <nav className="w-full lg:mt-10 md:mt-8 sm:mt-4 max-sm:mt-4">
            <ul
              className="flex flex-col list-none font-semibold justify-between items-center text-[#fc4b08]
            font-roboto text-sm"
            >
              <li className="py-2 hover:text-orange-500 transition duration-200 ease-in-out">
                <a href="#">VOS, EN EL CENTRO DE LA ESCENA</a>
              </li>
              <hr className="text-black w-5/6" />
              <li className="py-2 hover:text-orange-500 transition duration-200 ease-in-out">
                <a href="#">TUS ACTIVIDADES</a>
              </li>
              <hr className="text-black w-5/6" />
              <li className="py-2 hover:text-orange-500 transition duration-200 ease-in-out">
                <a href="#">NUESTRAS SEDES</a>
              </li>
              <hr className="text-black w-5/6" />
              <li className="py-2 hover:text-orange-500 transition duration-200 ease-in-out">
                <a href="#">QUIERO TRABAJAR CON USTEDES</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:w-1/2 md:w-1/3 max-md:hidden relative dark:bg-gradient-to-r from-gray-700 to-gray-900" id="div2">
        <img
          src={hero2}
          alt="Señoras"
          className="hidden lg:block absolute bottom-0 h-full object-cover object-left"
        />
        <img
          src={flecha2}
          alt="Señoras"
          className="lg:hidden max-md:hidden max-md: absolute bottom-0 h-full object-cover object-left "
        />
        {/*
        <img
          src={flecha2}
          alt="Flecha"
          className="self-end mt-6"
        /> */}
      </div>

      <FixedNavbar />
    </div>
  );
};

export default Hero;
