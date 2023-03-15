import React, { useState } from 'react';
import Music from "./music/Music"
import Prayer from "./Prayer"
import Scripture from "./Scripture"
import Journaling from "./Journaling"

export default function DevotionalSession() {
    const [currentActivity, setCurrentActivity] = useState(0)

    const activities = [
        <Music />,
        <Prayer />,
        <Scripture />,
        <Journaling />
    ]

    const handleNextActivity = () => {
        setCurrentActivity(currentActivity + 1)
    }

    const handlePrevActivity = () => {
        setCurrentActivity(currentActivity - 1)
    }

    return (
        <>
            <div className="control-btn">
                {currentActivity > 0 && 
                    <button className="btn" onClick={handlePrevActivity}>Previous</button>
                }
                {currentActivity < activities.length - 1 && 
                    <button className="btn" onClick={handleNextActivity}>Next</button>
                }
                
            </div>
            <div>
                {activities[currentActivity]}
            </div>
        </>
    )
}
