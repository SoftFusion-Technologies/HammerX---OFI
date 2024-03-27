import { useEffect } from 'react';
import Navbar from '../../components/header/Navbar';
import "../../styles/aboutUs/volver.css";
import "../../styles/aboutUs/botones.css";
import "../../styles/aboutUs/background.css";

const AboutUs = () => {

  useEffect(() => {
    document.title = 'Quiero Conocerlos';
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full pt-16 bg-gradient-to-b from-orange-500 to-[#fc4b08]">
        <div className="h-contain bgl">
          <header className="w-full">
            <div className="pl-10 pt-5 max-sm:pl-2">
              <a href="/">
                <button className="button">
                  <div className="button-box">
                    <span className="button-elem">
                      <svg
                        viewBox="0 0 46 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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

            <h1 className="text-white max-md:text-[40px] text-[50px] text-center font-bignoodle ">
              Quiero Conocerlos
            </h1>
          </header>

          <div className="h-[18rem] ">
            <div className="pt-20 max-sm:pt-16 flex justify-evenly max-sm:flex-col">
              <a
                href="/nosotros/quienessomos"
                className="max-sm:mb-5 max-sm:mx-auto"
              >
                <button className="btns font-messina font-semibold ">
                  ¿Quienes Somos?
                </button>
              </a>

              <a
                href="/nosotros/nuestrosvalores"
                className="max-sm:mb-5 max-sm:mx-auto"
              >
                <button className="btns font-messina font-semibold ">
                  Nuestros Valores
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
