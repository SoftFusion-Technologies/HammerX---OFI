import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      
        <Slider className=' ' {...settings}>
        <div  title="sin página" className='mx-auto'>
          <img className="h-6" src="https://www.hammer.ar/image/comercio1.png" alt="" />
        </div>
        <div >
          <a className="cursor-pointer" href="https://gerf.com.ar" target="_blank" rel="noreferrer">
            <img className="h-8 w-auto" src="https://www.hammer.ar/image/comercio2.png" alt="" />
          </a>
        </div>
        <div >
          <a className="cursor-pointer" href="https://confiterialaestrella.com" target="_blank" rel="noreferrer">
            <img className="h-6 w-auto" src="https://www.hammer.ar/image/comercio3.png" alt="" />
          </a>
        </div>
        <div  title="sin página">
          <img className="h-10 w-auto" src="https://www.hammer.ar/image/comercio4.png" alt="" />
        </div>
        <div  title="sin página">
          <img className="h-8 w-auto" src="https://www.hammer.ar/image/comercio5.png" alt="" />
        </div>
        <div  title="sin página">
          <img className="h-10 w-auto " src="https://www.hammer.ar/image/comercio6.png" alt="" />
        </div>
        <div  title="sin página">
          <img className="h-10  w-auto" src="https://www.hammer.ar/image/comercio7.png" alt="" />
        </div>
      </Slider>

      
    </div>
  );
}

export default Marcas;
