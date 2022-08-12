import Track from '../services/tracks.service'
import User from '../services/user.service'

const ItemTrack = ({ track, setFrontPage, setPlayMp3, isUserLogged }) => {



    const sendToPlayer = () => {
        setFrontPage(track.album.cover_xl)
        setPlayMp3(track.preview)
    }

    const addFavorite = async() => {
        // console.log("trackkkk : ", track)
        let id_users = await User.getIdUser()
        console.log("el id baby",id_users.data[0].idx);
        let dataFav = {
            title: track.title, 
            album_cover: track.album.cover_xl, 
            preview: track.preview, 
            artist_name: track.artist.name, 
            album_name: track.album.title,
            id_user : id_users.data[0].idx
        }
        Track.addFavorite(dataFav).then(data => {
            console.log(data)
        })
    }

    return (
        <>
            <div className="foxbel__result-item-content" onClick={sendToPlayer}>
                <div className="foxbel__banner-img2">
                    {isUserLogged ?
                        <button onClick={addFavorite} className="foxbel__result-item-button">
                            <i className="fa-solid fa-heart"></i>
                        </button>
                        :
                        <></>
                    }

                    <img
                        src={track.album.cover_xl}
                        alt="Adele"
                    />
                    <i className="fa-solid fa-play"></i>
                </div>
                <div className="foxbel__result-text">
                    <strong>{track.title}</strong>
                    <span>{track.artist.name}</span>
                </div>
            </div>
        </>
    )
}

export default ItemTrack