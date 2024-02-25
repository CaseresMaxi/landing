import Xp from "../../components/XP/Xp"
import "./XpSection.scss"


const XpSection = () => {


    return (
        <>
            <div className="xp-section-wrapper">
                <Xp xp={[{
                    title: 'Ingeniero de Software', date: '9/2022 | 3/2024', name: 'Pickit', desc: `
                    En Pickit, me encargué del mantenimiento de la aplicación de back office, focalizando mis esfuerzos exclusivamente en el desarrollo front-end con React. Gracias a mi sólido desempeño, se me confió la gestión de un nuevo proyecto que lideré hasta su lanzamiento en los mercados de Argentina, México y Colombia. Este proyecto consistió en el desarrollo de una aplicación de administración para un sistema de entregas a domicilio, similar a Pedidos Ya. Durante esta experiencia, tuve a mi cargo un equipo de colegas y pude concentrarme aún más en el desarrollo front-end. Además, desempeñé un papel fundamental en la creación y colaboración activa en la implementación de una arquitectura de micro front-end para los proyectos clave de la empresa. Posteriormente, participé en otros proyectos, incluyendo la creación de una biblioteca de componentes propia y la definición de estándares de calidad para futuros proyectos de la empresa.`,
                    tecs: ["React", "TypeScript", "Sass", "Redux", "Saga", "Story book", "Zustan", "Gsap", "Jira", "Figma"],
                    link: "https://pickit.com.ar/"
                }, {
                    title: 'Full stack web developer', date: '9/2020 | 1/2021', name: 'Virtual Dreams', desc: `Me desempeñé como desarrollador Full Stack en un proyecto de back office. Principalmente, me enfoqué en el front-end (Angular) y posteriormente asumí responsabilidades en el back-end (Node.js) y en la parte móvil (desarrollada en Angular y Electron). Colaboré con los analistas y trabajé en estrecha colaboración con el cliente para establecer objetivos y plazos de entrega.`, tecs: ["Angular", "Javascript", "Sass", "Electron", "Github", "SQL", "Node",], link: "https://virtualdreams.com.ar/"
                }]} />
            </div>

        </>
    )
}

export default XpSection