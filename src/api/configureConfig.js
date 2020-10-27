import axios from 'axios'

const BASE_API_URL = 'http://demo.sibers.com'

const baseApi = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000
})

export default baseApi