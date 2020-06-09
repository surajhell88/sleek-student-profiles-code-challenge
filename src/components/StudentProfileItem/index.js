import React, { useState } from 'react'
import { ReactComponent as DownArrow } from './down-arrow.svg'

import './index.scss'
import TagManager from '../TagManager'

function StudentProfileItem({ profile, addTagToProfile }) {
    const [showGrades, setShowGrades] = useState(false)
    function toggleShowGrades() {
        setShowGrades(!showGrades)
    }
    return <li className="student-profile-item">
        <div className="student-profile-item-container" onClick={toggleShowGrades}>
            <div className="student-profile-item-image">
                <img src={profile.pic} alt={`${profile.firstName} ${profile.lastName}`} />
            </div>
            <div className="student-profile-item-info">
                <h4>{`${profile.firstName} ${profile.lastName}`}</h4>
                <p>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
                <p>Company: {profile.company}</p>
                <p>Skill: {profile.skill}</p>
                <p>Average: {profile.average}%</p>
                {
                    showGrades &&
                    <div>
                        <table className="student-profile-item-info-grades">
                            <tbody>
                                {profile.grades.map((grade, i) => {
                                    return <tr key={i}>
                                        <td style={{ width: '70px' }}>Test {i + 1}</td>
                                        <td>{grade}%</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <TagManager
                            tagList={profile.tags}
                            createNewTag={
                                (newTag) => addTagToProfile(profile.id, newTag)
                            }
                        />
                    </div>
                }
            </div>
            <div className="student-profile-item-action">
                <DownArrow className={`${showGrades && 'rotate-up'}`} />
            </div>
        </div>
    </li>
}

export default StudentProfileItem