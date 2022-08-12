
import { useState } from "react"

import Users from '../../services/user.service'
import { useRouter } from "next/router";


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()

    const loginUser = (e) => {
        e.preventDefault()
        Users.login({ email, password }).then(data => {
            console.log("respuesta del login", data)

            router.push('/')
        })
    }

    return (
        <>
            <div className="form_conrainer">
                <div className="form_conrainer_title">
                    <h1>Login</h1>
                </div>
                

                <div>
                    <form className="form" onSubmit={loginUser}>
                        <div className="form-control">
                            {/* <label>Email</label> */}
                            <input type="text" placeholder="Username"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-control">
                            {/* <label>Contraseña</label> */}
                            <input type="password" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>


                        <input type="submit" className="form-control_button"/>
                    </form>

                </div>
            </div>
        </>

    )
}

export default Login