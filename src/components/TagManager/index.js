import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.scss'

function TagManager({ tagList, createNewTag }) {
    const [tagInput, setTagInput] = useState('')
    function handleInputClick(e) {
        e.stopPropagation(); // stop click event to propagate to parent which toggles the grades info
    }
    function handleChange(e) {
        setTagInput(e.target.value)
    }
    function addTag(e) { // add tag on enter key
        const trimmedTagInput = tagInput.trim()
        if (e.keyCode === 13 && trimmedTagInput) { // check for enter key
            createNewTag(trimmedTagInput)
            setTagInput('') // reset input value
        }
    }
    return <div className="student-profile-item-tags-container">
        <div className="student-profile-item-tags-list">
            {
                tagList &&
                tagList.map((tag, i) => {
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
                maxLength="30"
            />
        </div>
    </div>
}

TagManager.propTypes = {
    tagList: PropTypes.arrayOf(PropTypes.string),
    createNewTag: PropTypes.func
}

export default TagManager