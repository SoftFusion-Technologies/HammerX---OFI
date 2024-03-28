import { Link } from "react-router-dom";
import { guionesnar } from "../../images/index";
import "../../styles/main/about.css";


const About = () => {
  return (
    <>
      <section
        id="about"
        className="overflow-hidden h-full bg-white dark:bg-gradient-to-r from-gray-500 to-gray-700 relative"
      >
        <img
          className="w-8 h-80 absolute top-20 left-0 max-sm:hidden"
          src={guionesnar}
          alt="Guiones"
        />
        <img
          className="w-8 h-80 absolute bottom-20 right-0 max-sm:hidden"
          src={guionesnar}
          alt="Guiones"
        />
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-between lg:px-16 bgvsps">
            <div className="w-full px-4 lg:w-6/12 ">
              <div className="max-lg:flex-col flex items-center sm:-mx-4 justify-center max-lg:pt-20 lg:pt-0 ">
                <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col ">
                  <Link to={'/clientes'}>
                    <button
                      data-aos="fade-right"
                      data-aos-duration="1500"
<<<<<<< HEAD
                      className="btn shadow-lg font-messina text-white font-semibold mr-8 "
                    >
                      ¡Quiero Conocerlos!
=======
                      className="btn shadow-lg font-messina text-white font-semibold "
                    >
                      Soy Cliente
>>>>>>> 8af3c6ce4bcbcafc99b09cc71ecad020b8babe8f
                    </button>
                  </Link>
                  <Link to={'/nosotros'}>
                    <button
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      className="btn shadow-lg font-messina text-white font-semibold"
                    >
<<<<<<< HEAD
                      Soy Cliente
=======
                      Quiero Conocerlos
>>>>>>> 8af3c6ce4bcbcafc99b09cc71ecad020b8babe8f
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="my-20 w-full max-md:px-14 md:pl-10 lg:w-1/2 xl:w-5/12"
            >
              <div className="mt-10 lg:mt-0 md:px-10 lg:px-5">
                <span className="block mb-4 text-lg font-messina text-primary dark:text-orange-500">
                  ¿Porqué elegirnos?
                </span>
                <h2 className="mb-5 text-3xl font-bignoodle tracking-wide lg:text-[50px] font-bold text-orange-500 sm:text-[40px]/[48px] dark:text-white">
                  CONOCÉ TODA NUESTRA INFO
                </h2>
                <p className="mb-8 text-base text-body-color dark:text-gray-200">
<<<<<<< HEAD
                  Somos un lugar donde vas a ejercitarte, pero también vas a
                  encontrar un momento para pasarla bien, divertirte, conocerás
                  personas y te sentirás acompañado, así te demostraremos una
                  manera diferente de hacerlo y te ayudaremos a incorporar la
                  actividad física como parte de tu vida y por qué no, a
                  convertirse en el momento que esperas de tu día.
                </p>

                <p className="mb-8 text-base text-body-color dark:text-gray-200">
                  Transformemos juntos el concepto tradicional de un gimnasio y
                  lo convirtamos en un lugar donde no solo se entrena, sino
                  también donde serás feliz.
=======
                  En Hammer, entendemos que dar el primer paso hacia un estilo
                  de vida más saludable puede ser desafiante. Nuestro compromiso
                  va más allá de proporcionarte un lugar para hacer ejercicio
                  estamos aquí para apoyarte en cada etapa de tu viaje de
                  transformación. Desde el momento en que cruzas nuestras
                  puertas, te convertimos en parte de una comunidad dedicada a
                  alcanzar metas y superar límites.
                </p>
{/* 
                <p className="mb-8 text-base text-body-color dark:text-gray-200">
                  Además de nuestras amplias instalaciones y equipos de última
                  generación, en Hammer también ofrecemos una variedad de clases
                  grupales diseñadas para mantener tu entrenamiento fresco y
                  emocionante. Desde clases de cardio y entrenamiento de fuerza
                  hasta yoga y pilates, hay algo para todos los gustos y niveles
                  de condición física.
                </p> */}
                <p className="mb-8 text-base text-body-color dark:text-gray-200">
                  <strong>
                    {' '}
                    Únete a nosotros en Hammer y descubre cómo convertir la
                    actividad física en la mejor parte de tu día.
                  </strong>
>>>>>>> 8af3c6ce4bcbcafc99b09cc71ecad020b8babe8f
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
