import React, { useState } from 'react'
import DevotionalSession from '../components/devotionalsession/DevotionalSession'
import { Button } from '@mui/material'
import Navbar from '../components/Navbar'

export default function DevotionalPage() {
    //initialize state for duration and sequence
    const [beginSession, setBeginSession] = useState(false)
    const [duration, setDuration] = useState(30)
    const [sequence, setSequence] = useState(['Music', 'Prayer', 'Scripture', 'Journaling'])

    return (
        <>
            <Navbar />
            <h1>My Devotional</h1>
            {/* Add Form for user to specify duration and sequence */}
            <Button
                onClick={() => setBeginSession(true)}
            >
               {beginSession ? "" : "Start"} 
            </Button>
            {beginSession && <DevotionalSession duration={20} sequence={sequence} /> }
            <p>Additional content on the page</p>
        </>
    )
}
