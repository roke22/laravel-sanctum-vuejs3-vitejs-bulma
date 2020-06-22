import Vue from 'vue'
import Vuex from 'vuex'
import Index from './Index.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import auth from './auth/auth'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  }
})

store.dispatch('auth/me').then(() => {
  new Vue({
    router,
    vuetify,
    store,
    render: h => h(Index)
  }).$mount('#app')
})
