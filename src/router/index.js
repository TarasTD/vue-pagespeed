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
      component: mainView,
      props: { url: 'belvilla.com/holiday-home/austria/saalbach-hinterglemm-8-persons-AT-5754-23' }
    }, {
      path: '/search',
      name: 'search',
      component: mainView,
      props: { url: 'belvilla.com/search' }
    }, {
      path: '/home',
      name: 'home',
      component: mainView,
      props: { url: 'belvilla.com' }
    }, {
      path: '/',
      name: 'homePage',
      component: mainView,
      props: { url: 'belvilla.com' },
      redirect: '/home'
    }
  ]
})
