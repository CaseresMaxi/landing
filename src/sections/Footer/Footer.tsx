
import carpiAbogado from "../../assets/carpi-abogado.png"
import "./Footer.scss"

const Footer = () => {


    return (
        <>
            <div className="footer-section-wrapper">
                <div>
                    {/* <ContactMe /> */}
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