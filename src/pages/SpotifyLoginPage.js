import React from 'react'
import {Button, Link} from '@mui/material'
import Navbar from '../components/Navbar'

export default function DevotionalPage() {
    const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

    return (
        <>
            <Navbar />
            <p>To begin a devotional session, you must first login with Spotify.</p>
            <Button className="login-btn">
            {/* auth request, we get the code params which will be used to get the access_token */}
                <Link className="login-link" href={AUTH_URL}>Login with Spotify</Link>
            </Button>
        </>
    )
}