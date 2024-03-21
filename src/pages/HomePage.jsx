import Hero from "../components/hero/Hero";
import Servicios from "../components/main/Servicios";
import About from "../components/main/About";
import MobileApp from "../components/main/MobileApp";

const HomePage = () => {
  return (
    <>
    <div className='overflow-hidden'>
      <Hero />
      <Servicios />
      <About />
      <MobileApp />
    </div>
    </>
  );
};

export default HomePage;
