import React, { useEffect, useState } from 'react'
import './index.scss'
import { getStudentProfiles } from '../../utils/api'
import StudentProfileItem from './StudentProfileItem';

function matchStrings(string1, string2) {
  return string1.toLowerCase().indexOf(string2.toLowerCase()) !== -1;
}

function StudentProfileList() {
  const [searchKey, setSearchKey] = useState('')
  const [studentList, setStudentList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  function handleChange(e) {
    setSearchKey(e.target.value)
  }
  useEffect(() => { // filter by search input value
    if (searchKey) {
      const filteredList = studentList.filter(student => {
        const { firstName, lastName } = student
        return matchStrings(firstName, searchKey) || matchStrings(lastName, searchKey)
      })
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
        className="student-profile-search"
        type="text"
        value={searchKey}
        onChange={handleChange}
        placeholder="Search..."
      />
      <ul className="student-profile-list">
        {filteredList.map(profile => {
          return <StudentProfileItem key={profile.id} profile={profile} />
        })}
      </ul>
    </div>
  );
}

export default StudentProfileList
