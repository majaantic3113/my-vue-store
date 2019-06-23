const state = {
  loggedIn: false,
  username: ''
}

const mutations = {
  SET_IF_USER_IS_LOGGED_IN(state, isLogged) {
    state.loggedIn = isLogged
  },
  SET_USERNAME(state, username) {
    state.username = username
  }
}

const actions = {
  setIfUserIsLoggedIn: ({ commit }, isLogged) => {
    commit('SET_IF_USER_IS_LOGGED_IN', isLogged)
  },
  setUsername: ({ commit }, username) => {
    commit('SET_USERNAME', username)
  }

}

const getters = {
  loggedIn: state => state.loggedIn,
  username: state => state.username
}

export default {
  state,
  mutations,
  actions,
  getters
}
