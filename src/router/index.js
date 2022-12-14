import Vue from 'vue'
import VueRouter from 'vue-router'
import Chatroom from '../views/Chatroom.vue'
import WelcomePage from '../views/WelcomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom
  },
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
