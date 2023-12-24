

import Proyect from "../../components/Proyect/Proyect"
import "./Proyects.scss"
import procontancto from "../../assets/procontancto.png"
import april from "../../assets/april.png"
import escalador from "../../assets/escalador.png"
import carpiProyects from "../../assets/carpi-proyects.png"


const Proyects = () => {


    return (
        <>
            <div className="proyects-section-wrapper">
                <div style={{display:"flex",justifyContent:"center",alignItems:"flex-end"}}>
                    <img src={carpiProyects} alt="" />
                    <h1 className="section-title">Proyectos destacados</h1>
                    {/* <h1 className="border">Proyectos destacados</h1>
                        <h1 className="wave">Proyectos destacados</h1> */}
                </div>

                <Proyect title="Procontacto lading page" body="Una página de destino completa que ofrece la capacidad de enviar correos electrónicos de manera automática para establecer contacto ágil con el cliente, presenta hermosas animaciones y se destaca por su meticulosa atención tanto a la información como al diseño propuesto, además de todas las funcionalidades disponibles." img={procontancto} tecnologis={["ReactJs", "Sass", "Gsap", "I18Next", "TypeScript"]}></Proyect>
                <Proyect title="April Experiences lading page" body="Una página de destino completa que ofrece la capacidad de enviar correos electrónicos de manera automática para establecer contacto ágil con el cliente, presenta hermosas animaciones y se destaca por su meticulosa atención tanto a la información como al diseño propuesto, además de todas las funcionalidades disponibles." img={april} tecnologis={["ReactJs", "Sass", "Gsap", "I18Next", "TypeScript"]}></Proyect>
                {/* <Proyect title="asdas" body="asdasdasdjj asdjoasjdlaskj asdkj alskdjalksjdla asdjalskdjalskjd as" img={april}></Proyect> */}
                {/* <Proyect title="asdas" body="asdasdasdjj asdjoasjdlaskj asdkj alskdjalksjdla asdjalskdjalskjd as" img={escalador}></Proyect> */}

            </div>
        </>
    )
}

export default Proyects