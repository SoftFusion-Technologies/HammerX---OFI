import { guionesnar } from "../../images/index";
import "../../styles/main/about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="overflow-hidden h-full bg-white dark:bg-gradient-to-r from-gray-500 to-gray-700 relative"
      >
        <img
          className="w-8 h-80 absolute top-20 left-0"
          src={guionesnar}
          alt="Guiones"
        />
        <img
          className="w-8 h-80 absolute bottom-20 right-0"
          src={guionesnar}
          alt="Guiones"
        />
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap items-center justify-between lg:px-24">
            <div className="w-full px-4 lg:w-6/12">
              <div className="max-lg:flex-col flex items-center sm:-mx-4 justify-center">
                <div className="grid grid-cols-2">
                  <a href="">
                    <button className="btn bg-orange-500 shadow-orange-500 shadow-lg font-messina text-white font-semibold">
                      Soy Cliente
                    </button>
                  </a>
                  <a href="">
                    <button className="btn bg-orange-500 shadow-orange-500 shadow-lg font-messina text-white font-semibold">
                      Quiero Conocerlos
                    </button>
                  </a>

                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="my-20 w-full max-md:px-14 px-4 lg:w-1/2 xl:w-5/12"
            >
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-messina text-primary dark:text-orange-500">
                  ¿Porqué elegirnos?
                </span>
                <h2 className="mb-5 text-3xl font-bignoodle tracking-wide lg:text-[50px] font-bold text-orange-500 sm:text-[40px]/[48px] dark:text-white">
                  CONOCE TODA NUESTRA INFO
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
                <div className="flex gap-5">
                  <a
                    href="https://facebook.com"
                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-orange-500 hover:bg-opacity-80"
                  >
                    Get Started
                  </a>
                  {/* <Link to={"/gallery"}>
                    <a
                      href="https://facebook.com"
                      className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-orange-500 hover:bg-opacity-80"
                    >
                      Gallery
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default About;
