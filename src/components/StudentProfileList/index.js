import React, { useEffect, useState } from 'react'
import './index.scss'
import { api, filter } from 'utils'
import { StudentProfileItem } from 'components'

function StudentProfileList() {
  const [searchKey, setSearchKey] = useState('')
  const [studentList, setStudentList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [hasErrorFetching, setHasErrorFetching] = useState(false)
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
    const trimmedSearchKey = searchKey.trim()
    if (trimmedSearchKey) {
      const filteredList = filter(studentList, ['firstName', 'lastName', 'tagString'], trimmedSearchKey)
      setFilteredList(filteredList)
    } else {
      setFilteredList(studentList)
    }
  }, [searchKey, studentList])
  useEffect(() => { // fetch student profiles once
    api.getStudentProfiles().then(listOfProfiles => {
      setStudentList(listOfProfiles)
    }).catch(() => {
      setHasErrorFetching(true)
    }).then(() => {
      // always executes
      setIsFetching(false)
    })
  }, [])
  if (hasErrorFetching) {
    return <h3 className="student-profile-alerts">Error fetching profiles</h3>
  }
  if (isFetching) {
    return <h3 className="student-profile-alerts">Fetching Profiles...</h3>
  }
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
