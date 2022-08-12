import { useEffect, useState } from "react";

import ListTracks from "../../components/ListTracks";
import Metadata from "../../components/Metadata";
import Player from "../../components/Player";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";

import Users from "../../services/user.service";

import { useRouter } from "next/router";
import Tracks from "../../services/tracks.service";

const Favorites = () => {

    const [tracks, setTracks] = useState([])
    const [artist, setArtist] = useState({})

    const [playMp3, setPlayMp3] = useState("")
    const [frontPage, setFrontPage] = useState("")

    const [isUserLogged, setIsUserLogged] = useState(true)
    const [userData, setUserData] = useState()

    const router = useRouter() 

    useEffect(() => {
        getDataUsers();
        getFavorites();
    },[])

    const getFavorites = () => {
        Tracks.getFavoriteTracks().then(data => {
            console.log("mis canciones favoritas : ", data)
        })
    }

    const getDataUsers = () => {
        Users.getUsersData().then(data => {
            console.log("los usuarios dataaaaaaaaaaa : ", data)
            setUserData(data.data[0])
        })
    }
    return (
        <>

            <Metadata />
            <div className="foxbel">
                <Sidebar
                    isUserLogged={isUserLogged}
                />
                <main className="foxbel__main">
                    {userData ?
                        <Search
                            setTracks={setTracks}
                            isUserLogged={isUserLogged}
                            setIsUserLogged={setIsUserLogged}
                            userData={userData}
                        />
                        :
                        <></>
                    }

                    <div className="foxbel__results">
                        <h5>Resultados</h5>
                        {tracks.length > 0 ? <ListTracks
                            tracks={tracks}
                            setFrontPage={setFrontPage}
                            setPlayMp3={setPlayMp3}
                            isUserLogged={isUserLogged} />

                            : <></>}

                    </div>
                </main>

                <Player
                    frontPage={frontPage}
                    playMp3={playMp3}
                />
            </div>
        </>
    )
}

export default Favorites