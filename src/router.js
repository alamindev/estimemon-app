import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import ContactComponent from './components/ContactComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
       
    {
      path: '/contact',
      name: 'not-found',
      component: ContactComponent
    },
    {
      path: '/contact',
      name: 'contact',
      component: NotFound
    },
    
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
