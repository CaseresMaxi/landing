import "./Xp.scss"
// import { Parallax } from "react-scroll-parallax"
import LinkIcon from "../../assets/link-icon.png"


const Xp = (props: { xp: { title: string; date: string; name: string; desc: string; tecs: string[]; link?: string }[] }) => {
    return (
        <>
            <div className="xp-section-wrapper" data-testid="xp-id">
                <div className="xp-section-container">
                    {props.xp.map((e) => <div>
                        <div className="title-container">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <h1>{e.title} - <strong className={`${e.name}`}>{e.name}</strong></h1>
                                {e.link && <a href={e.link} target="_blank"><img src={LinkIcon} alt="" className="link-icon" /></a>}
                            </div>
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