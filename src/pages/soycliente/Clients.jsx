/*
 * Programador: Lucas Albornoz
 * Fecha Cración: 01 / 04 / 2024
 * Versión: 1.0
 *
 * Descripción: Subpágina que se abre luego de hacer click en el botón principal "Soy Cliente". 
 * Contiene diferente información sobre los servicios del gimnasio.
 *  
 *
 *  Tema: Soy Cliente
 *  Capa: Frontend
 */


import { useEffect } from "react";
import "../../styles/clients/volver.css";
import "../../styles/clients/botones.css";
import "../../styles/clients/background.css";
import { Link } from "react-router-dom";

const Clients = () => {
  useEffect(() => {
    document.title = "Soy Cliente";
  }, []);

  return (
    <div className="w-full pt-16 bg-gradient-to-b from-orange-500 to-[#fc4b08]">
      <div className="bglcli pb-20">
        <header className="w-full">
          <div className="pl-10 pt-5 max-sm:pl-2">
            <Link to="/">
              <button className="button">
                <div className="button-box">
                  <span className="button-elem">
                    <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                  <span className="button-elem">
                    <svg viewBox="0 0 46 40">
                      <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                    </svg>
                  </span>
                </div>
              </button>
            </Link>
          </div>

          <h1 className="text-white max-md:text-[40px] text-[50px] text-center font-bignoodle ">
            Soy Cliente
          </h1>
        </header>

        <div className="h-contain w-5/6 mx-auto">
          <div className="pt-20 max-sm:pt-16 flex justify-center gap-4 flex-wrap">
            {/* Primer grupo de 2 botones */}
            <div className="flex justify-center gap-4 max-sm:flex-col md:space-x-5">
              <a href="/nosotros/quienessomos" className="max-sm:mb-5">
                <button className="btnscli font-messina font-semibold">
                  Contás con tu entrenador
                </button>
              </a>
              <a href="/nosotros/nuestrosvalores" className="max-sm:mb-5">
                <button className="btnscli font-messina font-semibold">
                  Promociones
                </button>
              </a>
            </div>
            {/* Segundo grupo de 3 botones */}
            <div className="flex justify-center gap-4 mt-4 max-sm:mt-0 sm:flex-wrap max-sm:flex-col md:space-x-5">
              <a href="/nosotros/nuestrosvalores" className="max-sm:mb-5">
                <button className="btnscli font-messina font-semibold">
                  Congela tu contrato
                </button>
              </a>
              <a href="/nosotros/nuestrosvalores" className="max-sm:mb-5">
                <button className="btnscli font-messina font-semibold">
                  Convenios
                </button>
              </a>
              <a href="/nosotros/nuestrosvalores" className="max-sm:mb-5">
                <button className="btnscli font-messina font-semibold">
                  Transferencia de contratos
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
