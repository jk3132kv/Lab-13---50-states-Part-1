import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        let data = {visited: visited}
        return axios.patch('/api/states/' + stateName, data).then( response => {
            return response.data
        })
    }
}