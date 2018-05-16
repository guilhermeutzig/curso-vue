import api from '../../api/imgur'
import qs from 'qs'
import { router } from '../../main'

const state = {
  token: window.localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  login: () => {
    api.login()
  },
  finalizeLogin: ({ commit }, hash) => {
    const queryParams = qs.parse(hash.replace('#', ''))
    commit('setToken', queryParams.access_token)
    window.localStorage.setItem('imgur_token', queryParams.access_token)
    router.push('/')
  },
  logout: ({ commit }) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token')
  }
}

const mutations = {
  setToken: (state, newToken) => {
    state.token = newToken
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
