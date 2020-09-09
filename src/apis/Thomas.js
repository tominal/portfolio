import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL;

export default {
  login(f) {
    return axios.post("/login", f)
  },
  blog(f) {
    return axios.post("/blogs", f)
  }
}
