import axios from 'axios'

export const API_URL = `https://covid19-api.com`



const $api = axios.create({
    baseURL: API_URL   
 })

 export default $api