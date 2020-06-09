import React, { useState } from 'react'
import { ReactComponent as DownArrow } from './down-arrow.svg';

function StudentProfileItem({ profile }) {
    const [showGrades, setShowGrades] = useState(false)
    function toggleShowGrades() {
        setShowGrades(!showGrades)
    }
    return <li>
        <div className="student-profile-list-container" onClick={toggleShowGrades}>
            <div className="student-profile-list-image">
                <img src={profile.pic} alt={`${profile.firstName} ${profile.lastName}`} />
            </div>
            <div className="student-profile-list-info">
                <h4>{`${profile.firstName} ${profile.lastName}`}</h4>
                <p>Email: {profile.email}</p>
                <p>Company: {profile.company}</p>
                <p>Skill: {profile.skill}</p>
                <p>Average: {profile.average}%</p>
            </div>
            <div className={`student-profile-list-action ${showGrades && 'rotate-up'}`}>
                <DownArrow />
            </div>
        </div>
    </li>
}

export default StudentProfileItem