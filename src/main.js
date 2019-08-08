import Vue from 'vue'
import App from './App.vue'
import "../public/fonticon/iconfont.css"
import "../public/reset.css"
import store from './store/index'
import router from './router'
import VueTouch from 'vue-touch'
import './components1/index.js'
Vue.config.productionTip = false

Vue.use(VueTouch, {name: 'v-touch'})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
