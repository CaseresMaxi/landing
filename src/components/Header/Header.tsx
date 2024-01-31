import "./Header.scss"
import cv from "../../assets/cv-icon.svg"
import lk from "../../assets/linkedin-logo.svg"
import { useState } from "react";

const Header = () => {

    window.onscroll = function () {
        setScrol(window.scrollY);


    };
    const [scrol, setScrol] = useState(0)

    return (
        <>
            <div className="header-wrapper" style={{ opacity: (scrol - 100) / 800 }} data-testid="header-id">
                {/* <img src={logo} alt="" className="logo" /> */}
                <ul>
                    {/* <li>Sobre mi</li> */}
                    {/* <li>LinkedIn</li> */}

                    <li><a href="https://drive.google.com/uc?export=download&id=1B1mQYTxR9dLxLd6BpiThS3IH05UTzMs3&cv.pdf" >Mi CV<img src={cv}></img></a></li>
                    <li><a style={{ borderColor: "#0077b5" }} href="https://www.linkedin.com/in/maximiliano-caseres/" target="_blank"><img src={lk}></img></a></li>
                </ul>
            </div >
        </>
    )
}

export default Header