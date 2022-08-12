import { useState } from "react"

import Users from '../../services/user.service'
import { useRouter } from "next/router";

const Register = () => {

    const [nameUser, setNameUser] = useState("")
    const [lastname, setLastname] = useState("")
    const [cellphoneNumber, setCellphoneNumber] = useState()
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter() 

    // name_user, lastname, cellphone_number, gender, email, password

    const registeduser = (e) => {
        e.preventDefault()
        Users.register({nameUser, lastname, cellphoneNumber, gender, email, password}).then(data => {
            console.log(data)
            Users.getIdUser().then(data => {
                console.log("el susuarioooooooooooo : ", data)
                router.push('/')
            })
            // 
        })
    }

    return (
        <>
            <div className="form_conrainer">
                <div className="form_conrainer_title">
                    <h1>Register</h1>
                </div>

            <div>
                <form className="form" onSubmit={registeduser}>
                    <div className="form-control">
                        <input type="text" placeholder="Nombres"
                        onChange={(e) => setNameUser(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="apellidos"
                        onChange={(e) => setLastname(e.target.value)}/>
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Numero telefonico" 
                        onChange={(e) => setCellphoneNumber(e.target.value)}/>
                    </div>

                    <div className="form-control">
                        <select onChange={(e) => setGender(e.target.value)}>
                            <option value="Undefined">Genero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-control">
                        <input type="password" placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>


                    <input type="submit" className="form-control_button"/>
                </form>

            </div>
            </div>
        </>

    )
}

export default Register