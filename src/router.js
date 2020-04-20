import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bio from './views/Bio.vue'
import Contact from './views/Contact.vue' 
import CV from './views/CV.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/bio',
        name: 'bio',
        component: Bio
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/CV',
        name: 'CV',
        component: CV
    }
  ]
})
