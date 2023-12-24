
import "./Footer.scss"
import carpiAbogado from "../../assets/carpi-abogado.png"
import ContactMe from "../../components/ContactMe/ContactMe"

const Footer = () => {


    return (
        <>
            <div className="footer-section-wrapper">
                <div>
                    <ContactMe />
                </div>
                <div className="reserved">
                    <h1>© 2024 Maximilaino F. Caseres Todos los derechos reservados</h1>
                    <img src={carpiAbogado} />
                </div>
            </div>
        </>
    )
}

export default Footer