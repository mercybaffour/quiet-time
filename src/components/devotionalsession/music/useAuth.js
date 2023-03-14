import { useState, useEffect } from "react"
import axios from "axios"

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [expiresIn, setExpiresIn] = useState()

    // send the code value as the request body and on success of this route, 
    // we will receive the access_token, refresh_token and expires_in values
    useEffect(() => {
        (async () => {
        try {
            const {
            data: { access_token, refresh_token, expires_in },
            } = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
            code,
            })
            setAccessToken(access_token)
            setRefreshToken(refresh_token)
            setExpiresIn(expires_in)
            window.history.pushState({}, null, "/")
        } catch {
            window.location = "/"
        }
        })()
    }, [code])

    //pass the refreshToken as the body here and on success of this route,
    //we will receive the access_token and expires_in values
    useEffect(() => {
        if (!refreshToken || !expiresIn) return
        const interval = setInterval(async () => {
        try {
            const {
            data: { access_token, expires_in },
            } = await axios.post(`${process.env.REACT_APP_BASE_URL}/refresh`, {
            refreshToken,
            })
            setAccessToken(access_token)
            setExpiresIn(expires_in)
        } catch {
            window.location = "/"
        }
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    //will return the accessToken which will be used by the Spotify web player and for fetching artists and songs
    return accessToken
}

export default useAuth