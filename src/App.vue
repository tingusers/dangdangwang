<template>
  <div id="app">
    <router-view> </router-view>
    <Miaofooter v-if="$route.meta.miaofooter"/>
  </div>
</template>

<script>
import Miaofooter from './components/pei/miao/miaofooter/index'
export default {
  name: 'app',
  components: {
    Miaofooter,
    
  },
}
</script>

<style>
#app {
  width:100%;
  height:100%;
  font-size: 0.14rem
}
</style>
