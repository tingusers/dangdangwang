import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/pei/home/index.vue'
import Miao from 'components/pei/miao/miao.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        miaofooter:false,
        auth:false
      }
    },
    {
      path: '/miao',
      name: 'miao',
      component: Miao,
      meta:{
        miaofooter:true,
        auth:false
      }
    },
    {
      path: '/pinmiao',
      name: 'pinmiao',
      meta:{
        miaofooter:true,
        auth:false
      },
      component:()=>import('./components/pei/pinmiao')
    },
    {
      path: '/pintuan',
      name: 'pintuan',
      meta:{
        miaofooter:true,
        auth:false
      },
      component:()=>import('./components/pei/pintuan')
    },
    {
      path: '/grabble',
      name: 'grabble',
      meta:{
        miaofooter:false,
        auth:false
      },
      component:()=>import('./components/pei/grabble')
    },
   
  ]
})
