import React, { useState } from "react";

import { Howl } from "howler";

const Player = ({ playMp3, frontPage }) => {

    // const audio = new Audio(playMp3)
    const [isPlay, setIsPlay] = useState(false)


    const sound = new Howl({
        src: [playMp3],
        html5: true
    })

    const playMusic = () => {

        sound.play()
        setIsPlay(true)
    }

    const pauseMusic = () => {
        console.log("deberia poner pause")
        sound.pause()
        setIsPlay(false)
    }

    // const musicPlayers = useRef<HTMLAudioElement | undefined>(
    //     typeof Audio !== "undefined" ? new Audio(playMp3) : undefined
    // );

    return (
        <>
            {playMp3 ?
                <div className="foxbel__player">
                    <img
                        src={frontPage}
                        alt="Song"
                    />
                    <div className="foxbel__player-content">
                        <div className="foxbel__player-text">
                            <strong>
                                Canción
                            </strong>
                            <span>I don't know</span>
                        </div>
                        <div >
                            Reproductor
                            <i className="fa-solid fa-play"></i>

                            <button onClick={playMusic}>Play</button>
                            <button onClick={pauseMusic}>Pause</button>

                        </div>
                        <div>
                            Volume
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}

export default Player