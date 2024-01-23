

import angular from "../../assets/angular.png"
import c from "../../assets/c++.png"
import carpiMail from "../../assets/carpi-mail.png"
import java from "../../assets/java.svg"
import js from "../../assets/js.png"
import mongo from "../../assets/mongo.png"
import node from "../../assets/node.png"
import python from "../../assets/python.png"
import react from "../../assets/react.png"
import sass from "../../assets/sass.png"
import sql from "../../assets/sql.png"
import styled from "../../assets/styled.svg"
import typescript from "../../assets/typescript.png"
import vite from "../../assets/vite.svg"
import Logo from "../../components/Logo/Logo"
import "./AboutMe.scss"


const AboutMe = () => {
    // const aboutRef = useRef<LegacyRef<HTMLDivElement>>();
    // const [hasAppeared, setHasAppeared] = useState(false);

    // useEffect(() => {
    //     const options = {
    //         root: null, // use the viewport as the root
    //         rootMargin: "0px", // no margin
    //         threshold: 0.5, // 50% of the element must be visible
    //     };

    //     const handleIntersection = (entries: unknown[]) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting && !hasAppeared) {
    //                 // Ejecutar la función cuando el componente aparece en pantalla
    //                 handleOnAppear();
    //                 // Actualizar el estado para evitar que la función se ejecute repetidamente
    //                 setHasAppeared(true);
    //             }
    //         });
    //     };

    //     const observer = new IntersectionObserver(handleIntersection, options);
    //     if (aboutRef.current) {
    //         observer.observe(aboutRef.current);
    //     }

    //     // Limpiar el observer cuando el componente se desmonta
    //     return () => {
    //         observer.disconnect();
    //     };
    // }, [aboutRef, hasAppeared]);

    // const handleOnAppear = () => {
    //     if (aboutRef.current) {
    //         const childrenArray = Array.from(aboutRef.current.children);

    //         childrenArray.map((child, i) => {
    //             setTimeout(() => {
    //                 child.classList.add("scale-up-center");

    //             }, 100 * i);
    //         })
    //     }


    // };

    return (
        <>
            <article className="about-wrapper" >
                <div className="about-containre">
                    <div className="about-content">
                        <div className="about-tile-conatiner">
                            <h1 >Sobre mi</h1>
                            <img className="about-logo" src={carpiMail}>
                            </img>
                        </div>
                        <div className="about-content-container">
                            <p>Soy un Desarrollador Full Stack con experiencia destacada en proyectos de back office y desarrollo integral de aplicaciones web. En Virtual Dreams, me especialicé en front-end (<span>Node.js</span>) y luego amplié mis habilidades al back-end (<span>Node.js</span>) y desarrollo móvil (<span>Angular</span>, <span>Electron</span>). En Pickit, lideré el mantenimiento del back office y el desarrollo front-end (<span>React</span>), destacándome en el lanzamiento exitoso de un proyecto regional para entregas a domicilio. Mi liderazgo incluyó la creación de arquitecturas innovadoras y la definición de estándares de calidad para futuros proyectos. Estoy emocionado por aportar mi experiencia a nuevos desafíos.</p>
                        </div>

                    </div>
                    <div className="skills-cotnainer">
                        <h1>Skills</h1>
                        <div className="logos-container">
                            <Logo url={react}></Logo>
                            <Logo url={angular}></Logo>
                            <Logo url={typescript}></Logo>
                            <Logo url={sass}></Logo>
                            <Logo url={vite}></Logo>
                            <Logo url={c}></Logo>
                            <Logo url={styled}></Logo>
                            <Logo url={sql}></Logo>
                            <Logo url={mongo}></Logo>
                            <Logo url={node}></Logo>
                            <Logo url={js}></Logo>
                            <Logo url={python}></Logo>
                            <Logo url={java}></Logo>

                        </div>

                    </div>
                </div>
            </article>
        </>
    )
}

export default AboutMe