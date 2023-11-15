import axios from 'axios'

const config = {
    baseURL: import.meta.env.VITE_BASE_API_URL
}


export const axiosInstance = axios.create(config)