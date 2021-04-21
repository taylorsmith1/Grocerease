import axios from 'axios'

// CHANGE TO REST API ENDPOINTS
const INSTRUCTOR = 'in28minutes'
const API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${API_URL}/instructors/${INSTRUCTOR}`

class CourseDataService {

    retrieveAllPurchases(name) {
        return axios.get(`http://grocerease-env.eba-dtky2evz.us-east-2.elasticbeanstalk.com/v1/get_last_ten`);
    }
}

export default new CourseDataService()

