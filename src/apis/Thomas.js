import axios from 'axios'

export default {
  blog(f) {
    return axios.post(process.env.API_URL + "/api/blogs", f)
  }
}
