import { useState } from "react";
import {
  close,
  musc1,
  musc2,
  musc3,
  cardio1,
  cardio2,
  cardio3,
  yoga1,
  yoga2,
  yoga3,
  cross1,
  cross2,
  cross3,
} from "../../images/index";
import "../../styles/main/servicios.css"

const Servicios = () => {
  const [servicio, setServicio] = useState("");

  const verMusculacion = () => {
    setServicio("musculacion");
  };
  const verCardio = () => {
    setServicio("cardio");
  };
  const verYoga = () => {
    setServicio("yoga");
  };
  const verCrossfit = () => {
    setServicio("crossfit");
  };
  const cerrarVentana = () => {
    setServicio("");
  };

  const [fondomusculacion, setFondomusculacion] = useState(musc1); // Estado para la imagen de fondo
  const [fondocardio, setFondocardio] = useState(cardio1); // Estado para la imagen de fondo
  const [fondoyoga, setFondoyoga] = useState(yoga1); // Estado para la imagen de fondo
  const [fondocrossfit, setFondocrossfit] = useState(cross1); // Estado para la imagen de fondo

  const cambiarFonduMusc = () => {
    setFondomusculacion(musc1);
  };
  const cambiarFonduMusc2 = () => {
    setFondomusculacion(musc2);
  };
  const cambiarFonduMusc3 = () => {
    setFondomusculacion(musc3);
  };

  const cambiarFonduCardio = () => {
    setFondocardio(cardio1);
  };
  const cambiarFonduCardio2 = () => {
    setFondocardio(cardio2);
  };
  const cambiarFonduCardio3 = () => {
    setFondocardio(cardio3);
  };

  const cambiarFondoYoga = () => {
    setFondoyoga(yoga1);
  };
  const cambiarFondoYoga2 = () => {
    setFondoyoga(yoga2);
  };
  const cambiarFondoYoga3 = () => {
    setFondoyoga(yoga3);
  };

  const cambiarFonduCross = () => {
    setFondocrossfit(cross1);
  };
  const cambiarFonduCross2 = () => {
    setFondocrossfit(cross2);
  };
  const cambiarFonduCross3 = () => {
    setFondocrossfit(cross3);
  };

  return (
    <div className="main2 dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-800 bg-gradient-to-b from-orange-600 to-[#fc4b08] relative" id="activities">

      <img
        className="w-8 h-80 absolute top-10 left-0 max-sm:hidden"
        src={"https://www.hammer.ar/image/guiones1.png"}
        alt="Guiones"
      />
      <img
        className="w-8 h-80 absolute bottom-10 right-0 max-sm:hidden"
        src={"https://www.hammer.ar/image/guiones1.png"}
        alt="Guiones"
      />
      <div className="text-center px-[5%] text-black dark:text-white" id="servs1">

        <h1 data-aos="fade-up" className="text-white font-bignoodle text-[50px] font-bold tracking-wider pb-5">Tus Actividades</h1>
        <p data-aos="fade-up" className="font-messina text-md  text-orange-200 dark:text-white">
          Explora un abanico de servicios diseñados para transformar tu
          experiencia de fitness. Desde entrenamientos personalizados hasta
          clases vibrantes, cada servicio en nuestra oferta está diseñado para
          llevar tu bienestar a nuevas alturas. Únete a nosotros y descubre cómo
          podemos personalizar tu viaje hacia una vida activa y saludable.
        </p>
        <div className="serv">
          <div className="contenedor">
            <div data-aos="fade-right" id="servicio" className="musculacion">
              <p>Musculación</p>
              <a href="#vermas">
                <button onClick={verMusculacion}>Ver más</button>
              </a>
            </div>
            <div data-aos="fade-right" id="servicio" className="cardio">
              <p>Cardio</p>
              <a href="#vermas">
                <button onClick={verCardio}>Ver más</button>
              </a>
            </div>
            <div data-aos="fade-left" id="servicio" className="yoga">
              <p>Clases grupales</p>
              <a href="#vermas">
                <button onClick={verYoga}>Ver más</button>
              </a>
            </div>
            <div data-aos="fade-left" id="servicio" className="crossfit">
              <p>Bajo impacto</p>
              <a href="#vermas">
                <button onClick={verCrossfit}>Ver más</button>
              </a>
            </div>
            <div data-aos="fade-left" id="servicio" className="kids">
              <p>Kids</p>
              <a href="#vermas">
                <button onClick={verCrossfit}>Ver más</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {servicio === "musculacion" && (
        <>
          <div id="vermas" className="espacio"></div>{" "}
          {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
          <div className="vermas">
            <div className="verMasMusc">
              <a href="#servs1">
                <img
                  src={close}
                  className="img-close"
                  onClick={cerrarVentana}
                  alt="Cerrar Ventana"
                />
              </a>
              <div className="vermasbox">
                <div
                  className="images"
                  style={{ backgroundImage: `url(${fondomusculacion})` }}
                >
                  <ul>
                    <li onClick={cambiarFonduMusc}></li>
                    <li onClick={cambiarFonduMusc2}></li>
                    <li onClick={cambiarFonduMusc3}></li>
                  </ul>
                  <a href="#servs1">
                    <img
                      src={close}
                      className="img-close"
                      onClick={cerrarVentana}
                      alt="Cerrar Ventana"
                    />
                  </a>
                </div>
                <div className="vermas-cont">
                  <h1>Musculación</h1>
                  <p>
                    Nuestros servicios de musculación van más allá de levantar
                    pesas; son una invitación a la transformación física y al
                    empoderamiento personal. Desde rutinas personalizadas hasta
                    un amplio abanico de máquinas de última generación, te
                    proporcionamos todo lo que necesitas para alcanzar tus
                    objetivos de fuerza y definición muscular.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {servicio === "cardio" && (
        <>
          <div id="vermas" className="espacio"></div>{" "}
          {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
          <div className="vermas">
            <div className="verMasMusc">
              <a href="#servs1">
                <img
                  src={close}
                  className="img-close"
                  onClick={cerrarVentana}
                  alt="Cerrar Ventana"
                />
              </a>
              <div className="vermasbox">
                <div
                  className="images"
                  style={{ backgroundImage: `url(${fondocardio})` }}
                >
                  <ul>
                    <li onClick={cambiarFonduCardio}></li>
                    <li onClick={cambiarFonduCardio2}></li>
                    <li onClick={cambiarFonduCardio3}></li>
                  </ul>
                  <a href="#servs1">
                    <img
                      src={close}
                      className="img-close"
                      onClick={cerrarVentana}
                      alt="Cerrar Ventana"
                    />
                  </a>
                </div>
                <div className="vermas-cont">
                  <h1>Cardio</h1>
                  <p>
                    Únete a nuestra comunidad de amantes del cardio, donde cada
                    latido cuenta y cada sesión te acerca a un estado físico y
                    mental óptimo. Experimenta cómo el cardio no solo mejora tu
                    salud cardiovascular, sino que también libera la tensión
                    diaria, fortalece tu resistencia y te impulsa hacia un
                    estilo de vida activo y saludable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {servicio === "yoga" && (
        <>
          <div id="vermas" className="espacio"></div>{" "}
          {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
          <div className="vermas">
            <div className="verMasMusc">
              <a href="#servs1">
                <img
                  src={close}
                  className="img-close"
                  onClick={cerrarVentana}
                  alt="Cerrar Ventana"
                />
              </a>
              <div className="vermasbox">
                <div
                  className="images"
                  style={{ backgroundImage: `url(${fondoyoga})` }}
                >
                  <ul>
                    <li onClick={cambiarFondoYoga}></li>
                    <li onClick={cambiarFondoYoga2}></li>
                    <li onClick={cambiarFondoYoga3}></li>
                  </ul>
                  <a href="#servs1">
                    <img
                      src={close}
                      className="img-close"
                      onClick={cerrarVentana}
                      alt="Cerrar Ventana"
                    />
                  </a>
                </div>
                <div className="vermas-cont">
                  <h1>Yoga</h1>
                  <p>
                    En este espacio sagrado, nuestros instructores certificados
                    te guiarán a través de respiraciones conscientes,
                    movimientos fluidos y la búsqueda de la paz interior. La
                    filosofía del yoga se entrelaza con cada sesión, promoviendo
                    la flexibilidad, el equilibrio y la conexión con tu yo más
                    profundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {servicio === "crossfit" && (
        <>
          <div id="vermas" className="espacio"></div>{" "}
          {/*Div da espacio entre la caja y el nav, para que no se vea encimado*/}
          <div className="vermas">
            <div className="verMasMusc">
              <a href="#servs1">
                <img
                  src={close}
                  className="img-close"
                  onClick={cerrarVentana}
                  alt="Cerrar Ventana"
                />
              </a>
              <div className="vermasbox">
                <div
                  className="images"
                  style={{ backgroundImage: `url(${fondocrossfit})` }}
                >
                  <ul>
                    <li onClick={cambiarFonduCross}></li>
                    <li onClick={cambiarFonduCross2}></li>
                    <li onClick={cambiarFonduCross3}></li>
                  </ul>
                  <a href="#servs1">
                    <img
                      src={close}
                      className="img-close"
                      onClick={cerrarVentana}
                      alt="Cerrar Ventana"
                    />
                  </a>
                </div>
                <div className="vermas-cont">
                  <h1>CrossFit</h1>
                  <p>
                    En la sección de CrossFit, sumérgete en una experiencia
                    única que redefine los límites de tu rendimiento físico y
                    mental. Nuestros programas de CrossFit no solo son
                    entrenamientos, son desafíos que te inspirarán a superar tus
                    propios límites día tras día. Cada sesión está diseñada para
                    construir fuerza, resistencia y agilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Servicios;
