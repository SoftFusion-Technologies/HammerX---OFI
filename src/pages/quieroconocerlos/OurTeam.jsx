import { useEffect } from 'react';
import Navbar from '../../components/header/Navbar';
import "../../styles/ourTeam/cards.css";
import "../../styles/aboutUs/volver.css";
import "../../styles/ourTeam/background.css"
import { guionesnar } from "../../images/index"

const Cards = () => {
  useEffect(() => {
    document.title = 'Quiénes Somos';
  }, []);


  return (
    <>
      <Navbar />
      <div className="w-full h-contain bgfqs">
        <div className="mx-auto pt-16">
          <div className="pl-4 pt-5 max-sm:pl-2">
            <a href="/nosotros">
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
            </a>
          </div>

          {/* <img
          className="w-8 h-80 absolute top-40 left-0 max-sm:hidden"
          src={"https://www.hammer.ar/image/guiones1.png"}
          alt="Guiones"
        />
        <img
          className="w-8 h-80 absolute -bottom-80 right-0 max-sm:hidden"
          src={"https://www.hammer.ar/image/guiones1.png"}
          alt="Guiones"
        /> */}

          <div className="w-11/12 mx-auto pb-10" id="card-container">
            <div className="card">
              <div className="card1 max-md:max-w-full">
                <p>MISIÓN</p>
                <p className="small">
                  HAMMER es un centro social de entrenamiento y entretenimiento
                  que brinda calidad en su servicio. Somos un lugar donde las
                  personas hacen ejercicio, pero también encuentran un momento
                  para pasarla bien, divertirse, generar vínculos y sentirse
                  acompañados, mostrando una manera diferente de hacerlo, así
                  las ayudamos a incorporar la actividad física como parte de su
                  vida y porque no, a que se convierta en el momento que esperan
                  de su día.
                </p>
                <div className="go-corner" href="#">
                  <div className="go-arrow">🤔</div>
                </div>
              </div>
            </div>

            <div className="card flex justify-end">
              <div className="card1 right-bg max-md:max-w-full">
                <p>VISIÓN</p>
                <p className="small">
                  Buscamos transformar el concepto tradicional de un gimnasio y
                  convertirlo en un lugar donde no solo se entrena y mejorar la
                  salud física, sino también demostrar que puede ser un lugar
                  donde se la pasa bien, se viven y se experimentan sensaciones
                  positivas. De esta manera aspiramos a combatir el
                  sedentarismo, involucrando a cada vez más personas dentro de
                  este estilo de vida.
                </p>
                <div className="go-corner" href="#">
                  <div className="go-arrow">🤫</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card1 max-md:max-w-full">
                <p>¿Cómo lo hacemos?</p>
                <p className="small">
                  Contamos con muchas actividades diferentes para que elijas,
                  con nuestro asesoramiento, la más adecuada para vos, ya sean
                  de carácter grupal o entrenamiento individual, siempre guiados
                  por instructores y coaches capacitados, por lo que no tenés
                  que preocuparte por si es tu primera vez entrenando, por tu
                  edad o por tu experiencia. Todo aquel que nos elija para
                  alcanzar sus objetivos y respete a los demás es bienvenido.
                  Aquí no juzgamos y no existen miradas que desaprueben. La
                  actividad física es para todos y HAMMER es para todos. Además
                  te demostraremos que entrenar es mucho más sencillo y
                  entretenido de lo que parece.
                </p>
                <div className="go-corner" href="#">
                  <div className="go-arrow">😎</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
