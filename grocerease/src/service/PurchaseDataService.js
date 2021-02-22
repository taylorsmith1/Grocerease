import axios from 'axios'

// CHANGE TO REST API ENDPOINTS
const INSTRUCTOR = 'in28minutes'
const API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllCourses(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }
}

export default new CourseDataService()

