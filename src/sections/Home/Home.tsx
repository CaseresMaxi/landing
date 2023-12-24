

import "./Home.scss"
import capi from "../../assets/carpi.png"

const Home = () => {


  return (
    <>
      <div className="home-section-wrapper">
        <div className="content-container">
          <h1>
            Maximiliano F<span>.</span> Caseres
          </h1>
          <h2>Programdor Full-Stack <span>{`</>`}</span></h2>
          <h3>¡Hola! Soy <span>Maxi</span>, un programador full stack apasionado por la creación de aplicaciones web elegantes y eficientes. Con experiencia tanto en el desarrollo front-end como en el back-end, me especializo en la construcción de interfaces intuitivas y en la creación de APIs sólidas. Mi enfoque versátil y mi compromiso con el aprendizaje continuo me han permitido trabajar en diversos proyectos, siempre con un ojo en la optimización del rendimiento. Creo en la importancia de la colaboración y la comunicación efectiva. ¡Estoy emocionado por contribuir al éxito de tu próximo proyecto!</h3>
        </div>
        <img src={capi}></img>
      </div>
    </>
  )
}

export default Home