
import './App.scss'
import Header from './components/Header/Header'
import AboutMe from './sections/AboutMe/AboutMe'
// import Cv from './sections/Cv/Cv'
import Footer from './sections/Footer/Footer'
import Home from './sections/Home/Home'
import Proyects from './sections/Proyects/Proyects'
import XpSection from './sections/XpSection/XpSection'

function App() {


  return (
    <div className='slider-thumb'>
      <Header />
      <section><Home /></section>
      <section><AboutMe /></section>
      <section><XpSection /></section>
      <section><Proyects /></section>
      {/* <section><Cv /></section> */}
      <section><Footer /></section>

    </div>
  )
}

export default App
