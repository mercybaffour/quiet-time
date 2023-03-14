import React from 'react'

export default function TrackSearchResult({track, chooseTrack}) {
    function handlePlay(){
        chooseTrack(track)
    }

    return (
        <div className='result-container' onClick={handlePlay}>
            <img src={track.albumUrl} alt='track' className='result-image'/>
            <div className='song-container'>
                <p className='title-text'>{track.title}</p>
                <p className='artist-text'>{track.artist}</p>
            </div>
        </div>
    )
}
