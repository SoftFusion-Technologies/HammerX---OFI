/*
 * Programador: Lucas Albornoz
 * Fecha Cración: 12 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción: Dropdown que se despliega al hacer click en "Contacto".
 *
 *
 *  Tema: Dropdown
 *  Capa: Frontend
 */

import { Link } from "react-router-dom";

import React, { useState } from "react";

const DropdownMenu = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="flex flex-1 justify-center items-center">
      <h1
        className="cursor-pointer select-none"
        onClick={() => setToggle(!toggle)}
      >
        Contacto
      </h1>
        <div
          id="dropdown"
          className={ `${!toggle ? "hidden" : "flex" } bg-white px-2 absolute top-16 min-w-[100px] z-10 rounded-b-lg`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <Link
                to="/contacto"
                className="block px-4 py-2 hover:text-[#fc4b08] font-messina text-[16px]"
                onClick={() => setToggle(!toggle)}
              >
                Envianos un mensaje
              </Link>
            </li>
            <li>
              <Link
                to="/form"
                className="block px-4 py-2 hover:text-[#fc4b08] font-messina text-[16px]"
                onClick={() => setToggle(!toggle)}
              >
                Quiero trabajar con ustedes
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 hover:text-[#fc4b08] font-messina text-[16px]"
                onClick={() => setToggle(!toggle)}
              >
                Probar una clase
              </Link>
            </li>
          </ul>
        </div>

    </div>
  );
};

export default DropdownMenu;
