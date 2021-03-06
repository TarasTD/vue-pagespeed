// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'chartist/dist/chartist.min.css'

Vue.config.productionTip = false
Vue.use(Buefy)

Vue.use(require('vue-chartist'), {
  messageNoData: 'You have not enough data',
  classNoData: 'empty'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// service worker
if (location.protocol === 'https:' && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
}
