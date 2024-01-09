

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
                            <p>Desde el inicio de mi viaje en el mundo del desarrollo, he trabajado en una variedad de proyectos que abarcan desde pequeñas aplicaciones empresariales hasta plataformas web complejas. Mi enfoque versátil me ha permitido abordar desafíos desde el front-end hasta el back-end, siempre con un ojo puesto en la experiencia del usuario y la optimización del rendimiento.</p>
                            <p>Me destaco en la creación de interfaces intuitivas y atractivas utilizando las últimas tecnologías del lado del cliente. Mi habilidad para trabajar en entornos de desarrollo front-end, como <span>HTML</span>, <span>CSS</span> y <span>JavaScript</span>, me permite transformar ideas creativas en experiencias visuales impactantes.</p>
                            <p>En el lado del servidor, he trabajado con tecnologías como <span>Node.js</span> y <span>Express</span> para construir APIs eficientes y escalables. Además, tengo experiencia en el diseño y la implementación de bases de datos, utilizando tecnologías como <span>MongoDB</span> y <span>MySQL</span>, para garantizar un almacenamiento de datos sólido y bien estructurado.</p>
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