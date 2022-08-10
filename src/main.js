import Vue from 'vue'
import App from './App.vue'
import router from './router'
import helpers from './helpers/index.js'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

Vue.config.productionTip = false

const customHelpers = {
  install() {
    Vue.helpers = helpers
    Vue.prototype.$helpers = helpers
  }
}
Vue.use(customHelpers);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
