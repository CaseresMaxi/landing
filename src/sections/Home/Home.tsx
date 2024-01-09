

import "./Home.scss"
import capi from "../../assets/carpi.png"

const Home = () => {


  return (
    <>
      <div className="home-section-wrapper">
        <img src={capi}></img>
        <div className="content-container">
          <h1>
            Maximiliano F<span>.</span> Caseres
          </h1>
          <h2>Programdor Full-Stack <span>{`</>`}</span></h2>
          <h3>¡Hola! Soy <span>Maxi</span>, un programador full stack apasionado por la creación de aplicaciones web elegantes y eficientes.</h3>
        </div>

      </div>
    </>
  )
}

export default Home