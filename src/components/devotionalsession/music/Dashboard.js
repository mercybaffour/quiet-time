import React, { useState, useEffect } from "react"

import useAuth from "./useAuth"
import Player from "./Player"
import TrackSearchResult from "./TrackSearchResult"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID
})

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState({})
    const [lyrics, setLyrics] = useState("")

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
        setLyrics("")
    }

    //based on any changes in the playingTrack state, 
    //if this state has a value, the API call for fetching lyrics will be made using this state as its body
    //the value returned from this API call will be set to the lyrics state
    useEffect(() => {
        if (!playingTrack) return;
        (async () => {
          const {
            data: { lyrics },
          } = await axios.get(`${process.env.REACT_APP_BASE_URL}/lyrics`, {
            params: {
              track: playingTrack.title,
              artist: playingTrack.artist,
            },
          })
          setLyrics(lyrics)
        })()
    }, [playingTrack])

    //triggered when there are any changes in the accessToken state to ensure we have correct value
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    //triggered when there are any changes in the accessToken or search state
    //fetch artists and songs based on search value
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return
    
        let cancel = false;
        (async () => {
          const { body } = await spotifyApi.searchTracks(search)
          if (cancel) return
          setSearchResults(
            body.tracks.items.map(track => {
              const smallestAlbumImage = track.album.images.reduce(
                (smallest, image) => {
                  if (image.height < smallest.height) return image
                  return smallest
                },
                track.album.images[0]
              )
    
              return {
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: smallestAlbumImage.url,
              }
            })
          )
        })()
    
        return () => (cancel = true)
    }, [search, accessToken])

    return (
        <>
            <div className="dashboard-container">
                <input 
                className="search-input"
                type='search'
                placeholder='Search Songs or Artists'
                value={search}
                onChange={e => setSearch(e.target.value)}
                >
                </input>
                <div className='search-results-container'>
                    {searchResults.map(track => (
                        <TrackSearchResult 
                            track={track}
                            key={track.uri}
                            chooseTrack={chooseTrack}
                        />
                    ))}
                    {searchResults.length === 0 && (
                        <div className="lyrics-container">{lyrics}</div>
                    )}
                </div>
                <div className='dashboard-player'>
                    <Player 
                        accessToken={accessToken}
                        trackUri={playingTrack?.uri}
                    />
                </div>
            </div>
        </>
    )
}
