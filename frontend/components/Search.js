import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Tracks from '../services/tracks.service'
import Users from "../services/user.service";


const Search = ({setTracks, isUserLogged, setIsUserLogged, userData}) => {

    const [searchText, setSearchText] = useState()
    
    const router = useRouter()   

    const searchResults = () => {
        if(searchText !== "") {
            router.push({search: `?search=${searchText}`})
            Tracks.searchTrack(searchText).then(data => {
                setTracks(data.data)
            })
        }
    }

    const keyWatch = (e) => {
        if (e.key === 'Enter') {
            searchResults();
        }
    }

    const closeSession = () => {
        Users.closeSession().then(data => {
            console.log("sesion terminada", data)
            setIsUserLogged(false)
        })
    }

    const gotoInitSession = () => {
        router.push('/login')
    }

    const gotoRegister = () => {
        router.push('/register')
    }

    return (
        <>
            <div className="foxbel__search">
                <div>
                    <input type="text" placeholder="Buscar" 
                        onKeyDown={keyWatch}
                        onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="foxbel__search-button" onClick={searchResults}>Buscar</button>
                </div>

                {isUserLogged ?
                    <div>
                        <i className="fa fa-user"></i>
                        <a><span>{userData.users_name}</span></a>
                        <a onClick={closeSession}><span>Cerrar Sesion</span></a>
                    </div>
                   :
                    <div className="foxbel__search_login" buttons>
                        <a onClick={gotoInitSession}>Inicia Sesion</a>
                        <a onClick={gotoRegister}>Registrate</a>
                    </div> 
                }


            </div>
        </>
    )
}

export default Search