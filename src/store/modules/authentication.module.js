export default {
  state: {
    user: {}
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  actions: {
    setUser({ commit }, data) {
      commit('SET_USER', data)
    }
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data
    }
  }
}
