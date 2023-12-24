
import './App.scss'
import Header from './components/Header/Header'
import AboutMe from './sections/AboutMe/AboutMe'
import Footer from './sections/Footer/Footer'
import Home from './sections/Home/Home'
import Proyects from './sections/Proyects/Proyects'

function App() {


  return (
    <>
      <Header />
      <section><Home /></section>
      <section><AboutMe /></section>
      <section><Proyects /></section>
      <section><Footer /></section>
    </>
  )
}

export default App
