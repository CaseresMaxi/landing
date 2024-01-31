
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.scss'
import Header from './components/Header/Header'
import { ParticlesB } from './components/ParticlesB/ParticlesB'
// import PopUp from './components/PopUp/PopUp'
import AboutMe from './sections/AboutMe/AboutMe'
// import ContactMe from './sections/ContactMe/ContactMe'
// import Cv from './sections/Cv/Cv'
import Footer from './sections/Footer/Footer'
import Home from './sections/Home/Home'
import Proyects from './sections/Proyects/Proyects'
// import ParticlesB from "./components/ParticlesB/ParticlesB"
import XpSection from './sections/XpSection/XpSection'

function App() {
  // const { ref } = useParallax<HTMLDivElement>({ onProgress: () => console.log("pepe") });

  return (
    <ParallaxProvider>
      <div className='slider-thumb' >

        <ParticlesB />
        <Header />
        {/* <PopUp /> */}
        <section><Home /></section>
        <section><Proyects /></section>
        {/* <section><ContactMe /></section> */}
        <section><AboutMe /></section>
        <section><XpSection /></section>
        {/* <section><Cv /></section> */}
        <section><Footer /></section>
      </div>
    </ParallaxProvider>
  )
}

export default App
