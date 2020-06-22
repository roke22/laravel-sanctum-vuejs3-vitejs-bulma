import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://tudominioaqui.com/'

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: null
  },

  getters: {
    authenticated (state) {
      return state.authenticated
    },

    user (state) {
      return state.user
    }
  },

  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },

    SET_USER (state, value) {
      state.user = value
    }
  },

  actions: {
    async signIn ({ dispatch }, credentials) {
      await axios.get('/sanctum/csrf-cookie')
      await axios.post('/api/login', credentials)
        .catch(() => (console.log('No autorizado')))

      return dispatch('me')
    },

    async signOut ({ dispatch }) {
      await axios.post('/api/logout')

      return dispatch('me')
    },

    checkSign ({ dispatch }) {
      return dispatch('me')
    },

    me ({ commit }) {
      console.log('antes de ir')
      return axios.get('/api/user').then((response) => {
        commit('SET_AUTHENTICATED', true)
        console.log('autenticado a true')
        commit('SET_USER', response.data)
      }).catch(() => {
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', null)
      })
    }
  }
}
