import React, { useEffect, useState } from "react";
import "../../styles/hero/fixedNavbar.css"

const FixedNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) { //Cambio agregado por benjamin orellana para una demo al cliente
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`w-full absolute bottom-0 z-50 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0 '}`}>
      <div className="border-2 bg-white py-4 fixed w-full bottom-0 box">
        <ul className="list-none">
          <li className="">
            <a href="">
              <p className="text-center font-bignoodle text-[20px] tracking-wider">¡QUIERO PROBAR UNA CLASE GRATIS!</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FixedNavbar;
