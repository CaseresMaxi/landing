import "./Logo.scss"

const Logo = (props: { url: string }) => {
    return (
        <>
            <div className="logo-wrapper">
                <img src={props.url} alt=""/>
            </div>
        </>
    )
}

export default Logo