import Vue from 'vue';
import App from './App.vue';
import store from "store";
import router from "router";
import VueTouch from 'vue-touch';
// 全局注册
import './common/components/index.js';
import {BackTop} from 'ant-design-vue';
import {Carousel} from 'ant-design-vue';
import '../public/public.css';
Vue.component(BackTop.name,BackTop);
Vue.component(Carousel.name,Carousel);
Vue.config.productionTip = false;
Vue.use(VueTouch,{name:'v-touch'});
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
