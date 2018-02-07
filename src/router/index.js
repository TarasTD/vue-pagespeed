import Vue from 'vue'
import Router from 'vue-router'
import mainView from '@/views/main-view.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/property',
      name: 'property',
      component: mainView
    }, {
      path: '/search',
      name: 'search',
      component: mainView
    }, {
      path: '/home',
      name: 'home',
      component: mainView
    }, {
      path: '/',
      name: 'homePage',
      component: mainView,
      redirect: '/home'
    }
  ]
})
