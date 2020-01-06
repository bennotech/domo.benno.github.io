import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import about from '@/components/about'
import pricing from '@/components/pricing'
import legal from '@/components/legal'
import error from '@/components/error-page'

import bennoNavbar from '@/components/benno-navbar'
import bennoFooter from '@/components/benno-footer'

Vue.use(Router)

Vue.component('benno-navbar', bennoNavbar)
Vue.component('benno-footer', bennoFooter)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/about', name: 'about', component: about },
    { path: '/pricing', name: 'pricing', component: pricing },
    { path: '/legal', name: 'legal', component: legal },
    { path: '*', name: 'error-page', component: error }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 }
    }
  }

})
