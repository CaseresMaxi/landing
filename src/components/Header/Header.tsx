import "./Header.scss"
import cv from "../../assets/cv-icon.svg"
import lk from "../../assets/linkedin-logo.svg"
import logo from "../../assets/M-logo.png"

const Header = () => {


    return (
        <>
            <div className="header-wrapper">
                {/* <img src={logo} alt="" className="logo" /> */}
                <ul>
                    {/* <li>Sobre mi</li> */}
                    {/* <li>LinkedIn</li> */}
                    <li><a href="https://drive.google.com/uc?export=download&id=1sjxdZytVZ3sySIuBIZayKzbkZjuZtPEe&cv.pdf">Mi CV<img src={cv}></img></a></li>
                    <li><a style={{ borderColor: "#0077b5" }} href="https://www.linkedin.com/in/maximiliano-caseres/" target="_blank"><img src={lk}></img></a></li>
                </ul>
            </div>
        </>
    )
}

export default Header