import Vue from 'vue'
import Router from 'vue-router'
import mainView from '@/views/main-view.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: mainView
  }]
})
