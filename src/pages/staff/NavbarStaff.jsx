import React, { useState } from "react";
import { logohammer, menu, close } from "../../images";
import { Link } from "react-router-dom";

const NavbarStaff = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  const Links = [
    {
      id: "dashboard",
      title: "Dashboard"
    },
    {
      id: "dashboard/users",
      title: "Usuarios"
    },
    {
      id: "dashboard",
      title: "Preguntas Frecuentes"
    },
    {
      id: "dashboard",
      title: "Programar Tarea"
    },
    {
      id: "dashboard",
      title: "Administrar Textos"
    },
  ];

  return (
    <>
      {/* Navbar section */}
      <nav className="w-full flex items-center py-5 z-20 bg-white xl:px-0 sm:px-16 px-6">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <img src={logohammer} alt="" width={200} />
          </div>
          <div>
            <ul className="list-none hidden lg:flex flex-row gap-10">
              {Links.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                    ? "text-[#fc4b08]"
                    : "text-black"
                    } hover:text-orange-500 text-[16px] cursor-pointer `}
                  onClick={() => setActive(link.title)}
                >
                  <Link to={`/${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h1 className="hidden xl:flex">
              Bienvenidido User !
            </h1>
          </div>

          { /* Mobile Navbar */}
          <div className="lg:hidden flex justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="hamburger"
              className="w-[28px] h-[28px] object-contain cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'}  p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg flex flex-col`} >
              <h1 className="select-none"> ¡Bienvenido User! </h1>
              <hr className="my-4" />
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {Links.map((link) => (
                  <li
                    key={link.id}
                    className={`${active === link.title
                      ? "text-[#fc4b08]"
                      : "text-black"
                      } hover:text-orange-500 text-[16px] cursor-pointer `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarStaff