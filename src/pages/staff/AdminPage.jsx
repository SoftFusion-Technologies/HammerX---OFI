import React from "react";
import "../../styles/staff/dashboard.css";

const AdminPage = () => {
  return (
    <>
      {/* Navbar section */}
      <nav className="w-full flex items-center py-5 z-20 bg-gradient-to-b from-[#fc4b08] to-orange-500 xl:px-0 sm:px-16 px-6">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-white font-bignoodle tracking-wide text-lg text-center">
            Bienvenidido <span className="">User</span> !
          </h1>
        </div>
      </nav>

      {/* Hero section*/}
      <section className="relative w-full h-screen mx-auto bg-white">
        <div className="xl:px-0 sm:px-16 px-6 max-w-7xl mx-auto grid grid-cols-2 max-sm:grid-cols-1 max-md:gap-y-10 md:gap-10 pt-16 md:w-5/6">
          <div className="bg-orange-500 text-white font-bignoodle w-[400px] h-[200px] mx-auto flex justify-center items-center rounded-lg">
            <button className="">
              Foro de Novedades
            </button>
          </div>
          <div className="bg-orange-500 text-white font-bignoodle w-[400px] h-[200px] mx-auto flex justify-center items-center rounded-lg">
            <button className="">
              Leads y Contacto
            </button>
          </div>
          <div className="bg-orange-500 text-white font-bignoodle w-[400px] h-[200px] mx-auto flex justify-center items-center rounded-lg">
            <button className="">
              Convenios
            </button>
          </div>
          <div className="bg-orange-500 text-white font-bignoodle w-[400px] h-[200px] mx-auto flex justify-center items-center rounded-lg">
            <button className="">
              CV's Recibidos
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPage;
