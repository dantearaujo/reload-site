import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Sobre from '../views/sobre.vue'
import Contato from '../views/contato.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/sobre',
    name: 'Contato',
    component: Contato
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
