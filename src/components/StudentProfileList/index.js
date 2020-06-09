import React, { useEffect, useState } from 'react'
import './index.scss'
import { getStudentProfiles } from '../../utils/api'

function StudentProfileList() {
  const [studentList, setStudentList] = useState([])
  useEffect(() => {
    getStudentProfiles().then(response => {
      const { students } = response.data
      setStudentList(students.map(student => {
        const average = student.grades.reduce((accumulator, grade) => {
          return accumulator + Number(grade)
        }, 0) / student.grades.length
        return {
          ...student,
          average,
        }
      }))
    })
  }, [])
  return (
    <ul className="student-profile-list">
      {studentList.map(profile => {
        return <li key={profile.id}>
          <div>
            <img src={profile.pic} alt={`${profile.firstName} ${profile.lastName}`} />
            <h4>{`${profile.firstName} ${profile.lastName}`}</h4>
            <p>Email: {profile.email}</p>
            <p>Company: {profile.company}</p>
            <p>Skill: {profile.skill}</p>
            <p>Average: {profile.average}%</p>
          </div>
        </li>
      })}
    </ul>
  );
}

export default StudentProfileList
