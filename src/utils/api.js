import axios from 'axios'
import CONSTANTS from './constants'

const { API_ENDPOINTS: { BASE, STUDENT_PROFILES } } = CONSTANTS

const api = axios.create({
    baseURL: BASE,
})

function getStudentProfiles() {
    return api.get(STUDENT_PROFILES)
}

export { getStudentProfiles }