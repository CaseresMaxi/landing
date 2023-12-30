import Xp from "../../components/XP/Xp"
import "./XpSection.scss"


const XpSection = () => {


    return (
        <>
            <div className="xp-section-wrapper">
                <Xp xp={[{
                    title: 'Ingeniero de Software', date: '9/2022 | Hoy', name: 'Pickit', desc: `En Pickit, me ocupé del mantenimiento de la aplicación de back
                office, centrando mis esfuerzos exclusivamente en el desarrollo
                front-end con React. Gracias a mi sólido desempeño, se me
                confió la gestión de un nuevo proyecto que lideré hasta su
                lanzamiento en los mercados de Argentina, México y Colombia. Este proyecto consistió en el desarrollo de una aplicación de
                administración para un sistema de entregas a domicilio, similar
                a Pedidos Ya. Durante esta experiencia, tuve a mi cargo un
                equipo de compañeros y pude centrarme aún más en el
                desarrollo front-end. Además, desempeñé un papel
                fundamental en la creación y la colaboración activa en la
                implementación de una arquitectura de micro front-end para
                los proyectos clave de la empresa. Posteriormente, participé en
                otros proyectos, incluyendo la creación de una librería de
                componentes propia y la definición de estándares de calidad
        para futuros proyectos de la empresa.`,
                    tecs: ["React", "TypeScript"]
                }, {
                    title: 'Ingeniero de Software', date: '9/2022 | Hoy', name: 'Pickit', desc: `En Pickit, me ocupé del mantenimiento de la aplicación de back
                office, centrando mis esfuerzos exclusivamente en el desarrollo
                front-end con React. Gracias a mi sólido desempeño, se me
                confió la gestión de un nuevo proyecto que lideré hasta su
                lanzamiento en los mercados de Argentina, México y Colombia. Este proyecto consistió en el desarrollo de una aplicación de
                administración para un sistema de entregas a domicilio, similar
                a Pedidos Ya. Durante esta experiencia, tuve a mi cargo un
                equipo de compañeros y pude centrarme aún más en el
                desarrollo front-end. Además, desempeñé un papel
                fundamental en la creación y la colaboración activa en la
                implementación de una arquitectura de micro front-end para
                los proyectos clave de la empresa. Posteriormente, participé en
                otros proyectos, incluyendo la creación de una librería de
                componentes propia y la definición de estándares de calidad
        para futuros proyectos de la empresa.`, tecs: []
                }]} />
            </div>

        </>
    )
}

export default XpSection