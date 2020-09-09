import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL;

export default {
  csrf() {
    return axios.get('/')
  },
  login(f) {
    return axios.post("/login", f)
  },
  blog(f) {
    return axios.post("/blogs", f)
  },
  blogs() {
    return axios.get('/blogs')
  },
  createBlog(f) {
    return axios.post('/blogs', f)
  },

  changePass(f) {
    return axios.post('/change', f)
  }
}
