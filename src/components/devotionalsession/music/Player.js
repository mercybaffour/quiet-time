import React, { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"


export default function Player({ accessToken, trackUri }) {
    const [play, setPlay] = useState(false)

    // set our state value play to true if trackUri is present, 
    // this allows the music player to automatically play the song we select
    useEffect(() => {
        setPlay(true)
    }, [trackUri])

    if (!accessToken) return null
    
    return (
        <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={state => !state.isPlaying && setPlay(false)}
        play={play}
        uris={trackUri ? trackUri : []}
        styles={{
            activeColor: "#fff",
            bgColor: "#333",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
            height: "55px",
        }}
        />
    )
}
