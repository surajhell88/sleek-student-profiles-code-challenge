import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as DownArrow } from './down-arrow.svg'
import { TagManager } from 'components'

import './index.scss'

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

StudentProfileItem.propTypes = {
    profile: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        skill: PropTypes.string,
        city: PropTypes.string,
        pic: PropTypes.string,
        email: PropTypes.string,
        grades: PropTypes.arrayOf(PropTypes.string),
        id: PropTypes.string,
        company: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        tagString: PropTypes.string
    }),
    addTagToProfile: PropTypes.func
}

export default StudentProfileItem