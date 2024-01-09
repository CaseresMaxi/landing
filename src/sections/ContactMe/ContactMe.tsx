
import { useForm, SubmitHandler } from "react-hook-form"
import "./ContactMe.scss"
import carpiContactme from "../../assets/carpi-contactme.png"



const ContactMe = () => {

    type Inputs = {
        name: string;
        mail: string;
        phone: number;
        message: string
    }


    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)



    return (
        <>
            <div className="cm-section-wrapper">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "80%" }}>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: 140 }}>
                            <h1>Enviame un mail</h1>
                            <h2>lo respondere lo antes posible</h2>
                        </div>
                        <img src={carpiContactme} alt="" />
                    </div>

                    <input style={{ width: "80%" }} defaultValue="Nombre" {...register("name")} />
                    <div style={{ display: "flex", gap: 20, width: "80%", justifyContent: "center" }}>
                        <input defaultValue="Mail" {...register("mail")} />
                        <input defaultValue="Tel." {...register("phone")} />
                    </div>


                    <textarea  {...register("message", { required: true })} />
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}

                    <button type="submit" >Enviar</button>
                </form>
            </div>
        </>
    )
}

export default ContactMe