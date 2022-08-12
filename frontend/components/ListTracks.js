import ItemTrack from "./ItemTrack"

const ListTracks = ({tracks, setFrontPage, setPlayMp3, isUserLogged}) => {
    console.log(tracks)
    return (
        <div className="foxbel__result-list">
            {tracks.map((item) => (
                <div key={item.id} className="foxbel__result-item">
                    <ItemTrack 
                        track={item}
                        setFrontPage={setFrontPage}
                        setPlayMp3={setPlayMp3}
                        isUserLogged={isUserLogged}
                    />
                </div>
            ))}
        </div>
    )
}

export default ListTracks