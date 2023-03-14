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
        <div>
            {currentActivity > 0 && 
                <button onClick={handlePrevActivity}>Previous</button>
            }
             {currentActivity < activities.length - 1 && 
                <button onClick={handleNextActivity}>Next</button>
            }
            {activities[currentActivity]}
        </div>
    )
}
