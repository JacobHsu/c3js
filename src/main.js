import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueMoment from 'vue-moment'

Vue.config.productionTip = false
Vue.use(vueMoment);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
