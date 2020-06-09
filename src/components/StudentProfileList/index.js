import React, { useEffect, useState } from 'react'
import './index.scss'
import { getStudentProfiles } from '../../utils/api'
import StudentProfileItem from '../StudentProfileItem'
import { filter } from '../../utils/filter'

function StudentProfileList() {
  const [searchKey, setSearchKey] = useState('')
  const [studentList, setStudentList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  function handleChange(e) {
    setSearchKey(e.target.value)
  }
  function addTagToProfile(profileId, tagName) {
    const newStudentList = studentList.map(student => {
      let tags = student.tags
      if (student.id === profileId && tags.indexOf(tagName) === -1) {
        tags.push(tagName.toLowerCase())
      }
      return {
        ...student,
        tags,
        tagString: tags.join(',')
      }
    })
    setStudentList(newStudentList)
  }
  useEffect(() => { // filter by search input value
    if (searchKey) {
      const filteredList = filter(studentList, ['firstName', 'lastName', 'tagString'], searchKey)
      setFilteredList(filteredList)
    } else {
      setFilteredList(studentList)
    }
  }, [searchKey, studentList])
  useEffect(() => { // fetch student profiles once
    getStudentProfiles().then(setStudentList)
  }, [])
  return (
    <div className="student-profile">
      <input
        type="text"
        value={searchKey}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul className="student-profile-list">
        {filteredList.map(profile => {
          return <StudentProfileItem
            key={profile.id}
            profile={profile}
            addTagToProfile={addTagToProfile}
          />
        })}
      </ul>
    </div>
  )
}

export default StudentProfileList
