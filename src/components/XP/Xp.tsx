import "./Xp.scss"


const Xp = (props: { xp: { title: string; date: string; name: string; desc: string; tecs: string[] }[] }) => {


    return (
        <>
            <div className="xp-section-wrapper">
                <div className="xp-section-container">
                    {props.xp.map((e) => <div>
                        <div className="title-container">
                            <h1>{e.title} - <strong className={`${e.name}`}>{e.name}</strong></h1>
                            <h2>{e.date}</h2>
                        </div>
                        <p>{e.desc}</p>
                        <div className="tec-container">{e.tecs.map((tec) => <div className="tecnologis-xp">{tec}</div>)}</div>
                    </div>)}

                </div>

            </div>

        </>
    )
}

export default Xp