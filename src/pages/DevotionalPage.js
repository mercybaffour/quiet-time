import React, { useState } from 'react'
import DevotionalSession from '../components/devotionalsession/DevotionalSession'
import { Modal, Box} from '@mui/material'
import Navbar from '../components/Navbar'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '70%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    overflow: 'scroll'
}
  
export default function DevotionalPage() {
    //initialize state for duration and sequence
    const [beginSession, setBeginSession] = useState(false)
    const [duration, setDuration] = useState(30)
    const [sequence, setSequence] = useState(['Music', 'Prayer', 'Scripture', 'Journaling'])
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setBeginSession(false)
        setOpen(false)  
    }

    const handleSessionStart = () => {
        setOpen(true)
        setBeginSession(true)
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>My Devotional</h1>
                {/* Add Form for user to specify duration and sequence */}
                {beginSession ? "" : <button className="btn start-btn" onClick={handleSessionStart}>Start Devotional</button>}
                {beginSession && 
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                        <Box sx={{ ...style}}>
                            <DevotionalSession duration={20} sequence={sequence} />
                        </Box>
                    </Modal>
                }
            </div>
        </>
    )
}
