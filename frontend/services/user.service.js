import axios from "axios"

import { API } from '../util/consts'

class Users {

    getUsersData = async () => {
        let user = localStorage.getItem("user")
        console.log("el ")
        if(user === undefined || user === null) {
            let name = ""
            return name
        }else {
            return await axios.get(`${API}/getUsersData/${user}`).then(data => {
                return data
            })
        }
    }

    login = async(credentials) => {
        return await axios.post(`${API}/login`, credentials).then(data => {
            localStorage.setItem("user", data.data[0].id)
            return data
        })
    }

    register = async(dataUser) => {

        if(dataUser.gender == "") {
            dataUser.gender = "Undefined"
        }

        console.log("los datos del usuario:",dataUser)
        return await axios.post(`${API}/register`, dataUser).then(data => {
            console.log("del registro",data)
            return data
        })
    }

    getIdUser = async() => {
        return await axios.get(`${API}/getCurrentId`).then(data => {
            localStorage.setItem("user", data.data[0].idx)
            console.log("el id del usuario que acabo de resistrar : ", data.data[0].idx)
            return data
        })
    }

    isLogged = async() => {
        let user = localStorage.getItem("user")
        console.log("esta logueado ? servicio",user)
        if(user === undefined || user === null) {
            return false
        }else {
            return await axios.get(`${API}/isLogged/${user}`).then(data => {
                console.log("ahora veremos aqui si esta logueado", data)
                return data.data[0].is_logged
            })
        }
    }

    closeSession = async() => {
        let user = localStorage.getItem("user")
        localStorage.removeItem("user")
        return await axios.get(`${API}/closeSession/${user}`)
    }

}

export default new Users()