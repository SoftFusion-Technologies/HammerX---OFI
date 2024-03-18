import "../styles/ourTeam/cards.css";
import "../styles/aboutUs/volver.css";
import "../styles/ourTeam/background.css"
import { guionesnar } from "../images/index"

const Cards = () => {
  return (
    <div className="w-full h-contain bgfqs">
      <div className="mx-auto pt-16">
        <div className="pl-4 pt-5 max-sm:pl-2">
          <a href="/nosotros">
            <button class="button">
              <div class="button-box">
                <span class="button-elem">
                  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
                <span class="button-elem">
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
              <p>¿Quiénes Somos?</p>
              <p className="small">
                Somos un lugar de interacción social, entretenimiento y
                entrenamiento. Nos encontramos desde 2018 trabajando y
                capacitándonos día a día como promotores de salud y del
                bienestar para unir a la mayor cantidad de personas como vos, en
                este estilo de vida que tanto nos apasiona y brindando el mejor
                servicio posible para que puedan entrenar y alcanzar sus
                objetivos. Buscamos ser un lugar dinámico y motivante, en donde
                la energía desborde por todos los lados, invite a realizar la
                actividad y a divertirse.
              </p>
              <div className="go-corner" href="#">
                <div className="go-arrow">🤔</div>
              </div>
            </div>
          </div>

          <div className="card flex justify-end">
            <div className="card1 right-bg max-md:max-w-full">
              <p>¿Nuéstro Secreto?</p>
              <p className="small">
                Ponemos nuestro foco de atención en tus necesidades, en lo que
                te gustaría convertirte y en cómo te gustaría que transitemos
                ese camino hacia tus objetivos, haciéndolo más divertido y
                entretenido para que puedas disfrutarlo y sientas que venir a
                entrenar en el mejor momento de tu día.
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
                Contamos con muchas actividades diferentes para que elijas, con
                nuestro asesoramiento, la más adecuada para vos, ya sean de
                carácter grupal o entrenamiento individual, siempre guiados por
                instructores y coaches capacitados, por lo que no tenes que
                preocuparte por si es tu primera vez entrenando, por tu edad o
                por tu experiencia. Todo aquel que nos elija para alcanzar sus
                objetivos y respete a los demás es bienvenido. Aqui no juzgamos
                y no existen miradas que desaprueben. La actividad física es
                para todos y HAMMER es para todos. Además te demostraremos que
                entrenar es mucho más sencillo y entretenido de lo que parece.
              </p>
              <div className="go-corner" href="#">
                <div className="go-arrow">😎</div>
              </div>
            </div>
          </div>

          <div className="card flex justify-end">
            <div className="card1 right-bg max-md:max-w-full">
              <p>¿Nuestro Objetivo?</p>
              <p className="small">
                Lograr cambiar tus hábitos, que te ayudaran a mejorar tu salud
                físicamente y mentalmente, lograr que te conviertas en eso que
                siempre quisiste ser, te diviertas y disfrutes el proceso.
                Conocerás a muchas personas, crearás vínculos y compartirás la
                pasión por la actividad física con tus compañeros y la emoción
                de ir notando tus cambios y resultados.
              </p>
              <div className="go-corner" href="#">
                <div className="go-arrow">🤩</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
