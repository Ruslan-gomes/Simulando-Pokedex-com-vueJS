import Vue from 'vue'
import App from './App.vue'
//import bulma from '../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

require("./assets/main.scss")

new Vue({
  render: h => h(App),
}).$mount('#app')
