import React from "react";
import { guionesnar } from "../../images/index";
// import Puntitos from "./puntitos";
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
                <div className="w-full px-3 max-md:px-10 xl:w-1/2 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 lg:flex justify-center items-center lg:flex-col gap-10">
                  <div className="h-80 w-60 mx-auto">
                    <img
                      data-aos="fade-right"
                      data-aos-duration="1500"
                      src="https://www.hammer.ar/image/doschicas.jpeg"
                      alt="img"
                      className="h-full w-full rounded-2xl "
                    />
                  </div>
                  <div className="h-80 w-60 max-lg:mx-auto max-lg:row-span-2">
                    <img
                      data-aos="fade-right"
                      data-aos-duration="2100"
                      src="https://www.hammer.ar/image/senoras.jpeg"
                      alt="img"
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                <div className="h-80 w-60 max-lg:mx-auto lg:hidden">
                    <img
                      data-aos="fade-right"
                      data-aos-duration="1800"
                      src="https://www.hammer.ar/image/slider4.jpg"
                      alt="img"
                      className="h-full w-full rounded-2xl"
                    />
                    {/* <Puntitos /> */}
                  </div>
                </div>
                {/* <div className="h-80 w-5/6">

                </div> */}
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="my-20 w-full max-md:px-14 px-4 lg:w-1/2 xl:w-5/12"
            >
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary dark:text-orange-500">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-orange-500 sm:text-[40px]/[48px] dark:text-white">
                  Make your customers happy by giving services.
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
      </section>
    </>
  );
};

export default About;
