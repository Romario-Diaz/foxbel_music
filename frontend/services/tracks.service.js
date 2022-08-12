import axios from "axios"

import { API } from '../util/consts'

class Tracks {

    getTracks = async() => {
        return await axios.get(`${API}/getPublicTracks`)
    }

    getInfoArtist = async() => {
        return await axios.get(`${API}/getArtistInfo`)
    }

    searchTrack = async(input_search) => {
        return await axios.get(`${API}/searchSong/${input_search}`)
    }

    addFavorite = async(track) => {
        console.log("el favorito que vamos a incluir : ", track)
        return await axios.post(`${API}/addFavoriteTrack`, track)
    }

    getFavoriteTracks = async() => {
        let user = localStorage.getItem("user")
        return await axios.get(`${API}/getFavoriteTracks/${user}`)
    }

}

export default new Tracks()