

// import april from "../../assets/april.png"
import carpiProyects from "../../assets/carpi-proyects.png"
import procontancto from "../../assets/procontancto.png"
// import Proyect from "../../components/Proyect/Proyect"
// import "./Proyects.scss"


// const Proyects = () => {


//     return (
//         <>
//             <div className="proyects-section-wrapper">


//                 {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
//                     <img src={carpiProyects} alt="" />
//                     <h1 className="section-title">Proyectos destacados</h1>
//                 </div>

//                 <Proyect title="Procontacto lading page" body="Una página de destino completa que ofrece la capacidad de enviar correos electrónicos de manera automática para establecer contacto ágil con el cliente, presenta hermosas animaciones y se destaca por su meticulosa atención tanto a la información como al diseño propuesto, además de todas las funcionalidades disponibles." img={procontancto} tecnologis={["ReactJs", "Sass", "Gsap", "I18Next", "TypeScript"]}></Proyect>
//                 <Proyect title="April Experiences lading page" body="Una página de destino completa que ofrece la capacidad de enviar correos electrónicos de manera automática para establecer contacto ágil con el cliente, presenta hermosas animaciones y se destaca por su meticulosa atención tanto a la información como al diseño propuesto, además de todas las funcionalidades disponibles." img={april} tecnologis={["ReactJs", "Sass", "Gsap", "I18Next", "TypeScript"]}></Proyect> */}

//             </div>
//         </>
//     )
// }

// export default Proyects

import "./Proyects.scss"

const Proyects = () => {


    return (
        <section>
            <article className="proyects-wrapper">
                <div className="proyects-container">
                    <div className="proyects-title-container">
                        <h1 >Proyectos destacados</h1>
                        <img className="proyects-logo" src={carpiProyects} />
                    </div>
                    <div className="proyect-wrapper">
                        <div>
                            <h1>titulo</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae alias, distinctio illum aut voluptatum? Maxime dolore, officiis, consectetur sequi ratione temporibus voluptatibus nobis asperiores, natus adipisci eveniet aut eos.
                            </p>
                        </div>
                        {/* <a href="" className="img-container">
                            link
                        </a> */}
                        <img src={procontancto} alt="" className="proyect-img" />
                    </div>

                    <div className="proyect-wrapper">
                        <div>
                            <h1>titulo</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae alias, distinctio illum aut voluptatum? Maxime dolore, officiis, consectetur sequi ratione temporibus voluptatibus nobis asperiores, natus adipisci eveniet aut eos.
                            </p>
                        </div>
                        <div className="img-container">
                            <img src={procontancto} alt="" className="proyect-img" />
                        </div>
                    </div>

                    <div className="proyect-wrapper">
                        <div>
                            <h1>titulo</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae alias, distinctio illum aut voluptatum? Maxime dolore, officiis, consectetur sequi ratione temporibus voluptatibus nobis asperiores, natus adipisci eveniet aut eos.
                            </p>
                        </div>
                        <div className="img-container">
                            <img src={procontancto} alt="" className="proyect-img" />
                        </div>
                    </div>



                </div>
            </article>
        </section>
    )
}



export default Proyects