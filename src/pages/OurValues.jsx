import React, { useState } from "react";
import "../styles/ourValues/background.css";
import "../styles/ourValues/cards.css";

const OurValues = () => {
  const [hoveredTitle, setHoveredTitle] = useState("");
  const [hoveredDescription, setHoveredDescription] = useState("");

  let timeoutId;

  const handleHover = (title, description) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setHoveredTitle(title);
      setHoveredDescription(description);
    }, 100); // Retardo de 100 milisegundos
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setHoveredTitle("");
    setHoveredDescription("");
  };

  return (
    <div className="h-screen w-full bgnv flex flex-col">
      <div className="pt-16 flex-grow">
        <div className="pt-2 pl-5 max-sm:pl-2">
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

        <div className="w-full flex justify-center items-center">
          <div className="letters w-1/3  h-contain flex flex-col items-center">
            <div className="letter py-5 px-10  bg-black transition text-white hover:bg-white hover:transition hover:duration-200 hover:ease-in-out rounded-lg hover:text-[#fc4b08]">
              <p>

                <span
                  onMouseEnter={() =>
                    handleHover(
                      "HONESTIDAD:",
                      "Transparenca al 100%"
                    ) 
                  }
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer "
                >
                 H
                </span>
              </p>
              <p>
                <span
                  onMouseEnter={() =>
                    handleHover(
                      "ACTITUD:",
                      "Actitud alegre creando un ambiente que desborde de energías positivas."
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer"
                >
                  A
                </span>
              </p>
              <p>
                <span
                  onMouseEnter={() =>
                    handleHover(
                      "MOTIVACIÓN:",
                      "Para un aprendizaje y mejora continua de nuestros servicios."
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer"
                >
                  M
                </span>
              </p>
              <p>
                <span
                  onMouseEnter={() =>
                    handleHover(
                      "MORAL:",
                      "Actuar siempre con buenas intenciones."
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer"
                >
                  M
                </span>
              </p>
              <p>
                <span
                  onMouseEnter={() =>
                    handleHover(
                      "EMPATIA:",
                      "Para conectar con nuestros socios y entender las diferentes situaciones particulares que vive cada uno."
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer"
                >
                  E
                </span>
              </p>
              <p>
                <span
                  onMouseEnter={() =>
                    handleHover(
                      "RESPONSABILIDAD:",
                      "Responsabilidad y respeto a todos por igual, sin distinciones, creando un ambiente inclusivo."
                    )
                  }
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer"
                >
                  R
                </span>
              </p>
            </div>
          </div>
          <div className="w-2/3">
            <div
              className="w-1/2 ml-10 max-h-full"
              style={{
                opacity: hoveredTitle ? 1 : 0,
                transition: "opacity 0.5s",
              }}
            >
              <div className="h-[200px] text-center bg-white border  border-orange-500 rounded-xl py-6 px-5" >
              <h1 className="font-bignoodle text-[40px]">
                  <span style={{ color: "#fc4b08" }}>{hoveredTitle[0]}</span>
                  {hoveredTitle.slice(1)}
                </h1>
                {hoveredDescription && <p className="font-messina text-[20px] text-[#666]">{hoveredDescription}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
