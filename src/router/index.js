import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Work',
    name: 'Work',
    component: Work,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = new VueRouter({
  routes
})

export default router
