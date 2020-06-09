import axios from 'axios'
import CONSTANTS from './constants'

const { API_ENDPOINTS: { BASE, STUDENT_PROFILES } } = CONSTANTS

const api = axios.create({
    baseURL: BASE,
})

function getStudentProfiles() {
    return api.get(STUDENT_PROFILES).then(response => {
        const { students } = response.data
        const listOfProfiles = students.map(student => {
            const average = student.grades.reduce((accumulator, grade) => {
                return accumulator + Number(grade)
            }, 0) / student.grades.length
            return {
                ...student,
                tags: [],
                tagString: '',
                average,
            }
        })
        return listOfProfiles
    })
}

export default { getStudentProfiles }