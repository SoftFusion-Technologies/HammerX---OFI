import './App.css'
import Navbar from './components/header/Navbar'
import Hero from './components/hero/Hero'
import Servicios from './components/main/Servicios'
import About from './components/main/About'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <About />
      <Footer />
    </>
  )
}

export default App
