import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/niffler',
    name: 'Niffer',

    component: () => import('../views/Niffler.vue')
  },
  {
    path: '/apollo',
    name: 'Apollo',

    component: () => import('../views/Apollo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
