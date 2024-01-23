

// import april from "../../assets/april.png"
import carpiProyects from "../../assets/carpi-proyects.png"
import procontancto from "../../assets/procontancto.png"
import april from "../../assets/april.png"
import pickers from "../../assets/pickers.png"
import { defaultTheme } from "../../utils/theme"
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
                        <div>
                            <h1 >Proyectos</h1>
                            <h2 >Alguinos de los principales proyectos donde he colaborado</h2>
                        </div>
                        <img className="proyects-logo" src={carpiProyects} />
                    </div>
                    <div className="proyect-wrapper">
                        <div>
                            <h1 style={{ color: defaultTheme.pickers }}>Pickers</h1>
                            <p>
                                Una aplicación que presta un servicio de distribución para pequeños paquetes de comercio electrónico. Colaboré en el desarrollo desde su concepción como idea hasta la actualidad, donde se encuentra operativa en varios países de la región.
                            </p>
                        </div>
                        {/* <a href="" className="img-container">
                            link
                        </a> */}
                        <img src={pickers} alt="" className="proyect-img" />
                    </div>

                    <div className="proyect-wrapper">
                        <div>
                            <h1>Procontacto Landing page</h1>
                            <p>

                                Colaboré en el diseño e implementación de la página de inicio (landing page), la cual fue desarrollada en ReactJS.
                            </p>
                        </div>

                        <img src={procontancto} alt="" className="proyect-img" />

                    </div>

                    <div className="proyect-wrapper">
                        <div>
                            <h1>
April Experiences Landing Page</h1>
                            <p>
                            Landing page desarrollada con JS, HTML y CSS, orientada fuertemente a un comportamiento responsivo y un diseño llamativo para atraer la mayor cantidad posible de nuevos clientes.                            </p>
                        </div>

                        <img src={april} alt="" className="proyect-img" />

                    </div>



                </div>
            </article>
        </section>
    )
}



export default Proyects