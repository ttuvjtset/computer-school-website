import Vue from 'vue'
import App from './App.vue'
import Chart from 'vue2-frappe'

Vue.use(Chart)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
