

import "./PopUp.scss"
import cm from "../../assets/cm.png"
import { FC, useCallback, } from "react"
import { useStore } from "../../utils/store"
import ContactMe from "../../sections/ContactMe/ContactMe"


const PopUp: FC<unknown> = () => {

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
    // window.onscroll = function () {
    //     setScrol(window.scrollY);


    // };
    // const [scrol, setScrol] = useState(0)

    return (
        <>

            <button className="popup-wrapper" onClick={handleClick} data-testid="popup-test-id">

                <img src={cm} alt="" />

            </button >


            <div className={`modal-container${showContactMe ? " show-modal" : ""}`} onClick={(e) => { e.stopPropagation; handleClose() }} data-testid="modal-container">
                <div className={`modal-wrapper${showContactMe ? " in-modal" : ""}`}><ContactMe /></div>

            </div >

        </>
    )
}



export default PopUp