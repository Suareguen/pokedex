import axios from 'axios'

const app = axios.create({
    baseURL: 'http://192.168.1.57:3000'
})

export default app