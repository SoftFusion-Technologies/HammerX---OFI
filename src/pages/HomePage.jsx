import Hero from "../components/hero/Hero";
import Servicios from "../components/main/Servicios";
import About from "../components/main/About";
import MobileApp from "../components/main/MobileApp";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Servicios />
      <About />
      <MobileApp />
    </>
  );
};

export default HomePage;
