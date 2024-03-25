import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import comercio1 from '../../images/marcas/comercio1.png'
import comercio2 from '../../images/marcas/comercio2.png'
import comercio3 from '../../images/marcas/comercio3.png'
import comercio4 from '../../images/marcas/comercio4.png'
import comercio5 from '../../images/marcas/comercio5.png'
import comercio6 from '../../images/marcas/comercio6.png'
import comercio7 from '../../images/marcas/comercio7.png'
import soft from '../../images/marcas/soft.jpeg'

const Marcas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4
        }
      }
    ]
  };

  return (
    <div className="h-12 mt-2 w-5/6 md:w-2/3 lg:w-1/3 flex flex-col justif-between dark:bg-transparent overflow-hidden">
      <Slider className=" " {...settings}>
        <div title="sin página" className="mx-auto">
          <a
            className="cursor-pointer"
            href="https://softfusion.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-10" src={soft} alt="SoftFusion" />
          </a>
        </div>
        <div title="sin página" className="mx-auto">
          <img className="h-6 mt-2" src={comercio1} alt="Arquitectura" />
        </div>
        <div>
          <a
            className="cursor-pointer"
            href="https://gerf.com.ar"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-8 mt-1" src={comercio2} alt="Gerf" />
          </a>
        </div>
        <div>
          <a
            className="cursor-pointer"
            href="https://confiterialaestrella.com"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-6 mt-2" src={comercio3} alt="Laestrella" />
          </a>
        </div>
        <div title="sin página">
          <img className="h-10" src={comercio4} alt="Nutripaz" />
        </div>
        <div title="sin página">
          <img className="h-8" src={comercio5} alt="Zelaya" />
        </div>
        <div title="sin página">
          <img className="h-10" src={comercio6} alt="Rubio" />
        </div>
        <div title="sin página">
          <img className="h-10" src={comercio7} alt="Look fit" />
        </div>
      </Slider>
    </div>
  );
}

export default Marcas;
