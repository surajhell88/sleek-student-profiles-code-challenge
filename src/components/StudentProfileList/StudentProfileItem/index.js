import React, { useState } from 'react'
import { ReactComponent as DownArrow } from './down-arrow.svg';

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
        if (e.keyCode === 13) { // check for enter key
            addTagToProfile(profile.id, tagInput)
            setTagInput('') // reset input value
        }
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
                {
                    showGrades &&
                    <div>
                        <table className="student-profile-list-info-grades">
                            <tbody>
                                {profile.grades.map((grade, i) => {
                                    return <tr key={i}>
                                        <td style={{ width: '70px' }}>Test {i + 1}</td>
                                        <td>{grade}%</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        <div className="student-profile-list-tags-container">
                            <ul className="student-profile-list-tags-list">
                                {
                                    profile.tags &&
                                    profile.tags.map((tag, i) => {
                                        return <li className="student-profile-list-tags-list-item" key={i}>
                                            {tag}
                                        </li>
                                    })
                                }
                            </ul>
                            <div className="student-profile-list-tags-input">
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
            <div className="student-profile-list-action">
                <DownArrow className={`${showGrades && 'rotate-up'}`} />
            </div>
        </div>
    </li>
}

export default StudentProfileItem