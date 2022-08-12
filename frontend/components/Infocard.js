

const Infocard = ({ artist }) => {
    return (
        <>
            <div className="foxbel__banner">
                <div className="foxbel__banner-img">
                    <img
                        src={artist.picture_medium}
                        alt="Song"
                    />
                    <i className="fa-solid fa-play"></i>
                </div>
                <div className="foxbel__banner-content">
                    <h6>{artist.name}</h6>
                    <span>Lo mejor de {artist.name}    {artist.nb_fan} seguidores</span>
                    <p>
                        Eminem, byname of Marshall Bruce Mathers III, (born October 17, 1972, St. Joseph, Missouri, U.S.), American rapper, record producer, and actor who was known as one of the most-controversial and best-selling artists of the early 21st century. Mathers had a turbulent childhood, marked by poverty and allegations of abuse.
                    </p>
                    
                    <button>Reproducir</button>
                </div>
            </div>
        </>
    )
}

export default Infocard