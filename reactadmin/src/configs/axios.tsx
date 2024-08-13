import axios from "axios";

const axiosIntance = axios.create({
    baseURL:'http://127.0.0.1:8000/api/v1/',
    headers:{
        'Content-Type' : 'application/json'
    },
    withCredentials: true
})

axiosIntance.interceptors.response.use(
    response => {
        return response
    },
    error => {

        return Promise.reject(error)
    }
)

export default axiosIntance