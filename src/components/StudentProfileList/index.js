import React, { useEffect, useState } from 'react'
import './index.scss'
import { getStudentProfiles } from '../../utils/api'

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
    getStudentProfiles().then(response => {
      const { students } = response.data
      const listOfProfiles = students.map(student => {
        const average = student.grades.reduce((accumulator, grade) => {
          return accumulator + Number(grade)
        }, 0) / student.grades.length
        return {
          ...student,
          average,
        }
      })
      setStudentList(listOfProfiles)
      setFilteredList(listOfProfiles)
    })
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
          return <li key={profile.id}>
            <div className="student-profile-list-container">
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
            </div>
          </li>
        })}
      </ul>
    </div>
  );
}

export default StudentProfileList
