

import "./Proyect.scss"

const Proyect = (props: { title: string; body: string; img: string; tecnologis?: string[] }) => {


    return (
        <>
            <article className="proyect-wrapper">

                <div className="desctiption-continer">
                    <h1>{props.title}</h1>
                    <p>{props.body}</p>


                    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>{props.tecnologis && props.tecnologis.map((tec) => (<div className="tecnologis">{tec}</div>))}</div>

                </div>
                <img src={props.img} alt="" />


            </article>
        </>
    )
}



export default Proyect