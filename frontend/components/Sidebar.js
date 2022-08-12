
import Link from "next/link"

const Sidebar = ({ isUserLogged }) => {
    return (
        <>
            <aside className="foxbel__aside">
                <div className="foxbel__aside-title">
                    <h2>Foxbel Music</h2>
                </div>
                {isUserLogged ?
                    <div className="foxbel__menu">
                        <h4>Mi librería</h4>
                        <div className="foxbel__menu-list">

                            <a href="#">Reciente</a>
                            <a href="#">Artistas</a>
                            <a href="#">Albums</a>

                            <Link href="/favorites">
                                <a >Canciones</a>
                            </Link>
                            

                            <a href="#">Estaciones</a>
                        </div>
                    </div>
                    :
                    <></>
                }
                <div className="foxbel__menu">
                    <h4>Playlist</h4>
                    <div className="foxbel__menu-list">
                        <a href="#">Metal</a>
                        <a href="#">Para bailar</a>
                        <a href="#">Rock 90s</a>
                        <a href="#">Baladas</a>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Sidebar