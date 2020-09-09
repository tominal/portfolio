import axios from 'axios'

export default {
  login(f) {
    return axios.post(process.env.API_URL + "/login", f)
  }
}
