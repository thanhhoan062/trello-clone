import axios from 'axios'
import queryString from 'query-string'

const baseUrl = 'http://127.0.0.1:5000/api/v1'
const getToken = () => localStorage.getItem('token')

const axiosClient = axios.create({
    baseUrl: baseUrl,
    paramSeralizer: param => queryString.stringify({ param })
})

axiosClient.interceptors.request.use(async config => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getToken()}`
        }
    }
})

axiosClient.interceptors.request.use(response => {
    if (response && response.data) return response.data
    return response
}, err => {
    if (!err.response) {
        return alert(err)
    }
    throw err.response
})

export default axiosClient