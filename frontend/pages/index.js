import { useEffect, useState } from "react";
import Infocard from "../components/Infocard";
import ListTracks from "../components/ListTracks";
import Metadata from "../components/Metadata";
import Player from "../components/Player";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";

import Tracks from '../services/tracks.service'
import Users from "../services/user.service";

import { useRouter } from "next/router";
 

const Index = () => {

    const [tracks, setTracks] = useState([])
    const [artist, setArtist] = useState({})

    const [playMp3, setPlayMp3] = useState("")
    const [frontPage, setFrontPage] = useState("")

    const [isUserLogged, setIsUserLogged] = useState(false)
    const [userData, setUserData] = useState()

    const router = useRouter() 

    useEffect(() => {
        isLogged();
        getTracks();
        getInfoArtist();
        getDataUsers();
        if(router.isReady) {
            console.log(router.query)
        }
    },[router.query])

    const getDataUsers = () => {
        Users.getUsersData().then(data => {
            console.log("los usuarios dataaaaaaaaaaa : ", data)
            setUserData(data.data[0])
        })
    }

    const isLogged = () => {
        Users.isLogged().then(data => {
            console.log("esta logueado ? ", data)
            setIsUserLogged(data)
        })
    }

    const getTracks = () => {
        if(Object.entries(router.query).length === 0) {
            // setIsSearched(true)
            console.log("entra aqui para traer los de eminem")
            Tracks.getTracks().then(data => {
                setTracks(data.data.data)
            })
        }else {
            console.log("entra para traer los de el query")
            Tracks.searchTrack(router.query.search).then(data => {
                setTracks(data.data)
            })
        }

    }
    const getInfoArtist = () => {
        Tracks.getInfoArtist().then(data => {
            setArtist(data.data)
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
                            setTracks = {setTracks}
                            isUserLogged={isUserLogged}
                            setIsUserLogged={setIsUserLogged}
                            userData={userData}
                        />
                        :
<></>
                    }


                    {Object.entries(router.query).length === 0 ? <Infocard  artist = {artist} /> : <></> }
                    
                    <div className="foxbel__results">
                        <h5>Resultados</h5>   
                        {tracks.length > 0 ? <ListTracks 
                            tracks = {tracks} 
                            setFrontPage = {setFrontPage}
                            setPlayMp3 = {setPlayMp3}
                            isUserLogged = {isUserLogged}/> 
                            
                        : <></> }

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

export default Index;

export async function getServerSideProps(context) {
    return {
        props: {}
    }
}
