import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../auth/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home/Home.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro/Registro.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/recuperar',
    name: 'Recuperar',
    component: () => import('../views/Recuperar/RecuperarPassword.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/password/reset/:token',
    name: 'ModificarContraseña',
    component: () => import('../views/Recuperar/CambiarPassword.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Login/Login.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth.state.authenticated) {
      next()
      return
    }
    next('/login')
    return
  }
  next()
})

export default router
