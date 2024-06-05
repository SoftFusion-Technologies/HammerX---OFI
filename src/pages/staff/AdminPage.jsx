import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarStaff from "./NavbarStaff";
import "../../styles/staff/dashboard.css";
import "../../styles/staff/background.css";
import Footer from "../../components/footer/Footer";
import TituloPreguntasModal from "./MetodsGet/TituloPreguntasModal";
import PreguntaDetalleModal from "./MetodsGet/PreguntaDetalleModal";

const AdminPage = () => {

  const [modalPreguntasOpen, setModalPreguntasOpen] = useState(false);
  const [modalDetalleOpen, setModalDetalleOpen] = useState(false);
  const [preguntas, setPreguntas] = useState([]);
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(null);
  const URL = "http://localhost:8080/ask/";

  const abrirModalPreguntas = async () => {
    try {
      const response = await axios.get(URL);
      setPreguntas(response.data);
      setModalPreguntasOpen(true);
    } catch (error) {
      console.log("Error al obtener las preguntas:", error);
    }
  };

  const cerrarModalPreguntas = () => {
    setModalPreguntasOpen(false);
  };

  const abrirModalDetalle = (pregunta) => {
    setPreguntaSeleccionada(pregunta);
    setModalDetalleOpen(true);
  };

  const cerrarModalDetalle = () => {
    setModalDetalleOpen(false);
  };


  return (
    <>
      {/* Navbar section */}
      <NavbarStaff />

      {/* Hero section*/}
      <section className="relative w-full h-contain mx-auto bg-white">
        <div className="dashboardbg">
          <div className="xl:px-0 sm:px-16 px-6 max-w-7xl mx-auto grid grid-cols-2 max-sm:grid-cols-1 max-md:gap-y-10 md:gap-10 py-28 sm:pt-44 lg:pt-28 md:w-5/6 ">
            <div className="bg-white font-bignoodle w-[250px] h-[100px] text-[20px] lg:w-[400px] lg:h-[150px] lg:text-[30px] mx-auto flex justify-center items-center rounded-tr-xl rounded-bl-xl">
              <Link to="/dashboard/novedades">
                <button className="btnstaff">Foro de Novedades</button>
              </Link>
            </div>
            <div className="bg-white  font-bignoodle w-[250px] h-[100px] text-[20px] lg:w-[400px] lg:h-[150px] lg:text-[30px] mx-auto flex justify-center items-center rounded-tl-xl rounded-br-xl">
              <Link to="/dashboard/testclass">
                <button className="btnstaff">Leads y Contacto</button>
              </Link>
            </div>
            <div className="bg-white  font-bignoodle w-[250px] h-[100px] text-[20px] lg:w-[400px] lg:h-[150px] lg:text-[30px] mx-auto flex justify-center items-center rounded-tr-xl rounded-bl-xl">
              <Link to="/dashboard/admconvenios">
                <button className="btnstaff">Convenios</button>
              </Link>
            </div>
            <div className="bg-white  font-bignoodle w-[250px] h-[100px] text-[20px] lg:w-[400px] lg:h-[150px] lg:text-[30px] mx-auto flex justify-center items-center rounded-tl-xl rounded-br-xl">
              <Link to="/dashboard/postulantes">
                <button className="btnstaff ">CV's Recibidos</button>
              </Link>
            </div>
            {/* New button to open the modal */}
            <div className="bg-white  font-bignoodle w-[250px] h-[100px] text-[20px] lg:w-[400px] lg:h-[150px] lg:text-[30px] mx-auto flex justify-center items-center rounded-tl-xl rounded-br-xl">
              <button className="btnstaff" onClick={abrirModalPreguntas}>Ver Preguntas Frecuentes</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
       {/* Modals */}
       <TituloPreguntasModal
        isOpen={modalPreguntasOpen}
        onClose={cerrarModalPreguntas}
        preguntas={preguntas}
        onPreguntaSelect={abrirModalDetalle}
      />
      <PreguntaDetalleModal
        isOpen={modalDetalleOpen}
        onClose={cerrarModalDetalle}
        pregunta={preguntaSeleccionada}
      />
    </>
  );
};

export default AdminPage;
