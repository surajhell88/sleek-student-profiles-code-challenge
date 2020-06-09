import React, { useState } from 'react'
import { ReactComponent as DownArrow } from './down-arrow.svg'

import './index.scss'

function StudentProfileItem({ profile, addTagToProfile }) {
    const [showGrades, setShowGrades] = useState(false)
    const [tagInput, setTagInput] = useState('')
    function toggleShowGrades() {
        setShowGrades(!showGrades)
    }
    function handleInputClick(e) {
        e.stopPropagation(); // stop click event to propagate to parent which toggles the grades info
    }
    function handleChange(e) {
        setTagInput(e.target.value)
    }
    function addTag(e) { // add tag on enter key
        if (e.keyCode === 13 && tagInput) { // check for enter key
            addTagToProfile(profile.id, tagInput)
            setTagInput('') // reset input value
        }
    }
    return <li className="student-profile-item">
        <div className="student-profile-item-container" onClick={toggleShowGrades}>
            <div className="student-profile-item-image">
                <img src={profile.pic} alt={`${profile.firstName} ${profile.lastName}`} />
            </div>
            <div className="student-profile-item-info">
                <h4>{`${profile.firstName} ${profile.lastName}`}</h4>
                <p>Email: {profile.email}</p>
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
                        <div className="student-profile-item-tags-container">
                            <div className="student-profile-item-tags-list">
                                {
                                    profile.tags &&
                                    profile.tags.map((tag, i) => {
                                        return <div className="student-profile-item-tags-list-item" key={i}>
                                            {tag}
                                        </div>
                                    })
                                }
                            </div>
                            <div className="student-profile-item-tags-input">
                                <input
                                    type="text"
                                    placeholder="Add a Tag"
                                    value={tagInput}
                                    onChange={handleChange}
                                    onKeyDown={addTag}
                                    onClick={handleInputClick}
                                />
                            </div>
                        </div>
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