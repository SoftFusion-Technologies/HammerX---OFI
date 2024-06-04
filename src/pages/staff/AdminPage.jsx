import { Link } from "react-router-dom";
import NavbarStaff from "./NavbarStaff";
import "../../styles/staff/dashboard.css";
import "../../styles/staff/background.css";
import Footer from "../../components/footer/Footer";

const AdminPage = () => {





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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminPage;
