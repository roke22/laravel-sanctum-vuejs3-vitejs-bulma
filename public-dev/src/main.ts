import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import LoginVue from './components/Login.vue'
import PageNotFoundVue from './components/PageNotFound.vue'
import './assets/bulma.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faEnvelope, faCheck, faLock} from '@fortawesome/free-solid-svg-icons'
// import {far} from '@fortawesome/free-regular-svg-icons'
// import {fab} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faCheck, faLock)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", name: "login", component: LoginVue
        },
        { path: "/:pathMatch(.*)*", name:"notFound", component: PageNotFoundVue }
    ]
})

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
