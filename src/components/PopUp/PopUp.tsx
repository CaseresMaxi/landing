

import "./PopUp.scss"
import cm from "../../assets/cm.png"
import { useCallback } from "react"
import { useStore } from "../../utils/store"
import ContactMe from "../../sections/ContactMe/ContactMe"


const PopUp = () => {

    const { showContactMe, toggleShowContactMe } = useStore()

    const handleClick = useCallback(
        () => {
            toggleShowContactMe()
        },
        [toggleShowContactMe],
    )

    const handleClose = useCallback(
        () => {
            toggleShowContactMe()
        },
        [toggleShowContactMe],
    )


    return (
        <>

            <button className="popup-wrapper" onClick={handleClick}>

                <img src={cm} alt="" />

            </button >


            <div className={`modal-container ${showContactMe && "show-modal"}`} onClick={(e) => { e.stopPropagation; handleClose() }}>
                <div className={`modal-wrapper ${showContactMe && "in-modal"}`}><ContactMe /></div>

            </div >

        </>
    )
}



export default PopUp