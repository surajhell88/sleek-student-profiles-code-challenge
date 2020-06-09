import React, { useEffect, useState } from 'react'
import './App.scss'
import { getStudentProfiles } from '../utils/api'

function App() {
  const [studentList, setStudentList] = useState([])
  useEffect(() => {
    getStudentProfiles().then(response => {
      const { students } = response.data
      setStudentList(students)
    })
  }, [])
  return (
    <ul>
      {studentList.map(profile => {
        return <li key={profile.id}>{`${profile.firstName} ${profile.lastName}`}</li>
      })}
    </ul>
  );
}

export default App
