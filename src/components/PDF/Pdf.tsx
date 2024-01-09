
import { Document, Page, Text } from "@react-pdf/renderer"
import "./PDF.scss"


const Pdf = () => {


    return (

        <article className="pdf-wrapper">
            <Document>
                <Page>
                    <Text>CV</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, rem eligendi eos aut facilis, earum officiis maiores, debitis nobis laborum neque ducimus recusandae cum? Nulla ipsam quia repudiandae numquam quos doloribus reiciendis ea cupiditate. Nisi iste est, vitae delectus sed debitis minus soluta quaerat ea sunt, inventore vero excepturi quo laborum exercitationem alias harum. Nam, nesciunt? In ipsam laudantium necessitatibus amet iste exercitationem voluptatum doloremque incidunt sit, aspernatur dolores dolor, dignissimos suscipit quo at tempore sunt blanditiis eius distinctio perspiciatis nisi. Incidunt quae necessitatibus atque quaerat facere tempora optio labore totam debitis magnam perferendis consectetur ipsum reiciendis eligendi, illo corporis!</Text>
                </Page>
            </Document>


        </article>

    )
}

export default Pdf