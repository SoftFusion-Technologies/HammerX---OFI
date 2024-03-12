import "../styles/aboutUs/volver.css";
import "../styles/aboutUs/botones.css";

const AboutUs = () => {
  return (
    <div className="w-full pt-16">
      <header className="w-full bg-orange-500">
        <div className="pl-10 pt-5 max-sm:pl-2">
          <a href="/">
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
        <h1 className="text-white text-[50px] text-center font-bignoodle ">
          Quiero Conocerlos
        </h1>
      </header>

      <div className="h-[18rem] bg-gradient-to-b from-orange-500 to-[#fc4b08]">
        <div className="pt-20 max-sm:pt-16 flex justify-evenly max-sm:flex-col">

          <button className="btns font-messina font-semibold max-sm:mb-5 max-sm:mx-auto">
            <a href="">¿Quienes Somos?</a>
          </button>

          <button className="btns font-messina font-semibold max-sm:mx-auto">
            <a href="">Nuestros Valores</a>
          </button>

        </div>
      </div>

    </div>
  );
};

export default AboutUs;
