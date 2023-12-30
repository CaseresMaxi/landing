
import { PDFViewer } from "@react-pdf/renderer"
import Pdf from "../../components/PDF/Pdf"
import "./Cv.scss"

const Cv = () => {



    return (
        <>
            <div className="cv-section-wrapper">
                <PDFViewer>
                    <Pdf></Pdf>
                </PDFViewer>


            </div>
        </>
    )
}

export default Cv