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
                  <a href="/clientes" className="max-sm:mx-auto max-sm:mb-5 ">
                    <button className="btn shadow-lg font-messina text-white font-semibold ">
                      Soy Cliente
                    </button>
                  </a>
                  <a href="/nosotros" className="max-sm:mx-auto">
                    <button className="btn shadow-lg font-messina text-white font-semibold">
                      Quiero Conocerlos
                    </button>
                  </a>
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
                <p className="mb-5 text-base text-body-color dark:text-gray-200">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-gray-200">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default About;
